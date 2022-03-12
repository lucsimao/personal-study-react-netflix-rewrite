import { Category } from '../../domain/models/category';
import Movie from './movie/movie';
import MovieList from './movie-list/movie-list';
import { Movie as MovieModel } from '../../domain/models/movie';
import { MoviesContainer } from './styled';
import PromotionalVideo from './promotional-video/promotional-video';
import React from 'react';

const Body: React.FC<{ categories: Category[]; mainMovie: MovieModel }> = (
  props
) => {
  return (
    <div>
      <PromotionalVideo {...props.mainMovie} />
      <MoviesContainer>
        {props.categories.map((category, index) => (
          <MovieList key={index} title={category.title}>
            {category.movies.map((movie: MovieModel, index) => (
              <Movie key={index} url={movie.imagePath} />
            ))}
          </MovieList>
        ))}
      </MoviesContainer>
    </div>
  );
};

export default Body;
