import Card from "../card/Card"
import styles from "./Cards.module.css"
function Cards({characters, onClose}) {
      
   return(
         
         <div className={styles.divCards}>
         {
            characters.map((char)=>{
               return <Card
                 key={char.id}
                 id={char.id}
                 name={char.name}
                 status={char.status}
                 species={char.species}
                 gender={char.gender}
                 origin={char.origin.name}
                 image={char.image}
                 onClose={onClose}
               />
            })
         }       
         </div>
         
         )
}

export default Cards
