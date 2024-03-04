import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Detail.module.css"


const Detail =()=>{
    const {id} = useParams();

    const [character, setCharacter] = useState()

    useEffect(() => {
        axios(`https://rym2.up.railway.app/api/character/${id}?key=LucaNorDem`)
        .then(
           ({ data }) => {
              if (data.name) {
                setCharacter(() => data);
              } else {
                window.alert('No hay personajes con ese ID');
              }
           }
        );        
    }, [id]);


    return !character ? <div>Cargando... </div> : (       
        <div className={styles.CardDiv}>         
 
         <div className={styles.imgName}>            
            <img src={character.image} alt='' className={styles.img} />
         </div>
 
         <div>            
            <h1 className={styles.name}><span>{character.name}</span></h1>
            <h2 className={styles.h2info}>Origin: <span className={styles.propText}>{character.origin.name}</span></h2>
            <h2 className={styles.h2info}>Status: <span className={styles.propText}>{character.status}</span></h2>
            <h2 className={styles.h2info}>Specie: <span className={styles.propText}>{character.species}</span></h2>
            <h2 className={styles.h2info}>Gender: <span className={styles.propText}>{character.gender}</span></h2>
         </div>
      </div>
    )
}

export default Detail;