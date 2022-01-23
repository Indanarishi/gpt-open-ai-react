import React from 'react';
import { motion } from 'framer-motion';

// assets
import gpt3Logo from '../../assets/logo.svg';

// styles
import './footer.css';

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

const Footer = () => {
    return (
        <motion.div 
            className="gpt3__footer section__padding"
            initial="hidden"
            variants={container}
            whileInView="visible"
        >
            <motion.div variants={item} className="gpt3__footer-heading">
                <h1 className="gradient__text">Do you want to step in to the future before others</h1>
            </motion.div>

            <motion.div variants={item} className="gpt3__footer-btn">
                <p>Request Early Access</p>
            </motion.div>

            <div className="gpt3__footer-links">
                <motion.div variants={item} className="gpt3__footer-links_logo">
                    <img src={gpt3Logo} alt="gpt3_logo" />
                    <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
                </motion.div>
                <motion.div variants={item} className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </motion.div>
                <motion.div variants={item} className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions </p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </motion.div>
                <motion.div variants={item} className="gpt3__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Crechterwoord K12 182 DK Alknjkcb</p>
                    <p>085-132567</p>
                    <p>info@payme.net</p>
                </motion.div>
            </div>

            <motion.div variants={item} className="gpt3__footer-copyright">
                <p>@2021 GPT-3. All rights reserved.</p>
            </motion.div>
        </motion.div>
    )
}

export default Footer;
