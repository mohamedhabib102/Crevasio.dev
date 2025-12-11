"use client";
import CustomContainer from "@/ui/CustomContainer";
import Logo from "@/ui/Logo";
import { useLanguage } from "@/context/LanguageContext";
import ScrollRevealBox from "@/ui/ScrollRevealBox";

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-12">
            <CustomContainer>
                <ScrollRevealBox>
                    <div className="flex flex-col items-center w-full">
                        <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full gap-8 pb-8 mb-3 border-b border-gray-200 dark:border-gray-800">
                            <Logo className="footer-logo" />
                            <p className="text-gray-500 dark:text-gray-400 max-w-lg text-center md:text-right">
                                {t.footer.description}
                            </p>
                        </div>
                        <div className="text-gray-500 text-sm text-center">
                            &copy; {new Date().getFullYear()} Crevasio.dev. {t.footer.copyright}
                        </div>
                    </div>
                </ScrollRevealBox>
            </CustomContainer>
        </footer>
    );
};

export default Footer;
