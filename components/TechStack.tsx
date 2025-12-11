"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomContainer from "@/ui/CustomContainer";
import CustomTitle from "@/ui/CustomTitle";
import { FaGlobe, FaMobileAlt, FaDesktop } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

interface TechStackData {
    web: string[];
    mobile: string[];
    desktop: string[];
}

const TechStack = () => {
    const [techStack, setTechStack] = useState<TechStackData | null>(null);
    const { t, language } = useLanguage();

    useEffect(() => {
        axios
            .get("/data.json")
            .then((res) => {
                const data = res.data[language];
                if (data && data.techStack) {
                    setTechStack(data.techStack);
                }
            })
            .catch((err) => console.error("Error fetching tech stack:", err));
    }, [language]);

    if (!techStack) return null;

    return (
        <section id="tech-stack" className="py-20 bg-slate-50 dark:bg-gray-900">
            <CustomContainer>
                <CustomTitle title={t.techStack.title} description={t.techStack.description} success={true} />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border-t-4 border-blue-500 hover:-translate-y-1 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg text-blue-600 dark:text-blue-300 text-lg"><FaGlobe /></span>
                            {t.techStack.web}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {techStack.web.map((tech, idx) => (
                                <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium hover:bg-blue-50 dark:hover:bg-blue-900/40 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border-t-4 border-purple-500 hover:-translate-y-1 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className="bg-purple-100 dark:bg-purple-900 p-2 rounded-lg text-purple-600 dark:text-purple-300 text-lg"><FaMobileAlt /></span>
                            {t.techStack.mobile}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {techStack.mobile.map((tech, idx) => (
                                <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium hover:bg-purple-50 dark:hover:bg-purple-900/40 hover:text-purple-600 dark:hover:text-purple-300 transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border-t-4 border-indigo-500 hover:-translate-y-1 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className="bg-indigo-100 dark:bg-indigo-900 p-2 rounded-lg text-indigo-600 dark:text-indigo-300 text-lg"><FaDesktop /></span>
                            {t.techStack.desktop}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {techStack.desktop.map((tech, idx) => (
                                <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/40 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </CustomContainer>
        </section>
    );
};

export default TechStack;
