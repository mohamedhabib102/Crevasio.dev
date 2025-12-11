"use client";
import CustomContainer from "@/ui/CustomContainer";
import CustomTitle from "@/ui/CustomTitle";
import { FaCheckCircle, FaStar, FaHandshake, FaShieldAlt, FaComments } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import ScrollRevealBox from "@/ui/ScrollRevealBox";
import { motion } from "framer-motion";

const Features = () => {
    const { t } = useLanguage();
    return (
        <section id="why-us" className="py-20 bg-slate-50 dark:bg-gray-900">
            <CustomContainer>
                <CustomTitle title={t.features.title} description={t.features.description} success={true} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10 items-center">
                    <ScrollRevealBox>
                        <div className="space-y-8">
                            <div className="flex gap-4 items-start group">
                                <div className="mt-1 bg-green-100 dark:bg-green-900 p-3 rounded-full text-green-600 dark:text-green-300 group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
                                    <FaHandshake className="text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{t.features.integrity}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {t.features.integrity_desc}
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start group">
                                <div className="mt-1 bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-600 dark:text-blue-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                                    <FaShieldAlt className="text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{t.features.quality}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {t.features.quality_desc}
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start group">
                                <div className="mt-1 bg-purple-100 dark:bg-purple-900 p-3 rounded-full text-purple-600 dark:text-purple-300 group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-colors">
                                    <FaComments className="text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{t.features.support}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {t.features.support_desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollRevealBox>
                    {/* Visual element */}
                    <ScrollRevealBox>
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 text-center relative overflow-hidden">
                            <motion.div
                                className="absolute top-0 right-0 p-4 opacity-10"
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 0.1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                <FaStar className="lg:text-9xl text-5xl" />
                            </motion.div>
                            <div className="text-6xl font-black text-gray-300 dark:text-gray-700 mb-4 flex justify-center items-center">
                                <span>100</span>
                                <span className="text-4xl text-(--main-color)">%</span>
                            </div>
                            <p className="text-xl font-semibold text-(--main-color)">{t.features.satisfaction}</p>
                            <div className="flex justify-center mt-4">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <FaStar key={s} className="text-yellow-400 text-xl mx-0.5" />
                                ))}
                            </div>
                            <p className="mt-4 text-gray-500">{t.features.satisfaction_desc}</p>
                        </div>
                    </ScrollRevealBox>
                </div>
            </CustomContainer>
        </section>
    );
};

export default Features;
