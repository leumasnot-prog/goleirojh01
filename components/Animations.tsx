import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

// Fade up animation for sections
export const FadeUp: React.FC<AnimatedSectionProps> = ({ children, className = '', delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
        className={className}
    >
        {children}
    </motion.div>
);

// Fade in animation
export const FadeIn: React.FC<AnimatedSectionProps> = ({ children, className = '', delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay, ease: 'easeOut' }}
        className={className}
    >
        {children}
    </motion.div>
);

// Slide in from left
export const SlideLeft: React.FC<AnimatedSectionProps> = ({ children, className = '', delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
        className={className}
    >
        {children}
    </motion.div>
);

// Slide in from right
export const SlideRight: React.FC<AnimatedSectionProps> = ({ children, className = '', delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
        className={className}
    >
        {children}
    </motion.div>
);

// Scale up animation
export const ScaleUp: React.FC<AnimatedSectionProps> = ({ children, className = '', delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
        className={className}
    >
        {children}
    </motion.div>
);

// Stagger container for child animations
export const StaggerContainer: React.FC<AnimatedSectionProps & { staggerDelay?: number }> = ({
    children,
    className = '',
    delay = 0,
    staggerDelay = 0.1
}) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        transition={{ staggerChildren: staggerDelay, delayChildren: delay }}
        className={className}
    >
        {children}
    </motion.div>
);

// Stagger child item
export const StaggerItem: React.FC<AnimatedSectionProps> = ({ children, className = '' }) => (
    <motion.div
        variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
        }}
        className={className}
    >
        {children}
    </motion.div>
);
