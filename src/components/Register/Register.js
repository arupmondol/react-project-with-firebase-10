import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';
import './Register.css'
import { FaGoogle ,FaGithub} from "react-icons/fa";
const Register = () => {
  const { createUser, singInWithGoogle } = useContext(AuthContext)
  const [error, setError] =useState(null);
  const handleSubmit = (event) =>{
    event.preventDefault()
    const form =event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // const confirm = form.confirm.value;
    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log('registered user', user)
      })
      .catch(error => {
        console.error(error)
      })

  }

  const handleGoogleSingIn = () =>{
    singInWithGoogle()
      .then(result => {
        const user =  result.user;
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div>
     <section className='singup'>
            <div className='singup-form'> 
            <h2>Register</h2>
             <form onSubmit={handleSubmit} >
              <input type="text" name="name" id="name" placeholder='Your Name'/>
              <input type="email" name="email" id="email" placeholder='Your email'/>
              <input type="password" name="password" id="password" placeholder='Your password'/>
              <input type="submit"   className='btn-submit' value="Submit" />
             </form>
             <p className='text-error'>{error}</p>
             <p>Alrady have an account <Link to='/login'>Login</Link></p>
         </div>
        <span>
          <button className='button-singIn' onClick={handleGoogleSingIn}>Google <FaGoogle/></button>
          <button className='button-singIn1' onClick={handleGoogleSingIn}>Github <FaGithub/> </button>
          </span>
     </section>
    </div>
  );


  
};

export default Register;