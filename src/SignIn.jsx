
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginuser } from './store'; // Make sure this action is defined
import './SignIn.css'; // Keep your styles here
import { Link } from 'react-router-dom';

function SignIn() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle form submission
  const onSubmit = (data) => {
    dispatch(loginuser(data)); // Dispatch login action
    navigate('/Veg'); // Navigate to Veg page after login
  };

  return (
    <div className="signin-page-background">
    <div className="signin-container">
      <h2>Sign In</h2>

      {/* Form starts here */}
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Username field */}
        <div className="input-wrapper">
          <span className="icon">👤</span>
          <input
            type="text"
            placeholder="Username"
            {...register('username', { required: true })}
          />
        </div>

        {/* Password field */}
        <div className="input-wrapper">
          <span className="icon">🔒</span>
          <input
            type="password"
            placeholder="Password"
            {...register('password', { required: true })}
          />
        </div>

        {/* Submit button */}
        <button type="submit">Sign In</button>
      </form>

      {/* Sign-up text */}
     <p>
  Don't have an account? <Link to="/signup">Sign up</Link>
</p>
    </div>
  </div>
  );
}

export default SignIn;


