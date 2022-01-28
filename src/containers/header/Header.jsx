import React from 'react';
import { motion, useAnimation } from 'framer-motion';

// assets
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

// styles
import './header.css';

// motion
const animationLeft = {
    hidden: { 
        opacity: 0,
        x: -50
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.5
        }
    }
}

const animationRight = {
    hidden: { 
        opacity: 0,
        x: 50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.5
        }
    }
}

const Header = () => {

    const controls = useAnimation()
    controls.start({
        y: 30,
        transition: {
            delay: 2,
            repeat: Infinity,
            repeatType: "reverse",
            duration: 3,
            ease: "linear"
        }
    })

    return (
        <div className='gpt3__header section__padding' id='home'>
            <motion.div 
                className="gpt3__header-content"
                initial="hidden"
                variants={animationLeft}
                whileInView="visible"
            >
                <h1 className="gradient__text">
                    Let's Build Something amazing with GPT-3 OpenAI
                </h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

                <div className="gpt3__header-content__input">
                    <input type="email" placeholder='Your Email Address' />
                    <button>Get Started</button>
                </div>

                <div className="gpt3__header-content__people">
                    <img src={people} alt="people" />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </motion.div>
            <motion.div 
                className="gpt3__header-image"
                initial="hidden"
                variants={animationRight}
                whileInView="visible"
                animate={controls}
            >
                <img src={ai} alt="ai" />
            </motion.div>
        </div>
    )
};

export default Header;
