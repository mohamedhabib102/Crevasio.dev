"use client";
import { FaCode } from "react-icons/fa";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <a href="#hero" className={`flex items-center gap-2 group ${className}`}>
      <div className="w-10 h-10 bg-(--main-color) text-white rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
        <FaCode className="text-2xl" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gray-800 dark:text-gray-100 group-[.footer-logo]:text-white leading-none">
          Crevasio
        </span>
        <span className="text-sm font-medium text-(--main-color) tracking-widest leading-none">
          .DEV
        </span>
      </div>
    </a>
  )
}
export default Logo;