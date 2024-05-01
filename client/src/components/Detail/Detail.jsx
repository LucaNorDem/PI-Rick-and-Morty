import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Detail.module.css"


const Detail =()=>{
   const {id} = useParams();

   const [character, setCharacter] = useState()

   useEffect(() => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
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


   return !character ? <div>Cargando... </div> :(       
        <div className={styles.DetailDiv}> 
         <div className={styles.imgName}>            
            <img src={character.image} alt='' className={styles.img} />
         </div>

         <div className={styles.infoDiv}>            
            <h1 className={styles.name}><span>{character.name}</span></h1>
            <h2 className={styles.h2info}>Origin:&nbsp;<span className={styles.propText}> {character.origin?.name}</span></h2>
            <h2 className={styles.h2info}>Status:&nbsp;<span className={styles.propText}>{character.status}</span></h2>
            <h2 className={styles.h2info}>Specie:&nbsp;<span className={styles.propText}>{character.species}</span></h2>
            <h2 className={styles.h2info}>Gender:&nbsp;<span className={styles.propText}>{character.gender}</span></h2>
            <h2 className={styles.h2info}>Location:&nbsp;<span className={styles.propText}>{character.location?.name}</span></h2>
         </div>
      </div>
   )
}

export default Detail;