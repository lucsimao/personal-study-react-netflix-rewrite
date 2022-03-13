import React, { useEffect, useState } from 'react';
import { getCategories, getMovieWithVideo } from './services/movies-service';

import Body from './components/body/body';
import { Category } from './domain/models/category';
import { GlobalStyles } from './GlobalStyles';
import Header from './components/header/header';
import { HttpClient } from './infra/interfaces/http-client';
import { Movie } from './domain/models/movie';

const movie: Movie = {
  id: '585245',
  title: 'Clifford: O Gigante Cão Vermelho',
  overview: `Baseado na adorada história dos livros escolares escritos por Norman
        Bridwell, Clifford irá mostrar ao mundo como é possível amar em grande!`,
  imagePath: 'g51VeVAIM7q9ZqpZRlPEqqhLThR.jpg',
  videoUrl: 'xlGOCCsValCs',
};

const App: React.FC<{ httpClient: HttpClient }> = (props) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [mainMovie, setMainMovie] = useState<Movie>(movie);

  const updateCategories = async () => {
    const result = await getCategories(props.httpClient);
    setCategories(result);
  };

  const updateMovie = async () => {
    const result = await getMovieWithVideo(props.httpClient);
    setMainMovie(result);
  };

  useEffect(() => {
    updateCategories();
    updateMovie();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Body categories={categories} mainMovie={mainMovie} />
    </>
  );
};

export default App;
