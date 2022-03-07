import { Container } from './styled';
import Description from './description/description';
import React from 'react';
import Video from './video/video';

export interface Movie {
  title: string;
  sinopsys: string;
  videoUrl: string;
}

const PromotionalVideo: React.FC<Movie> = (props) => {
  return (
    <Container>
      <Description title={props.title} sinopsys={props.sinopsys} />
      <Video videoUrl={props.videoUrl} />
    </Container>
  );
};

export default PromotionalVideo;
