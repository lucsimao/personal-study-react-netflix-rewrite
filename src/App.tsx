import React, { useEffect, useState } from 'react';

import Body from './components/body/body';
import { Category } from './domain/models/category';
import { GlobalStyles } from './GlobalStyles';
import Header from './components/header/header';
import { HttpClient } from './infra/interfaces/http-client';
import { Movie as MovieModel } from './domain/models/movie';

const URL = 'https://api.themoviedb.org/3';

const getCategories = async (httpclient: HttpClient): Promise<Category[]> => {
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

const getMovies = async (
  httpClient: HttpClient,
  endpoint: string,
  maxNumber = 12
): Promise<MovieModel[]> => {
  const params = '?api_key=8e5c74cb2e4df6afe8f6aa1c6ac326ff&language=pt-br';
  const response = await httpClient.get<{ results: any[] }>(
    `${URL}${endpoint}${params}`
  );

  const movies = response.results.slice(0, maxNumber);
  const result: MovieModel[] = movies.map((movie) => ({
    title: movie.title,
    overview: movie.overview,
    imagePath: movie['poster_path'],
  }));

  return result;
};

const App: React.FC<{ httpClient: HttpClient }> = (props) => {
  const [categories, setCategories] = useState<Category[]>([]);

  const updateCategories = async () => {
    const result = await getCategories(props.httpClient);
    setCategories(result);
  };

  useEffect(() => {
    updateCategories();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Body categories={categories} />
    </>
  );
};

export default App;
