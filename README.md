# Netflix GPT App

Movies recommendation with AI.

## Setup

Install react app using `create-react-app` (CRA)

Install and init tailwind css

`npm install -D tailwindcss`
`npx tailwindcss init`

Configure tailwind css in your project

`npx tailwindcss init` command will create a file `tailwind.config.js` in your project's root directory. Open `tailwind.config.js` and replace all content with below code.

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

`@tailwind base`;
`@tailwind components`;
`@tailwind utilities`;

Now you created a react app with tailwind css successfully. Now run the below command on your terminal to start your local development server.

`npm start`

## Features
- Home Page (is user !authorised)
  
- Header 
- Signin/Signup Page
- SignInForm / SignUpForm
- Form Validation
- useRef hook
- Firebase Setup
- Deploying app to production
- Create Sign Up User Account in Firebase
- 

- Browse Page

  - Navbar
  - Showcase
  - Showcase
  - Trendings
  - MoviesSuggestion
    - MoviesList \* N

- NetflixGPT
  - Search
  - MoviesSuggestion
