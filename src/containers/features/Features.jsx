import React from 'react';
import { motion } from 'framer-motion';

// styles
import './features.css';

// components
import { Feature } from '../../components';

// data
const featuresData = [
    {
        title: 'Improving end distrusts instantly',
        text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
    },
    {
        title: 'Become the tended active',
        text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
    },
    {
        title: 'Message or am nothing',
        text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
    },
    {
        title: 'Really boy law county',
        text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
    },
];

// motion
const animationLeft = {
    hidden: { 
        opacity: 0,
        x: -50,
        y: -50
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
        y: -50
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

const Features = () => {
    return (
        <div className="gpt3__features section__padding" id="features">
            <motion.div 
                className="gpt3__features-heading"
                initial="hidden"
                variants={animationLeft}
                whileInView="visible"
            >
                <h1 className="gradient__text">
                    The Future is Now and You Just Need To Realize It. Step into Future Today &amp; Make it Happen.
                </h1>
                <p>Request Early Access to Get Started</p>
            </motion.div>
            <motion.div 
                className="gpt3__features-container"
                initial="hidden"
                variants={animationRight}
                whileInView="visible"
            >
                {featuresData.map((feature, index) => (
                    <Feature 
                        key={index} 
                        title={feature.title} 
                        text={feature.text} 
                    />
                ))}
            </motion.div>
        </div>
    )
};

export default Features;
