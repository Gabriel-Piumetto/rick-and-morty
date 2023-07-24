import { useState } from "react";
import styles from "./Form.module.css";
import validation from "./validation.js" 


const Form = ({login})=> {
   
const [userData, setUserdata] = useState({
    email:'',
    password:''})   
   

const [errors, setErrors] = useState({})

   const handleSubmit = (event)=>{
         event.preventDefault()
         login(userData)
   }


    const handleChange = (event)=>{
    
    setErrors(validation({...userData,[event.target.name] : event.target.value }))    


    setUserdata({
        ...userData,
        [event.target.name] : event.target.value

    })
}


    return (
   
       <div>
        <form className={styles.form}>
            <label htmlFor="email">Email</label>
            <input value={userData.email} name="email" type="text" onChange={handleChange}></input>
            {
            errors.email1 ? (<p>{errors.email1}</p>): errors.email2 ? (<p>{errors.email2}</p>): errors.email3 ? (<p>{errors.email3}</p>):null} 
            <label htmlFor="password">Password</label>
            <input value={useState.password} name="password" type="password" onChange={handleChange}></input>
            {
                errors.pasword1 ? (<p>{errors.password1}</p>): errors.password2 ? (<p>{errors.password2}</p>):null
            }
            <button onClick={handleSubmit}>Submit</button>
        </form>
       </div>

   )

}


export default Form