import { Movie } from './movie';

type Movies = Movie[];

export interface Category {
  title: string;
  movies: Movies;
}
