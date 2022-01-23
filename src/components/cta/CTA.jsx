import React from 'react';
import { motion } from 'framer-motion';

// styles
import './cta.css';

// motion
const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            delayChildren: .5,
            staggerChildren: 0.3
        }
    }
}

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

const CTA = () => {
    return (
        <motion.div 
            className="gpt3__cta"
            initial="hidden"
            variants={container}
            whileInView="visible"
        >
            <motion.div variants={item} className="gpt3__cta-content">
                <p>Request Early Access to Get Started</p>
                <h3>Register Today &amp; start exploring the endless possibilities.</h3>
            </motion.div>
            <motion.div variants={item} className="gpt3__cta-btn">
                <button type="button">Get Started</button>
            </motion.div>
        </motion.div>
    )
};

export default CTA;
