import { Container, VideoWrapper } from './styled';

import React from 'react';
import { formatVideoUrl } from '../../../../services/movies-service';

const Video: React.FC<{ videoUrl: string }> = (props) => {
  return (
    <Container>
      <VideoWrapper
        src={formatVideoUrl(props.videoUrl)}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </Container>
  );
};

export default Video;
