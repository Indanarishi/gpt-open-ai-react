import React from 'react';
import { motion } from 'framer-motion';

// styles
import './whatGPT3.css';

// components
import { Feature } from '../../components';

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
            duration: .5
        }
    }
}

const WhatGPT3 = () => {
    return (
        <motion.div 
            className="gpt3__whatgpt3 section__margin" 
            id="wgpt3"
            initial="hidden"
            variants={container}
            whileInView="visible"
        >
            <motion.div variants={item} className="gpt3__whatgpt3-feature">
                <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
            </motion.div>
            <motion.div variants={item} className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">The possibilites are beyond your imagination</h1>
                <p>Explore The Library</p>
            </motion.div>
            <motion.div variants={item} className="gpt3__whatgpt3-container">
                <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
                <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
                <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
            </motion.div>
        </motion.div>
    )
};

export default WhatGPT3;
