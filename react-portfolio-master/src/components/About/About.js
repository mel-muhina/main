import React from "react";
import styles from './About.module.css'

import aboutImage from "../../assets/about/aboutImage.png"
import cursor from "../../assets/about/cursorIcon.png"
import design from "../../assets/about/designIcon.png"
import server from "../../assets/about/serverIcon.png"



export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
            <img src={aboutImage} alt="Mel Muhina" className={styles.aboutImg}/>

             <ul className={styles.aboutItems}>
                 <li className={styles.aboutItem}>
                   <img src={cursor} alt="cursor" className={styles.cursorImg}/>
                    <div className={styles.aboutItemText}> 
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer that enjoys designing and building responsive, optimised and beautiful websites.</p>
                    </div>
                  </li>
                 
                  <li className={styles.aboutItem}>
                   <img src={design} alt="cursor" className={styles.cursorImg}/>
                    <div className={styles.aboutItemText}> 
                        <h3>Web Designer</h3>
                        <p>With a background in both tech and creative industries, I love designing and creating visually appealing applications.</p>
                    </div>
                  </li>
                   
                  <li className={styles.aboutItem}>
                   <img src={server} alt="cursor" className={styles.cursorImg}/>
                    <div className={styles.aboutItemText}> 
                        <h3>Computing Teacher</h3>
                        <p>Having previously been a computing teacher, I have experience with other elements of tech such as AWS, Python, SQL and more.</p>
                    </div>
                  </li>
                </ul>
               
            </div>
        </section>
    )
}