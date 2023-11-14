import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';


const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store => store?.movies?.trailerVideo);
    useMovieTrailer(movieId);    

    return (
        <div className='w-screen'>
            <iframe
                className='w-screen aspect-video'
                src={"https://www.youtube.com/embed/X4d_v-HyR4o?si=DNYe6Jrsy7u5BeSe"+trailerVideo?.key + "?mute=1&autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    )
}

export default VideoBackground