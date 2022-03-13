import { Category } from '../domain/models/category';
import { HttpClient } from '../infra/interfaces/http-client';
import { Movie } from '../domain/models/movie';

const URL = 'https://api.themoviedb.org/3';

export const getMovies = async (
  httpClient: HttpClient,
  endpoint: string,
  maxNumber = 12
): Promise<Movie[]> => {
  const params = '?api_key=8e5c74cb2e4df6afe8f6aa1c6ac326ff&language=en';
  const response = await httpClient.get<{ results: any[] }>(
    `${URL}${endpoint}${params}`
  );

  const movies = response.results.slice(0, maxNumber);
  const result = mapApiMoviesToDomain(movies);

  return result;
};

export const getMovie = async (
  httpClient: HttpClient,
  endpoint: string
): Promise<Movie> => {
  const params = '?api_key=8e5c74cb2e4df6afe8f6aa1c6ac326ff&language=en';
  const response = await httpClient.get<any>(`${URL}${endpoint}${params}`);

  const movie = response;
  const result = {
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    imagePath: movie['poster_path'],
  };

  return result;
};

export const getMovieWithVideo = async (
  httpClient: HttpClient
): Promise<Movie> => {
  const movies = await getMovies(httpClient, '/movie/now_playing');

  for (let movie of movies) {
    const params = '?api_key=8e5c74cb2e4df6afe8f6aa1c6ac326ff&language=pt-br';
    const endpoint = `/movie/${movie.id}/videos`;
    const response = await httpClient.get<{ results: any[] }>(
      `${URL}${endpoint}${params}`
    );
    const videos = response.results;
    const videoUrl = videos?.[0]?.key;
    console.log(videoUrl);
    if (videoUrl) {
      const result = { ...movie, videoUrl };

      return result;
    }
  }
  throw new Error('Video Movie not found');
};

const mapApiMoviesToDomain = (movies: any[]): Movie[] => {
  const result = movies.map(
    (movie) =>
      ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        imagePath: movie['poster_path'],
      } as Movie)
  );

  return result;
};

export const getCategories = async (
  httpclient: HttpClient
): Promise<Category[]> => {
  const result = [
    {
      title: 'Em Cartaz',
      movies: await getMovies(httpclient, '/movie/now_playing'),
    },
    {
      title: 'Populares',
      movies: await getMovies(httpclient, '/movie/popular'),
    },
    {
      title: 'Mais Bem Avaliados',
      movies: await getMovies(httpclient, '/movie/top_rated'),
    },
    {
      title: 'Em Breve',
      movies: await getMovies(httpclient, '/movie/upcoming'),
    },
  ];

  return result;
};
