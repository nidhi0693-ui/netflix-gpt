import React, {useRef, useState} from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {

  const [isSignInForm , setIsSignInForm]  = useState(true);
  const [error, setError] = useState(null);

  // reference values
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleSubmit = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setError(message);
    if (!message) return; // if any validation error , return

    // for sign up 
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        setError(error.code + "-" + error.message);
        // ..
      });
    } else {
      // for sign in
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        setError(error.code + "-" + error.message);
      });
    }
  }

  return (
    <div>
        <Header />
        <div className='absolute'>
            <img alt="banner" src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4' >{isSignInForm ?  'Sign In' : 'Sign Up'}</h1>
            <input ref={email} type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800' />
            {!isSignInForm && <input ref={name} type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800' />}
            <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-800' />
            <p className='text-red-500 font-bold text-lg py-2'>{error}</p>
            <button className='p-4 my-6 bg-red-700 w-full' onClick={handleSubmit}>{isSignInForm ?  'Sign In' : 'Sign Up'}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ?  'New to Netflix? Sign Up Now' : 'Already registered? Sign In Now.'}</p>
        </form>
    </div>
    
  )
}

export default Login

