import React from "react";
import styles from './Projects.module.css'
import projects from '../../data/projects.json';

export const Projects = () => {
 return (
    <section className={styles.container}>
    <h2 className={styles.title} id="projects">Projects</h2>
    <div className={styles.content}>
        {projects.map((projectItem, id) => {
            const getImageUrl = (fileName) => {
                return require(`../../assets/projects/${fileName}`);
            }

            const codeLanguage = (projectItem) => {
               
                  return projectItem.languages.map((language, index) => (
                    <p key={index}>{language}&nbsp;</p>
                  ));
               
              };
        
            

            return (
                <li key={id} className={styles.projectItem}>
                    <img 
                        src={getImageUrl(projectItem.imageSrc)} 
                        alt={`${projectItem.title} Project Thumbnail`}
                    />
                    <div className={styles.projectItemDetails}>
                        <h3>{`${projectItem.title}`}</h3>
                        <p>{`${projectItem.description}`}</p>
                    </div>
                    <div className={styles.languages} id={styles.tags}> {codeLanguage(projectItem)} </div>
                    <div>  
                    <p>
                    <a href={projectItem.demo}> <button className={projectItem.demoBtn}>Demo</button> </a> 
                    <a href={projectItem.source}> <button className={projectItem.demoBtn}>Source</button>  </a></p>
                    </div>  
                      
                   
                </li>
            );
        })}
    </div>
</section>
   ) 
}