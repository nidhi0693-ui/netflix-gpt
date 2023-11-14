import React, { useEffect } from 'react'
import { addTrailerVideo } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();
    //fetch trailer video of that movieID
    const getMoviesVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS);
        const json = await data.json();

        const filterTrailer = json.results?.filter((video) => video.type === 'Trailer');
        const trailer = filterTrailer?.length ? filterTrailer[0] : json.results[0]; // if no trailer
        dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
        getMoviesVideos();
    }, [])
}

export default useMovieTrailer;