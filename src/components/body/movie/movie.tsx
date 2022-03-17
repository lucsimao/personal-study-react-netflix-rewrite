import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { DetailedMovieImage, MovieImage, TitleContainer } from './styled';
import React, { useState } from 'react';

import { BsPlusCircle } from 'react-icons/bs';
import { IoIosArrowDropdown } from 'react-icons/io';
import { MdPlayCircle } from 'react-icons/md';
import { Movie as MovieModel } from '../../../domain/models/movie';
import styled from 'styled-components';

const DetailedActionButtonContainer = styled.div`
  display: flex;
  flex-direction: initial;
  align-items: center;
  justify-content: space-between;
  * {
    cursor: pointer;
  }
`;

const MainActionButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  * {
    margin-right: 10px;
    cursor: pointer;
  }
`;

const DetailedMoviesActionButton = () => {
  return (
    <DetailedActionButtonContainer>
      <MainActionButtonsContainer>
        <MdPlayCircle color="white" size={40} />
        <BsPlusCircle color="white" size={33} />
        <AiOutlineLike color="white" size={35} />
        <AiOutlineDislike color="white" size={35} />
      </MainActionButtonsContainer>

      <IoIosArrowDropdown color="white" size={35} />
    </DetailedActionButtonContainer>
  );
};

const Container = styled.div`
  border-radius: 0.5vw;
  position: relative;
  z-index: 100;
  display: flex;

  background-color: #141414;

  -webkit-transform: scale(1.2, 1.2);
  box-shadow: 8px 5px 5px black;
  flex-direction: column;
  * {
    font-size: 1vw;
    text-shadow: 4px 4px 8px rgb(0 0 0);
    color: #fff;

    font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`;

const GenresContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  * {
    font-size: 1vw;
    text-shadow: 4px 4px 8px rgb(0 0 0);
    color: #fff;

    font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`;

const InfoContainer = styled.div``;

const Details = styled.div`
  padding: 9px;
`;

const Relevance = styled.div`
  color: green;
`;

const DetailedMovieContainer: React.FC<MovieModel> = (props) => {
  return (
    <Container>
      <DetailedMovieImage url={props.backdropImagePath} />
      <Details>
        <TitleContainer>{props.title}</TitleContainer>
        <DetailedMoviesActionButton />
        <InfoContainer>
          <Relevance>{props.relevance * 10}% Relevante</Relevance>
          <div>{props.duration} min</div>
        </InfoContainer>
        <GenresContainer>
          {props.genres.map((genre, index) => (
            <div key={index}>{genre}</div>
          ))}
        </GenresContainer>
      </Details>
    </Container>
  );
};

const MovieContainer = styled.li`
  position: static;
`;

const Movie = (props: { movie: MovieModel }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <MovieContainer
      onMouseLeave={() => setIsHovered(false)}
      onMouseOver={() => setIsHovered(true)}
    >
      {isHovered ? (
        <DetailedMovieContainer {...props.movie} />
      ) : (
        <MovieImage url={props.movie.imagePath} />
      )}
    </MovieContainer>
  );
};

export default Movie;
