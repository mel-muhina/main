import React from "react";
import styles from './Footer.module.css'

import email from "../../assets/about/emailIcon.png"
import linkedin from "../../assets/about/linkedinIcon.png"
import github from "../../assets/about/githubIcon.png"

export const Footer = () => {
    return (<section className={styles.container}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>
                            Contact
                        </h1>
                        <p className={styles.description}> Reach out to find out more!</p>
                        </div>
                        <div>
                        <ul className={styles.list}>
                            <li className={styles.liItem}><a href="mailto:mel.muhina@gmail.com"><img src={email} alt="email logo" />mel.muhina@gmail.com</a></li>
                            <li className={styles.liItem}><a href="https://www.linkedin.com/in/melmuhina/"><img src={linkedin} alt="linkedin logo" />linkedin.com/in/melmuhina</a></li>
                            <li className={styles.liItem}><a href="https://github.com/mel-muhina"><img src={github} alt="github logo" />github.com/mel-muhina</a></li>
                        </ul>
                                        
                        </div> 
                    
                    
        </section> )
};
   