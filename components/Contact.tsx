"use client";
import CustomContainer from "@/ui/CustomContainer";
import CustomTitle from "@/ui/CustomTitle";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import ScrollRevealBox from "@/ui/ScrollRevealBox";

const Contact = () => {
    const { t } = useLanguage();
    return (
        <section id="contact" className="py-20 bg-slate-50 dark:bg-gray-900">
            <CustomContainer>
                <CustomTitle title={t.contact.title} description={t.contact.description} success={true} />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
                    <ScrollRevealBox>
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">{t.contact.name}</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-(--main-color)" placeholder={t.contact.name_ph} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">{t.contact.email}</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-(--main-color)" placeholder={t.contact.email_ph} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">{t.contact.message}</label>
                                    <textarea rows={4} className="resize-none w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-(--main-color)" placeholder={t.contact.message_ph}></textarea>
                                </div>
                                <button type="submit" className="w-full bg-(--main-color) text-white py-3 rounded-lg font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                                    <span>{t.contact.send}</span>
                                    <FaPaperPlane className="text-sm" />
                                </button>
                            </form>
                        </div>
                    </ScrollRevealBox>

                    <ScrollRevealBox>
                        <div className="flex flex-col justify-center space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">{t.contact.contact_info}</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {t.contact.contact_desc}
                                </p>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 group">
                                    <span className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-(--main-color) text-xl group-hover:bg-(--main-color) group-hover:text-white transition-colors"><FaPhoneAlt /></span>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-xs text-gray-400">{t.contact.info_phone}</p>
                                        <a href="https://wa.me/201027227796" target="_blank" rel="noopener noreferrer" className="font-semibold text-lg hover:text-(--main-color) transition-colors" dir="ltr">+20 102 722 7796</a>
                                        <a href="https://wa.me/201103826261" target="_blank" rel="noopener noreferrer" className="font-semibold text-lg hover:text-(--main-color) transition-colors" dir="ltr">+20 110 382 6261</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <span className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-(--main-color) text-xl group-hover:bg-(--main-color) group-hover:text-white transition-colors"><FaMapMarkerAlt /></span>
                                    <div>
                                        <p className="text-xs text-gray-400">{t.contact.info_address}</p>
                                        <span className="font-semibold text-lg">{t.contact.address}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollRevealBox>
                </div>
            </CustomContainer>
        </section>
    );
};

export default Contact;
