import style from "./SearchBar.module.css"
import { useState } from "react";

export default function SearchBar({onSearch}) {

   const [id, setId] = useState("")

   const handleChange = (event) =>{
      setId(event.target.value);
   }

   const clearInput = ()=>{
      setId("");
   }

   return (
      <div className={style.SBDiv}>
         <input type='search' value={id} onChange={handleChange}/>
         <button className={style.button} onClick={()=>{onSearch(id); clearInput()}}>Agregar</button>
      </div>
   );
}
