import Card from "../Card/Card"
import {useSelector} from "react-redux";
import styles from "./Favorites.module.css"

const Favorites = (props) =>{
    const myFavorites = useSelector((state) => state.myFavorites)


    return (
        <div className={styles.FavoritesDiv}>
            {myFavorites.map(char => {
                return (<Card
                    id={char.id}
                    key={char.id}
                    name={char.name}
                    status={char.status}
                    species={char.species}
                    gender={char.gender}
                    origin={char.origin.name}
                    image={char.image}
                    onClose={props.onClose} />)
            })}
        </div>
    )

}



export default Favorites;