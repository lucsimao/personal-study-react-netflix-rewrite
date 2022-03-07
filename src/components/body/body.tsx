import Movie from './movie/movie';
import MovieList from './movie-list/movie-list';
import { MoviesContainer } from './styled';
import PromotionalVideo from './promotional-video/promotional-video';
import React from 'react';

const movie = {
  title: 'Clifford: O Gigante Cão Vermelho',
  sinopsys: `Baseado na adorada história dos livros escolares escritos por Norman
        Bridwell, Clifford irá mostrar ao mundo como é possível amar em grande!`,
  videoUrl: 'xlGOCCValCs',
};

const categories = [
  {
    title: 'Séries baseadas em livros',
    movies: [
      { videoUrl: 'iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg' },
      { videoUrl: '4OTYefcAlaShn6TGVK33UxLW9R7.jpg' },
      { videoUrl: 'usaZV7KB6Man9Rm9TyDAeQf7uVD.jpg' },
      { videoUrl: '2PYQKeDhFwP5IX7EnIpCComBqj8.jpg' },
      { videoUrl: 'mruT954ve6P1zquaRs6XG0hA5k9.jpg' },
      { videoUrl: 'mqDnDhG5N6fn1H4MKQqr8E5wfeK.jpg' },
      { videoUrl: 'tBrbDkZSiWbCEOpIV8GaDcPFDet.jpg' },
    ],
  },
  {
    title: 'Continuar assistindo como Lucas',
    movies: [
      { videoUrl: 'aWeKITRFbbwY8txG5uCj4rMCfSP.jpg' },
      { videoUrl: 'ilty8eu65u6vCJpyMva9ele8Qtm.jpg' },
      { videoUrl: 'loI63vxJK0UgYSXrzYdxOoCw2YO.jpg' },
      { videoUrl: 'tBrbDkZSiWbCEOpIV8GaDcPFDet.jpg' },
      { videoUrl: '8pgKccb5PfE1kWB9qqiXJem83VC.jpg' },
      { videoUrl: 'uQt2dJFMnJmAp9zLAWNfGilK0BW.jpg' },
      { videoUrl: 'srJ7haOhfykoPOYPQrstOaFem08.jpg' },
    ],
  },
  {
    title: 'Em alta',
    movies: [
      { videoUrl: 'eNI7PtK6DEYgZmHWP9gQNuff8pv.jpg' },
      { videoUrl: '9DT4WVqZqBEI9Kub18gZ3m1D89m.jpg' },
      { videoUrl: 'o76ZDm8PS9791XiuieNB93UZcRV.jpg' },
      { videoUrl: 'tnKi8Vx9mRvOGrmzBOOh5wHEbQI.jpg' },
      { videoUrl: 'srJ7haOhfykoPOYPQrstOaFem08.jpg' },
      { videoUrl: '2LSwzrdj7ljnFhiqIgfp9rd46fU.jpg' },
      { videoUrl: 'srJ7haOhfykoPOYPQrstOaFem08.jpg' },
    ],
  },
  {
    title: 'Top 10 no brasil',
    movies: [
      { videoUrl: '1Wlwnhn5sXUIwlxpJgWszT622PS.jpg' },
      { videoUrl: 'g51VeVAIM7q9ZqpZRlPEqqhLThR.jpg' },
      { videoUrl: 'q2KFBGyUSzHDhNqXEYv2LqTWVSz.jpg' },
      { videoUrl: 'kvhrltQIRp1u84ao9uj52YPaWNY.jpg' },
      { videoUrl: 'yKnjIWNIVECfMoKy1ayl68vX6qj.jpg' },
      { videoUrl: 'iEmwNY1s9BUJ2KguAkMuAhlq3cE.jpg' },
      { videoUrl: 'loI63vxJK0UgYSXrzYdxOoCw2YO.jpg' },
    ],
  },
  {
    title: 'Minha Lista',
    movies: [
      { videoUrl: 'jdLsmpqmP1wTdFUPtmxMnYgoifT.jpg' },
      { videoUrl: 'dAPdK3L2STpHo4DFKwtL2gdo89L.jpg' },
      { videoUrl: 'srJ7haOhfykoPOYPQrstOaFem08.jpg' },
      { videoUrl: '2LSwzrdj7ljnFhiqIgfp9rd46fU.jpg' },
      { videoUrl: 'mRZDHjArYNWpOv06kxRK1cduQKh.jpg' },
      { videoUrl: 'x6QStvZ0RBahnz5YZ584yeZLb5x.jpg' },
      { videoUrl: '1Wlwnhn5sXUIwlxpJgWszT622PS.jpg' },
    ],
  },
];

const Body = () => {
  return (
    <div>
      <PromotionalVideo {...movie} />
      <MoviesContainer>
        {categories.map((category, index) => (
          <MovieList key={index} title={category.title}>
            {category.movies.map((movie, index) => (
              <Movie key={index} url={movie.videoUrl} />
            ))}
          </MovieList>
        ))}
      </MoviesContainer>
    </div>
  );
};

export default Body;
