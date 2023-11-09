import React, {useState} from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm , setIsSignInForm]  = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
        <Header />
        <div className='absolute'>
            <img alt="banner" src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
        </div>
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4' >{isSignInForm ?  'Sign In' : 'Sign Up'}</h1>
            <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800' />
            {!isSignInForm && <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800' />}
            <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-800' />
            <button className='p-4 my-6 bg-red-700 w-full'>{isSignInForm ?  'Sign In' : 'Sign Up'}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ?  'New to Netflix? Sign Up Now' : 'Already registered? Sign In Now.'}</p>
        </form>
    </div>
    
  )
}

export default Login

