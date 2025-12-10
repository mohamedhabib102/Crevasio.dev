"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomContainer from "@/ui/CustomContainer";
import CustomTitle from "@/ui/CustomTitle";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

interface Testimonial {
    id: number;
    name: string;
    location: string;
    text: string;
    rating: number;
}

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const { t, language } = useLanguage();

    useEffect(() => {
        console.log(language);
        axios
            .get("/data.json")
            .then((res) => {
                // Access data based on language
                const data = res.data[language];
                if (data && data.testimonials) {
                    setTestimonials(data.testimonials);
                }
            })
            .catch((err) => console.error("Error fetching testimonials:", err));
    }, [language]);

    if (!testimonials || testimonials.length === 0) return null;

    return (
        <section id="testimonials" className="py-20">
            <CustomContainer>
                <CustomTitle title={t.testimonials.title} description={t.testimonials.description} success={true} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {testimonials.map((item) => (
                        <div key={item.id} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 relative">
                            <FaQuoteRight className="text-4xl text-gray-200 dark:text-gray-700 absolute top-4 left-8" />

                            <div className={`
                                flex gap-1 mb-4
                                ${language === "ar" ? "justify-start" : "justify-end"}
                                `}>
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className={`text-sm ${i < item.rating ? "text-yellow-400" : "text-gray-300"}`} />
                                ))}
                            </div>

                            <p className="mt-4 text-gray-600 dark:text-gray-300 mb-6 relative z-10 leading-relaxed min-h-[80px]">
                                "{item.text}"
                            </p>

                            <div className="flex items-center gap-4 border-t border-gray-100 dark:border-gray-700 pt-4">
                                <div className="w-12 h-12 rounded-full bg-linear-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                                    {item.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white">{item.name}</h4>
                                    <p className="text-xs text-gray-500">{item.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </CustomContainer>
        </section>
    );
};

export default Testimonials;
