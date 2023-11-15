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
- Implement Sign In User Firebase API
- Created Redux store with User Slice
- Implemented Sign out
- Updated Profile
- Register TMDB API and create an app & get access token
- Get data from TMDB now playing movies list API
- Custom hook for now playing movies
- create movieSlice
- Fetch Data for Trailer Video
- Embed you tube video and make autoplay
- Build secondary component 
- Added Movies List - Now Playing , Popular, Top Rated, Upcoming as card
- GPT Search Feature
- GPT Search Bar
- Added Multi language Support in GPT Search 
- Integrate Open AI Api and fetch the TMDB Movies from the AI suggestions
- GPT Suggestion UI


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
