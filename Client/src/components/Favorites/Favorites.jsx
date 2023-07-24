import Card from "../card/Card";
import {connect} from "react-redux"
import { filterCards, orderCards } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Favorites = ({myFavorites})=>{

    const [aux, setAux] = useState(false)


    const dispatch = useDispatch()

    const handleOrder =(event)=>{
        dispatch(orderCards(event.target.value))
        setAux(!aux)
    }
    const handleFilter = (event)=>{
        dispatch(filterCards(event.target.value))
    }

    
    return(
        
        <div>
           <select onChange={handleOrder}>
           <option value="A">Ascendente</option>
           <option value="D">Descendente</option>
           </select>

           <select onChange={handleFilter}>
           <option value="Male">Male</option>
           <option value="Female">Female</option>
           <option value="Genderless">Genderless</option>
           <option value="unknown">unknown</option>
           </select>
           
           {
           
           myFavorites?.map((favorito)=>{
            return (
                <Card
                key={favorito.id}
                id={favorito.id}
                name={favorito.name}
                status={favorito.status}
                species={favorito.species}
                gender={favorito.gender}
                origin={favorito.origin}
                image={favorito.image}
                onClose={favorito.onClose}
                />
            )
           
            })
           
           } 
        </div>

    )

}

const mapStateToProps = (state)=>{

    return {
        myFavorites : state.myFavorites
    }

}



export default connect(mapStateToProps, null)(Favorites);