
/*import React from 'react'
import { useForm } from 'react-hook-form'
import { registeruser } from './store';
import { Navigate } from 'react-router-dom';*/

/*function SignUp() {

    const{register,handleSubmit}=useForm();

    //handle form submit
    const myFunc=(data)=>{

        dispatch(registeruser(data));    //send the data to registeruser 
        alert("Registration Successful!");
        Navigate('/Signin');   //navigate to signin
    };

  return (
    <>

    <h2>SignUp</h2>
    <form onSubmit={handleSubmit(myFunc)}>

        <input type='text' placeholder='username'{...register('username')}/>
        <input type='password' placeholder='password'{...register('password')}/>
        <input type='email' placeholder='email'{...register('email')}/>
        <input type='text' placeholder='Mobile'{...register('mobile')}/>

        <div>
            <label>Gender</label>
            <input type='radio' >Male</input>
            
            <input type='radio' >Female</input>
             <button type='submit'>SignUp</button>

        </div>
       
    </form>
  
    </>
  )
}

export default SignUp;*/


import React from 'react';
import { useForm } from 'react-hook-form';
import { registeruser } from './store';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; // Import CSS

function SignUp() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const myFunc = (data) => {
    dispatch(registeruser(data));
    alert("Registration Successful!");
    navigate('/Signin');
  };

  return (
     <div className="signup-page-background">
    <div className="signup-container">
      <h2>📝 User Registration</h2>
      <form onSubmit={handleSubmit(myFunc)}>
        <input type="text" placeholder="👤 Username" {...register('username')} />
        <input type="password" placeholder="🔒 Password" {...register('password')} />
        <input type="email" placeholder="📧 Email" {...register('email')} />
        <input type="text" placeholder="📱 Mobile" {...register('mobile')} />

        <div>
          <label>⚧ Gender:</label><br />
          <label>
            <input type="radio" value="Male" {...register('gender')} name="gender" />
            Male
          </label>
          <label>
            <input type="radio" value="Female" {...register('gender')} name="gender" />
            Female
          </label>
        </div>

        <button type="submit">🚀 Sign Up</button>
      </form>
    </div>
    </div>
  );
}

export default SignUp;
