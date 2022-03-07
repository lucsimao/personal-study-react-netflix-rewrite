import { MovieImage } from './styled';
import React from 'react';

const Movie = (props: { url: string }) => {
  return (
    <li>
      <MovieImage url={props.url} />
    </li>
  );
};

export default Movie;
