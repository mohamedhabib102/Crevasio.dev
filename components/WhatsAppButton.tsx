"use client";
import { useLanguage } from "@/context/LanguageContext";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    const { t } = useLanguage();
    return (
        <a
            href="https://wa.me/201027227796"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
            aria-label="Contact us on WhatsApp"
        >
            <FaWhatsapp className="text-xl md:text-2xl" />
            <span className="absolute left-full ml-3 bg-white text-gray-800 px-3 py-1 rounded-md text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none hidden md:block">
                {t.contact.contact}
            </span>
        </a>
    );
};

export default WhatsAppButton;
