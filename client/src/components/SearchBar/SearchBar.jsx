import style from "./SearchBar.module.css"
import { useState } from "react";
// import { useLocation } from "react-router-dom";

export default function SearchBar({onSearch, characters}) {

   const [id, setId] = useState("")

   
   const handleChange = (event) =>{
      setId(event.target.value);
   }

   const clearInput = ()=>{
      setId("");
   }

   const handleAddCharacter = () =>{
      if(characters.find(char => char.id === parseInt(id))){
         window.alert("Character already added!")
      } else {
         onSearch(id);
         clearInput();
      }
   }

   return (
      <div className={style.SBDiv}>
         <input type='search' placeholder="Add character by ID... (826 max)" value={id} onChange={handleChange}/>
         <button className={style.button} onClick={handleAddCharacter}>Add</button>
         {/* <button className={style.button} onClick={()=>{onSearch(id); clearInput()}}>Add</button> */}
      </div>
   );
}
