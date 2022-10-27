import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';
import './Login.css'

const Login = () => {
  const { singIn } = useContext(AuthContext)
  const handleSubmit = event => {
    event.preventDefault()
    const form =event.target;
    const email = form.email.value;
    const password = form.password.value;

    singIn(email,password)
    .then(result => {
      const user = result.user;
      console.log(user)
    })
    .catch(error => {
      console.error(error)
    })
  }
  return (
    <div>
       <div className='login-form'> 
         <h2>Log in</h2>
          <form  onSubmit={handleSubmit}>
           <input type="email" name="email" id="email" placeholder='Your email'/>
           <input type="password" name="password" id="password" placeholder='Your password'/>
           <input className='btn-submit' type="submit" value="Login" />
           
          </form>
          <p>New to this site then <Link to='/register'>Register</Link></p>
         </div>
    </div>
  );
};

export default Login;