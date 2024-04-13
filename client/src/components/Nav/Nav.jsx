// import { Link } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
import styles from "./Nav.module.css"
import { useNavigate, useLocation } from "react-router-dom"


export default function Nav ({onSearch}){
    const navigate = useNavigate();

    const location = useLocation();
    const pathToHideNav = ["/"];
    const shouldHideNav = pathToHideNav.includes(location.pathname);


    return shouldHideNav ? null :(   
        
        <div className={styles.nav}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" alt='' className={styles.navImg} onClick={() => navigate("/home")} />

            <div className={styles.btns}>                
                <button onClick={() => navigate("/home")} className={styles.btn}>Home</button>
                <button onClick={() => navigate("/favorites")} className={styles.btn}>Favorites</button>
                <button onClick={() => navigate("/about")} className={styles.btn}>About</button>
            </div>
            

            {/* <div className={styles.searchBar} >
                <SearchBar onSearch={onSearch} />
            </div> */}
        </div>

    )
}

