// components/ScrollRevealBox.tsx
import React, { useRef, ReactNode } from 'react';
import { motion, useInView , Variants} from 'framer-motion';

interface ScrollRevealBoxProps {
  children: ReactNode; 
  delay?: number;     
  duration?: number;  
  className?: string; 
}

const ScrollRevealBox: React.FC<ScrollRevealBoxProps> = ({ 
    children, 
    delay = 0, 
    duration = 0.6, 
    className = '' 
}) => {
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 }); 

  const variants: Variants = {
    hidden: { 
        opacity: 0, 
        y: 50 
    },
    visible: {
        opacity: 1, 
        y: 0, 
        transition: {
            duration: duration,
            delay: delay,
            ease: "easeOut",
        }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollRevealBox;