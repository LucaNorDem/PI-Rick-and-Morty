import Cards from "../Cards/Cards"
import {useSelector,useDispatch} from "react-redux";
import styles from "./Favorites.module.css"
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";

const Favorites = (props) =>{
    const [aux, setAux] = useState(false)

    const myFavorites = useSelector((state) => state.myFavorites)
    const dispatch = useDispatch();

    const handleOrder = (e) =>{
        dispatch(orderCards(e.target.value));
        setAux(!aux);
    }
    
    const handleFilter = (e) =>{
        dispatch(filterCards(e.target.value));
    }

    return (
        <div className={styles.FavoritesDiv}>
            <div className={styles.selectors}>
                <select onChange={handleOrder} className={styles.select}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
                <select onChange={handleFilter} className={styles.select}>
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
            <div className={styles.cards}>
                <Cards characters = {myFavorites}/>
            </div>
        </div>
    )

}



export default Favorites;