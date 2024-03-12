import Cards from "../Cards/Cards"
import {useSelector} from "react-redux";
import styles from "./Favorites.module.css"

const Favorites = (props) =>{
    const myFavorites = useSelector((state) => state.myFavorites)


    return (
        <div className={styles.FavoritesDiv}>
            <Cards characters = {myFavorites}/>
        </div>
    )

}



export default Favorites;