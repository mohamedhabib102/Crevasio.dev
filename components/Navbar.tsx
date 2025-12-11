"use client";
import React, { useState } from "react";
import CustomContainer from "@/ui/CustomContainer";
import ToggleNavbar from "@/ui/ToggleNavbar";
import Logo from "@/ui/Logo";
import DarkModeToggle from "@/ui/DarkModeToggle";
import { useLanguage } from "@/context/LanguageContext";
import { FaGlobe } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

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

    const isAr = language === "ar";

    return (
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
            <CustomContainer>
                <div className="flex items-center justify-between h-20">
                    <motion.div
                        initial={{ opacity: 0, x: isAr ? 20 : -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Logo />
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        <motion.ul
                            className="flex gap-6"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.1,
                                        delayChildren: 0.2, // Wait for logo
                                    }
                                }
                            }}
                        >
                            {currentLinks.map((link) => (
                                <motion.li
                                    key={link.href}
                                    variants={{
                                        hidden: { opacity: 0, y: -5 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 dark:text-gray-300 hover:text-(--main-color) font-medium transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>

                    <motion.div
                        className="lg:flex hidden items-center gap-4"
                        initial={{ opacity: 0, x: isAr ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Language Switcher */}
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 hover:border-(--main-color) text-sm font-medium transition-colors"
                        >
                            <FaGlobe className="text-(--main-color)" />
                            <span>{language === "ar" ? "EN" : "AR"}</span>
                        </button>

                        {/* Dark Mode Toggle */}
                        <DarkModeToggle />
                    </motion.div>

                    {/* Mobile Menu Toggle */}
                    <motion.div
                        className="flex items-center gap-4 lg:hidden"
                        initial={{ opacity: 0, x: isAr ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-xs font-medium"
                        >
                            <FaGlobe className="text-(--main-color)" />
                            <span>{language === "ar" ? "EN" : "AR"}</span>
                        </button>
                        <DarkModeToggle />
                        <ToggleNavbar toggle={toggle} setToggle={setToggle} />
                    </motion.div>
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
                                    className={`
                                        block py-2 text-gray-600 dark:text-gray-300 hover:text-(--main-color) font-medium
                                        ${language === "ar" ? "text-right" : "text-left"}
                                        `}
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
