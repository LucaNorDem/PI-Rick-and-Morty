import Card from '../Card/Card';
import SearchBar from '../SearchBar/SearchBar';
import styles from "./Cards.module.css"
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Cards({characters, onClose, onSearch}) {
   const location = useLocation();


   return (
   <div className={styles.CardsContainer}>
      {location.pathname === "/home" ? <div className={styles.searchBar} >
         <SearchBar onSearch={onSearch} characters={characters} />
      </div> : null}      
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
   </div>
   )
}
