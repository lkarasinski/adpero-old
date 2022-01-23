import { motion } from 'framer-motion';
import React from 'react';

const PageTransitionAnimation: React.FC = ({ children }, props) => {
    return (
        <motion.main
            {...props}
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: 'linear' }}
        >
            {children}
        </motion.main>
    );
};

const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
};

export default PageTransitionAnimation;
