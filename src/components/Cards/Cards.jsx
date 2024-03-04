import Card from '../Card/Card';
import styles from "./Cards.module.css"
import React from 'react';

export default function Cards({characters, onClose}) {
   return (
   <div className={styles.CardsDiv}>
      {characters.map((character)=>{
         return(
            <Card 
            id={character.id}
            key={character.id}
            name={character.name} 
            status={character.status} 
            species={character.species} 
            gender={character.gender} 
            origin={character.origin.name} 
            image={character.image} 
            onClose={onClose} />
            )
         })}
   </div>
   )
}
