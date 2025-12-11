"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomContainer from "@/ui/CustomContainer";
import CustomTitle from "@/ui/CustomTitle";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import ScrollRevealBox from "@/ui/ScrollRevealBox";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    techStack: string[];
    link: string;
}

const Portfolio = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const { t, language } = useLanguage();

    useEffect(() => {
        axios
            .get("/data.json")
            .then((res) => {
                setProjects(res.data.projects);
            })
            .catch((err) => console.error("Error fetching projects:", err));
    }, []);

    return (
        <section id="portfolio" className="py-20">
            <CustomContainer>
                <CustomTitle title={t.portfolio.title} description={t.portfolio.description} success={true} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {projects.map((project) => (
                        <ScrollRevealBox key={project.id}>
                            <div
                                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                                    <Image
                                        src={`/${project.image}`}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <Link target="_blank" href={project.link} className="bg-white text-gray-900 px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-(--main-color) hover:text-white">
                                            {t.portfolio.view_project}
                                        </Link>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-(--main-color) transition-colors">{project.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.techStack.map((tech, idx) => (
                                            <span key={idx} className="text-xs font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-2 py-1 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href={project.link}
                                        className="w-full flex items-center justify-center gap-2 bg-gray-50 dark:bg-gray-700 hover:bg-(--main-color) hover:text-white dark:hover:bg-(--main-color) text-gray-900 dark:text-white py-2 rounded-lg font-medium transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span>{t.portfolio.view_project}</span>
                                        <FaExternalLinkAlt className="text-sm" />
                                    </a>
                                </div>
                            </div>
                        </ScrollRevealBox>
                    ))}
                </div>
            </CustomContainer>
        </section>
    );
};

export default Portfolio;
