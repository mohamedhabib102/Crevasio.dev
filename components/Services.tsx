"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomContainer from "@/ui/CustomContainer";
import CustomTitle from "@/ui/CustomTitle";
import { FaGlobe, FaMobileAlt, FaDesktop, FaCode } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
}

const Services = () => {
    const [services, setServices] = useState<Service[]>([]);
    const { t, language } = useLanguage();

    useEffect(() => {
        axios
            .get("/data.json")
            .then((res) => {
                // Access data based on language, fallback to empty array if path invalid
                const data = res.data[language];
                if (data && data.services) {
                    setServices(data.services);
                }
            })
            .catch((err) => console.error("Error fetching services:", err));
    }, [language]);

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "globe": return <FaGlobe className="text-2xl" />;
            case "smartphone": return <FaMobileAlt className="text-2xl" />;
            case "monitor": return <FaDesktop className="text-2xl" />;
            default: return <FaCode className="text-2xl" />;
        }
    };

    return (
        <section id="services" className="py-20">
            <CustomContainer>
                <CustomTitle title={t.services.title} description={t.services.description} success={true} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
                        >
                            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 text-(--main-color)">
                                {getIcon(service.icon)}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </CustomContainer>
        </section>
    );
};

export default Services;
