import React from 'react';
import { motion } from 'framer-motion';

// assets
import possibilityImage from '../../assets/possibility.png'

// styles
import './possibility.css';

// motion
const animationLeft = {
    hidden: { 
        opacity: 0,
        x: -50,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            duration: 1
        }
    }
}

const animationRight = {
    hidden: { 
        opacity: 0,
        x: 50,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            duration: 1
        }
    }
}

const Possibility = () => {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
            <motion.div 
                className="gpt3__possibility-image"
                initial="hidden"
                variants={animationLeft}
                whileInView="visible"
            >
                <img src={possibilityImage} alt="possibility" />
            </motion.div>
            <motion.div 
                className="gpt3__possibility-content"
                initial="hidden"
                variants={animationRight}
                whileInView="visible"
            >
                <h4>Request Early Access to Get Started</h4>
                <h1 className="gradient__text">
                    The possibilities are beyond your imagination
                </h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <h4>Request Early Access to Get Started</h4>
            </motion.div>
        </div>
    )
};

export default Possibility;
