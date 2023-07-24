import styles from "./Card.module.css";
import { Link } from 'react-router-dom';
import { addFav, removeFav } from "../../redux/actions";
import {connect} from 'react-redux' 
import { useState, useEffect } from "react";


function Card({onClose, image, name, id, status, species, gender,origin, addFav, removeFav, myFavorites}) {
   
   const [isFav, setIsFav] = useState(false)

   const handleFavorite = ()=>{
      
      if(isFav===true){
         setIsFav(false)
         removeFav(id)
      }else{setIsFav(true)
      addFav({onClose, image, name, id, status, species, gender,origin})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   return (
      

      <div className={styles.divCard}>
         {isFav ? (<button onClick={handleFavorite}>❤️</button>)
         : (<button onClick={handleFavorite}>🤍</button>)
         }


         <button className={styles.button} onClick={()=> {onClose(id)}}>X</button>
         <img className={styles.image} src={image} alt='' />
         <Link to={`/detail/${id}`}>
         <h2>{name}</h2>
         </Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
      </div>
   );
}

const mapDispatchToProps = (dispatch)=>{
   return {
      addFav: (character)=> dispatch(addFav(character)),
      removeFav: (id)=> dispatch(removeFav(id))
   }
}

const mapStateToProps = (state)=>{
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)  