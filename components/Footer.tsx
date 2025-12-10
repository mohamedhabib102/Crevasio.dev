"use client";
import CustomContainer from "@/ui/CustomContainer";
import Logo from "@/ui/Logo";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className="bg-gray-900 text-white py-12">
            <CustomContainer>
                <div className="flex flex-col items-center justify-center text-center space-y-6">
                    <Logo className="footer-logo" />
                    <p className="text-gray-400 max-w-lg">
                        {t.footer.description}
                    </p>
                    <div className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Crevasio.dev. {t.footer.copyright}
                    </div>
                </div>
            </CustomContainer>
        </footer>
    );
};

export default Footer;
