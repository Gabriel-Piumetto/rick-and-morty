import styles from "./Searchbar.module.css"
import { useState } from "react";


function SearchBar({onSearch}) {
   
   const [id, setId] = useState('')
   
   const handleChange = (event)=>{

      setId(event.target.value)
   }
   
   return (
      <div className={styles.sbar}>
         <input type='search' value={id} onChange={handleChange} />
         <button className={styles.button} onClick={ ()=> { onSearch(id) } }>Agregar</button>
      </div>
   );
}
export default SearchBar
