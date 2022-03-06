import React from 'react';
import styled from 'styled-components';

const baseURL = 'https://image.tmdb.org/t/p/w355_and_h200_multi_faces/';

const MovieImage = styled.a`
  content: url(${(props: { url: string }) => baseURL + props.url});
  border-radius: 0.3vw;
  width: 15vw;
  &:hover {
    width: 18vw;
  }
`;

const Movie = (props: { url: string }) => {
  return (
    <li>
      <MovieImage url={props.url} />
    </li>
  );
};

export default Movie;
