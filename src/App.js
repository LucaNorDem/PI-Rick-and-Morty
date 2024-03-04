import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import axios from "axios";
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import { useState } from 'react';
import {Routes, Route} from "react-router-dom";
import style from "./App.css"
function App() {

   const [characters, setCharacters] = useState([])

   const onSearch = (id) =>{      
      axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-LucaNorDem`).then(         
         ({ data }) => {            
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }            
         }
      );
   }

   const onClose = (id) =>{
      // setCharacters(...characters,characters.filter((character)=>character.id !== parseInt(id)))
      let filterChs = characters.filter((ch)=>{return ch.id !== id})
      setCharacters(filterChs)
   }

   return (
      <div className='App'>
         <Nav onSearch = {onSearch} />
         <Routes>
            <Route path ="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path ="/about" element={<About />}/>
            <Route path ="/detail/:id" element={<Detail />}/>
         </Routes>
                  
      </div>
   );
}

export default App;
