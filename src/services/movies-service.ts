import { API_BASE_URL, QUERY_PARAMS } from './../components/config/index';

import { Category } from '../domain/models/category';
import { HttpClient } from '../infra/interfaces/http-client';
import { Movie } from '../domain/models/movie';

const URL = API_BASE_URL;

export const formatVideoUrl = (videoUrl: string) => {
  const youtubeUrl = 'https://www.youtube.com/embed/';
  const options =
    '?version=3&rel=0&autoplay=1&controls=0&&showinfo=0&loop=1&mute=1&start=50&showinfo=0&color=white&iv_load_policy=3&playlist=';
  return `${youtubeUrl}${videoUrl}${options}${videoUrl}`;
};

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
  const result = await mapApiMoviesToDomain(movies, httpClient);

  return result;
};

export const getMovie = async (
  httpClient: HttpClient,
  endpoint: string
): Promise<Movie> => {
  const query = `${URL}${endpoint}${QUERY_PARAMS}`;
  const response = await httpClient.get<any>(query);

  const movie = response;
  try {
    const result = parseMovie(movie);

    return result;
  } catch (e) {
    throw new Error(`${JSON.stringify(movie)} ${e} ${query}`);
  }
};

//stackoverflow.com/questions/59810241/how-to-fisher-yates-shuffle-a-javascript-array
const shuffle = <T>(arr: T[]) => {
  var i = arr.length,
    j,
    temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
};

export const getMovieWithVideo = async (
  httpClient: HttpClient
): Promise<Movie> => {
  const movies = await getMovies(httpClient, '/movie/now_playing');
  shuffle<Movie>(movies);

  for (let movie of movies) {
    const endpoint = `/movie/${movie.id}/videos`;
    const response = await httpClient.get<{ results: any[] }>(
      `${URL}${endpoint}${QUERY_PARAMS}`
    );
    const videos = response.results;
    const videoUrl = videos?.[0]?.key;

    if (videoUrl) {
      const result = await getMovie(httpClient, `/movie/${movie.id}`);

      return { ...result, videoUrl };
    }
  }
  throw new Error('Video Movie not found');
};

const getOverview = (overview: string) => {
  const maxCharacters = 200;
  if (overview.length > maxCharacters) {
    return overview.substring(0, maxCharacters);
  }

  return overview;
};

const parseMovie = (movie: any): Movie => {
  return {
    id: movie.id,
    title: movie.title,
    overview: getOverview(movie.overview),
    imagePath: movie['poster_path'],
    backdropImagePath: movie['backdrop_path'],
    genres: getGenres(movie['genres']),
    budget: movie['budget'],
    duration: movie['runtime'],
    relevance: movie['vote_average'],
    logo: getLogos(movie['images']['logos']),
  } as Movie;
};

const getLogos = (logos: { ['file_path']: string }[]): string => {
  const result = logos.map((logo) => logo['file_path']);

  return result[0];
};

const mapApiMoviesToDomain = async (
  movies: any[],
  httpClient: HttpClient
): Promise<Movie[]> => {
  const mapMovies = movies.map(async (movie) => {
    const result = await getMovie(httpClient, `/movie/${movie.id}`);

    return result;
  });

  const result = await Promise.all(mapMovies);

  return result;
};

export const getCategories = async (
  httpClient: HttpClient
): Promise<Category[]> => {
  const result = [
    {
      title: 'Em Cartaz',
      movies: await getMovies(httpClient, '/movie/now_playing'),
    },
    {
      title: 'Populares',
      movies: await getMovies(httpClient, '/movie/popular'),
    },
    {
      title: 'Mais Bem Avaliados',
      movies: await getMovies(httpClient, '/movie/top_rated'),
    },
    {
      title: 'Em Breve',
      movies: await getMovies(httpClient, '/movie/upcoming'),
    },
  ];

  return result;
};

export const getGenres = (genres: { name: string }[]) => {
  const validGenres: { [key: number]: string } = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western',
  };

  const result = genres.map((genre) => genre.name);

  return result;
};
