import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BANNER_URL } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
            <img alt="banner" src={BANNER_URL} />
        </div>
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch;
