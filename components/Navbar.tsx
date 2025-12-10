"use client";
import React, { useState } from "react";
import CustomContainer from "@/ui/CustomContainer";
import ToggleNavbar from "@/ui/ToggleNavbar";
import Logo from "@/ui/Logo";
import { useLanguage } from "@/context/LanguageContext";
import { FaGlobe } from "react-icons/fa";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    const navLinks = [
        { name: t.navbar.home, href: "#hero" },
        { name: t.navbar.services, href: "#services" },
        { name: t.navbar.whyUs, href: "#why-us" },
        { name: t.navbar.portfolio, href: "#portfolio" },
        { name: t.navbar.techStack, href: "#tech-stack" },
        { name: t.navbar.contact, href: "#contact" },
    ];

    const currentLinks = navLinks;

    const toggleLanguage = () => {
        setLanguage(language === "ar" ? "en" : "ar");
    };

    return (
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
            <CustomContainer>
                <div className="flex items-center justify-between h-20">
                    <Logo />

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        <ul className="flex gap-6">
                            {currentLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-gray-600 dark:text-gray-300 hover:text-(--main-color) font-medium transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Language Switcher */}
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 hover:border-(--main-color) text-sm font-medium transition-colors"
                        >
                            <FaGlobe className="text-(--main-color)" />
                            <span>{t.navbar.switchLang}</span>
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="flex items-center gap-4 lg:hidden">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-xs font-medium"
                        >
                            <FaGlobe className="text-(--main-color)" />
                            <span>{language === "ar" ? "EN" : "AR"}</span>
                        </button>
                        <ToggleNavbar toggle={toggle} setToggle={setToggle} />
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden fixed left-0 w-full bg-white dark:bg-gray-900 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${toggle ? "max-h-96 py-4 top-20 border-b border-gray-100" : "max-h-0 top-20"
                        }`}
                >
                    <ul className="flex flex-col gap-4 px-4 text-center">
                        {currentLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={() => setToggle(false)}
                                    className="block py-2 text-gray-600 dark:text-gray-300 hover:text-(--main-color) font-medium"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </CustomContainer>
        </nav>
    );
};

export default Navbar;
