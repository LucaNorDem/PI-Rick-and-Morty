import styles from "./Card.module.css"
import { useNavigate } from "react-router-dom";


export default function Card(props) {
   const navigate = useNavigate()

   const handleCardClick = ()=>{
      navigate(`/detail/${props.id}`);
   }

   const handleButtonClick = (e) =>{
      e.stopPropagation();
      props.onClose(props.id);
   }
   

   return (
      <div className={styles.CardDiv} onClick={handleCardClick}>
         <div className={styles.button}>
            <button onClick={handleButtonClick} className={styles.button}>X</button>
         </div>
 
         <div className={styles.imgName}>            
            <h2 className={styles.name}><span>{props.name}</span></h2>
            <img src={props.image} alt='' className={styles.img} />
         </div>
 
         {/* <div>            
            <h2 className={styles.h2info}>Origin: <span className={styles.propText}>{props.origin}</span></h2>
            <h2 className={styles.h2info}>Status: <span className={styles.propText}>{props.status}</span></h2>
            <h2 className={styles.h2info}>Specie: <span className={styles.propText}>{props.species}</span></h2>
            <h2 className={styles.h2info}>Gender: <span className={styles.propText}>{props.gender}</span></h2>
         </div> */}
      </div>
   );
}
