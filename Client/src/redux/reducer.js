const initialState = {
    myFavorites: [],
    allCharacters: []
}


const reducer = (state=initialState, action)=>{
    
    switch(action.type){
    
        default: return {...state}

        case 'ADD_FAV':
        return { ...state, myFavorites: action.payload, allCharacters: action.payload };

        case 'REMOVE_FAV':
        return { ...state, myFavorites: action.payload, allCharacters: action.payload };

        case "FILTER" :  {
            const allCharactersFiltered = state.allCharacters.filter( (character)=> character.gender === action.payload )
            return {...state,
            myFavorites: allCharactersFiltered
            
            }     
        }

        case "ORDER":
            const allCharactersCopied = [...state.allCharacters]
            return {
                ...state,
                myFavorites:
                action.payload === 'A'
                ? allCharactersCopied.sort((a, b) => a.id - b.id)
                : allCharactersCopied.sort((a, b) => b.id - a.id)
            }
        
         

        
   

    }
   
}

export default reducer