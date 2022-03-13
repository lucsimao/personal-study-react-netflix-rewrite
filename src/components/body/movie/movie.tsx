import { DetailedMovieImage, MovieImage } from './styled';
import React, { useState } from 'react';

import { Movie as MovieModel } from '../../../domain/models/movie';

const Movie = (props: { movie: MovieModel }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <li
      onMouseLeave={() => setIsHovered(false)}
      onMouseOver={() => setIsHovered(true)}
    >
      {isHovered ? (
        <DetailedMovieImage url={props.movie.backdropImagePath} />
      ) : (
        <MovieImage url={props.movie.imagePath} />
      )}
    </li>
  );
};

export default Movie;
