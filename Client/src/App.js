import { useState,useEffect } from 'react';
import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from "./components/About/About" 
import Detail from "./components/Detail/Detail"
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';


function App() {
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const [characters, setCharacters] = useState([]);
   const location = useLocation();

const login = async (userData)=> {
   
   try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const {data} = await axios(URL + `?email=${email}&password=${password}`)
      
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
   } catch (error) {
      window.alert(error.message); 
   }

   
}

   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
   
   const onClose = (id) => {
      setCharacters(characters.filter((character) => {
         return character.id !== id
      })
      )
   }


   const onSearch = async (id) => {

      try {
         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         
            if(!data.name){ throw Error('¡No hay personajes con este ID!')}
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);}
            
            
      }catch(error) {
         window.alert(error.message);
      }
      
         
   }

   
   return (  
            
          
      <div className='App'>


         {location.pathname!=="/"&&<Nav onSearch={onSearch}/>}
         
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
         
         
      </div> 
   );
}




export default App;