import { Container, VideoWrapper } from './styled';

import React from 'react';

const formatVideoUrl = (videoUrl: string) => {
  const youtubeUrl = 'https://www.youtube.com/embed/';
  const options =
    '?version=3&rel=0&autoplay=1&controls=0&&showinfo=0&loop=1&mute=1&start=50&showinfo=0&color=white&iv_load_policy=3&playlist=';
  return `${youtubeUrl}${videoUrl}${options}${videoUrl}`;
};

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
