import Movie from './movie/movie';
import MovieList from './movie-list/movie-list';
import { MoviesContainer } from './styled';
import React from 'react';
import Video from './video/video';

const Body = () => {
  return (
    <div>
      <Video videoUrl="xlGOCCValCs" />
      <MoviesContainer>
        <MovieList title="Séries baseadas em livros">
          <Movie url={'iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg'} />
          <Movie url={'4OTYefcAlaShn6TGVK33UxLW9R7.jpg'} />
          <Movie url={'usaZV7KB6Man9Rm9TyDAeQf7uVD.jpg'} />
          <Movie url={'2PYQKeDhFwP5IX7EnIpCComBqj8.jpg'} />
          <Movie url={'mruT954ve6P1zquaRs6XG0hA5k9.jpg'} />
          <Movie url={'mqDnDhG5N6fn1H4MKQqr8E5wfeK.jpg'} />
          <Movie url={'tBrbDkZSiWbCEOpIV8GaDcPFDet.jpg'} />
        </MovieList>

        <MovieList title="Continuar assistindo como Lucas">
          <Movie url={'aWeKITRFbbwY8txG5uCj4rMCfSP.jpg'} />
          <Movie url={'ilty8eu65u6vCJpyMva9ele8Qtm.jpg'} />
          <Movie url={'loI63vxJK0UgYSXrzYdxOoCw2YO.jpg'} />
          <Movie url={'tBrbDkZSiWbCEOpIV8GaDcPFDet.jpg'} />
          <Movie url={'8pgKccb5PfE1kWB9qqiXJem83VC.jpg'} />
          <Movie url={'uQt2dJFMnJmAp9zLAWNfGilK0BW.jpg'} />
          <Movie url={'srJ7haOhfykoPOYPQrstOaFem08.jpg'} />
        </MovieList>

        <MovieList title="Em alta">
          <Movie url={'eNI7PtK6DEYgZmHWP9gQNuff8pv.jpg'} />
          <Movie url={'9DT4WVqZqBEI9Kub18gZ3m1D89m.jpg'} />
          <Movie url={'o76ZDm8PS9791XiuieNB93UZcRV.jpg'} />
          <Movie url={'tnKi8Vx9mRvOGrmzBOOh5wHEbQI.jpg'} />
          <Movie url={'srJ7haOhfykoPOYPQrstOaFem08.jpg'} />
          <Movie url={'2LSwzrdj7ljnFhiqIgfp9rd46fU.jpg'} />
          <Movie url={'srJ7haOhfykoPOYPQrstOaFem08.jpg'} />
        </MovieList>

        <MovieList title="Top 10 no brasil">
          <Movie url={'1Wlwnhn5sXUIwlxpJgWszT622PS.jpg'} />
          <Movie url={'g51VeVAIM7q9ZqpZRlPEqqhLThR.jpg'} />
          <Movie url={'q2KFBGyUSzHDhNqXEYv2LqTWVSz.jpg'} />
          <Movie url={'kvhrltQIRp1u84ao9uj52YPaWNY.jpg'} />
          <Movie url={'yKnjIWNIVECfMoKy1ayl68vX6qj.jpg'} />
          <Movie url={'iEmwNY1s9BUJ2KguAkMuAhlq3cE.jpg'} />
          <Movie url={'loI63vxJK0UgYSXrzYdxOoCw2YO.jpg'} />
        </MovieList>

        <MovieList title="Minha Lista">
          <Movie url={'jdLsmpqmP1wTdFUPtmxMnYgoifT.jpg'} />
          <Movie url={'dAPdK3L2STpHo4DFKwtL2gdo89L.jpg'} />
          <Movie url={'srJ7haOhfykoPOYPQrstOaFem08.jpg'} />
          <Movie url={'2LSwzrdj7ljnFhiqIgfp9rd46fU.jpg'} />
          <Movie url={'mRZDHjArYNWpOv06kxRK1cduQKh.jpg'} />
          <Movie url={'x6QStvZ0RBahnz5YZ584yeZLb5x.jpg'} />
          <Movie url={'1Wlwnhn5sXUIwlxpJgWszT622PS.jpg'} />
        </MovieList>
      </MoviesContainer>
    </div>
  );
};

export default Body;
