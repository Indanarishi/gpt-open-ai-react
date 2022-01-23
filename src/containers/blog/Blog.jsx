import React from 'react';
import { motion } from 'framer-motion';

// assets
import { blog01, blog02, blog03, blog04, blog05 } from './import'

// styles
import './blog.css';

// components
import { Article } from '../../components';

// motion
const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: .5,
            delayChildren: .3,
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

const Blog = () => {
    return (
        <motion.div 
            className="gpt3__blog section__padding" 
            id='blog'
            initial="hidden"
            variants={container}
            whileInView="visible"
        >
            <motion.div variants={item} className="gpt3__blog-heading">
                <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
            </motion.div>
            <div className="gpt3__blog-container">
                <motion.div variants={item} className="gpt3__blog-container_groupA">
                    <Article imgUrl={blog01} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                </motion.div>
                <motion.div variants={item} className="gpt3__blog-container_groupB">
                    <Article imgUrl={blog02} date="Sep 29, 2021" title="GPT-3 Powers the Next Generation of Apps" />
                    <Article imgUrl={blog03} date="Nov 18, 2021" title="OpenAI&apos;s API Now Available with No Waitlist" />
                    <Article imgUrl={blog04} date="Sep 8, 2021" title="Helen Toner Joins OpenAI&apos;s Board of Directors" />
                    <Article imgUrl={blog05} date="Jun 10, 2021" title="Improving Language Model Behavior by Training on a Curated Dataset" />
                </motion.div>
            </div>
        </motion.div>
    )
};

export default Blog;
