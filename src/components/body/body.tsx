import { Category } from '../../domain/models/category';
import Movie from './movie/movie';
import MovieList from './movie-list/movie-list';
import { Movie as MovieModel } from '../../domain/models/movie';
import { MoviesContainer } from './styled';
import PromotionalVideo from './promotional-video/promotional-video';
import React from 'react';

const movie = {
  title: 'Clifford: O Gigante Cão Vermelho',
  sinopsys: `Baseado na adorada história dos livros escolares escritos por Norman
        Bridwell, Clifford irá mostrar ao mundo como é possível amar em grande!`,
  videoUrl: 'xlGOCCValCs',
};

const Body: React.FC<{ categories: Category[] }> = (props) => {
  return (
    <div>
      <PromotionalVideo {...movie} />
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
