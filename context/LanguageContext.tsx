"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "ar" | "en";

import { translations } from "@/lib/translations";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    dir: "rtl" | "ltr";
    t: typeof translations["ar"];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>("ar");
    const t = translations[language];

    useEffect(() => {
        // Optional: Load from local storage
        const savedLang = localStorage.getItem("language") as Language;
        if (savedLang) {
            setLanguage(savedLang);
        }
    }, []);

    const dir = language === "ar" ? "rtl" : "ltr";

    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = dir;
        localStorage.setItem("language", language);
    }, [language, dir]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, dir, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
