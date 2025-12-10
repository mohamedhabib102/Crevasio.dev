"use client";
import CustomContainer from "@/ui/CustomContainer";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
    const { t } = useLanguage();
    return (
        <section id="hero" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900">
            <CustomContainer>
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-(--main-color) dark:text-(--main-color)">
                        {t.hero.title}
                    </h1>
                    <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                        {t.hero.subtitle}
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="#contact"
                            className="bg-(--main-color) text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
                        >
                            {t.hero.cta_contact}
                        </a>
                        <a
                            href="#portfolio"
                            className="border-2 border-(--main-color) text-(--main-color) px-8 py-3 rounded-full font-semibold hover:bg-(--main-color) hover:text-white transition-colors"
                        >
                            {t.hero.cta_portfolio}
                        </a>
                    </div>
                </div>
            </CustomContainer>
        </section>
    );
};

export default Hero;
