import { Container } from './styled';
import Description from './description/description';
import { Movie } from '../../../domain/models/movie';
import React from 'react';
import Video from './video/video';

const PromotionalVideo: React.FC<Movie> = (props) => {
  return (
    <Container>
      <Description {...props} />
      <Video videoUrl={props.videoUrl ?? ''} />
    </Container>
  );
};

export default PromotionalVideo;
