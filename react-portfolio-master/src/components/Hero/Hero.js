import React from "react";
import styles from './Hero.module.css'

import heroImage from "../../assets/hero/ProfileMini.jpg"


export const Hero = () => {
    return (<section className={styles.container}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>
                            Hi, I'm Mel!
                        </h1>
                        <p className={styles.description}> Former teacher turned frontend developer specialising in HTML, CSS, JavaScript and React. Eager to collaborate on projects that prioritise user-centric design and intuitive interfaces.  Send me a message if you would like to find out more.</p>
                        <a className={styles.contactBtn} href="mailto:mel.muhina@gmail.com"> Contact Me </a>
                     </div>
                     <img src={heroImage} alt="Mel Muhina" className={styles.heroImg}/>
                     <div className={styles.topBlur} />
                     <div className={styles.bottomBlur} />
        </section> )
};
   
