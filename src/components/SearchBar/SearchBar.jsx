import style from "./SearchBar.module.css"
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function SearchBar({onSearch}) {

   const [id, setId] = useState("")

   const location = useLocation();
   const pathsToHideSearchBar = ["/about","/favorites","/detail"];
   const shouldHideSearchBar = pathsToHideSearchBar.some((path) => location.pathname.includes(path));

   const handleChange = (event) =>{
      setId(event.target.value);
   }

   const clearInput = ()=>{
      setId("");
   }

   return shouldHideSearchBar ? null :(
      <div className={style.SBDiv}>
         <input type='search' value={id} onChange={handleChange}/>
         <button className={style.button} onClick={()=>{onSearch(id); clearInput()}}>Add</button>
      </div>
   );
}
