import styles from "./Card.module.css"
import { useNavigate } from "react-router-dom";
import { addfav, removefav } from "../../redux/actions";
import { useState, useEffect } from "react";
import { connect,useDispatch,useSelector } from "react-redux";



function Card(props) {
   const [isFav, setIsFav] = useState(false)

   const myFavorites = useSelector((state)=>state.myFavorites);
   const dispatch = useDispatch();
   
   const navigate = useNavigate()
   
   const handleCardClick = ()=>{
      navigate(`/detail/${props.id}`);
   }
   
   const handleButtonClick = (e) =>{
      e.stopPropagation();
      props.onClose(props.id);
   }
   
   const handleFavorite = (e) =>{
      e.stopPropagation();
      // const {addfav, removefav, id, ...rest} = props
      if(isFav){
         setIsFav(false);
         dispatch(removefav(props.id));
      }else{
         setIsFav(true);
         dispatch(addfav(props));
      }
   }

   useEffect(() => {
      if (myFavorites && Array.isArray(myFavorites)) {
         myFavorites.forEach((fav) => {
            if (fav.id === props.id) {
               setIsFav(true);
            }
         });
      }
   }, [myFavorites]);
   
   return (
      <div className={styles.CardDiv} onClick={handleCardClick}>
         <div className={styles.button}>
            {
               isFav ? (
                  <button onClick={handleFavorite} className={styles.favBtn}>❤️</button>
                  ) : (
                     <button onClick={handleFavorite} className={styles.favBtn}>🤍</button>
                     )
                  }
            <button onClick={handleButtonClick} className={styles.button}>X</button>
         </div>
 
         <div className={styles.imgName}>            
            <h2 className={styles.name}><span>{props.name}</span></h2>
            <img src={props.image} alt='' className={styles.img} />
         </div> 
         
      </div>
   );
}

// const mapDispatchToProps = (dispatch) =>({
//    addfav: (character)=>dispatch(addfav(character)),
//    removefav: (id)=>dispatch(removefav(id))
   
// });

// const mapStateToProps = (state) =>({
//    myFavorites: state.myFavorites,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Card);
export default Card;
