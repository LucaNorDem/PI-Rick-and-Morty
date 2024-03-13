import style from "./SearchBar.module.css"
import { useState } from "react";
// import { useLocation } from "react-router-dom";

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
         <input type='search' placeholder="Add character by ID... (826 max)" value={id} onChange={handleChange}/>
         <button className={style.button} onClick={()=>{onSearch(id); clearInput()}}>Add</button>
      </div>
   );
}
