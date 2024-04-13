import styles from "./About.module.css"

const About = () =>{
    return (
        <div className={styles.aboutDiv}>
            <h1>Lucas Angelo Demartin</h1>
            <p className={styles.pText}>Proyecto integrador Rick and Morty del curso de desarrollo web full stack de Soy Henry, creado usando las tecnologías aprendidas durante el cursado (React, Redux, Axios, Express, entre otras).</p>
        </div>
    )

}


export default About;