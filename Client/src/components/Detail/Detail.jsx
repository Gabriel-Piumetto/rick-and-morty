import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from 'react';
import styles from "./Detail.module.css";

const Detail = ()=>{
    
    const {id} = useParams();
    
    const [character, setCharacter] = useState({})
    
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div>
            <img src={character.image && character.image } alt=""/>
            <h1 className={styles.h1}>Name:"{character.name && character.name}"</h1>
            <h1 className={styles.h1}>Status:"{character.status && character.status}"</h1>
            <h1 className={styles.h1}>Specie:"{character.species && character.species}"</h1>
            <h1 className={styles.h1}>Gender:"{character.gender && character.gender}"</h1>
            <h1 className={styles.h1}>Origin:"{character.origin?.name && character.origin?.name}</h1>
             <Link to="/home">
              <button>Home</button>
             </Link>
        </div>
    )
}

export default Detail