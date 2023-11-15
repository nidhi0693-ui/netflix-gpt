import React, { useRef } from 'react'
import { useSelector,useDispatch  } from 'react-redux';
import lang from '../utils/languageConstants';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResults } from '../utils/gptSlice';

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
    const dispatch = useDispatch();

    const searchText = useRef(null);

    const searchMovieTMDB = async (movieName) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movieName + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        return json.results;
    }
    //let gptQuery = '';

    // if (searchText.current.value) {
        const gptQuery = 'Act as a Movie Recommendation system and suggest some movies for the query: ' + searchText?.current?.value + '. only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholey, Don, Golmal, Race';
   // }
       

    const handleGptSearch = async () => {
        // Make an API call to GPT API and get Movies Results
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });

        if (!gptResults?.choices) return;

        const gptMovies = gptResults?.choices[0]?.message?.content?.split(",");

        // this will give me array of gptmovies suggestion and for each movie search TMDB API
        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

        const tmdbResults = await Promise.all(promiseArray);

        dispatch(addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResults }));

    };

    return (
        <div className='pt-[10%] flex justify-center'>
            <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
                <input ref={searchText} type="text" className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder} />
                <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg' onClick={handleGptSearch}>{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar;