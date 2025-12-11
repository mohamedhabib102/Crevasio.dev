"use client";
import CustomContainer from "@/ui/CustomContainer";
import CustomTitle from "@/ui/CustomTitle";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

const Contact = () => {
    const { t } = useLanguage();
    return (
        <section id="contact" className="py-20 bg-slate-50 dark:bg-gray-900">
            <CustomContainer>
                <CustomTitle title={t.contact.title} description={t.contact.description} success={true} />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
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

                    <div className="flex flex-col justify-center space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">{t.contact.contact_info}</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {t.contact.contact_desc}
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <span className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-(--main-color) text-xl group-hover:bg-(--main-color) group-hover:text-white transition-colors"><FaEnvelope /></span>
                                <div>
                                    <p className="text-xs text-gray-400">{t.contact.info_email}</p>
                                    <span className="font-semibold text-lg" dir="ltr">info@crevasio.dev</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <span className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-(--main-color) text-xl group-hover:bg-(--main-color) group-hover:text-white transition-colors"><FaPhoneAlt /></span>
                                <div>
                                    <p className="text-xs text-gray-400">{t.contact.info_phone}</p>
                                    <span className="font-semibold text-lg" dir="ltr">+20 123 456 7890</span>
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
                </div>
            </CustomContainer>
        </section>
    );
};

export default Contact;
