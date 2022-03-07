import {
  AssistirButton,
  ButtonContainer,
  Container,
  Description,
  MoreInfoButton,
  SinopsisContainer,
  TitleContainer,
  VideoContainer,
  VideoWrapper,
} from './styled';

import { CgInfo } from 'react-icons/cg';
import { FaPlay } from 'react-icons/fa';
import React from 'react';

const formatVideoUrl = (videoUrl: string) => {
  const youtubeUrl = 'https://www.youtube.com/embed/';
  const options =
    '?version=3&rel=0&autoplay=1&controls=0&&showinfo=0&loop=1&mute=1&start=50&showinfo=0&color=white&iv_load_policy=3&playlist=';
  return `${youtubeUrl}${videoUrl}${options}${videoUrl}`;
};

const PromotionalVideo: React.FC<{ videoUrl: string }> = (props) => {
  return (
    <Container>
      <Description>
        <TitleContainer>Clifford: O Gigante Cão Vermelho</TitleContainer>
        <SinopsisContainer>
          Baseado na adorada história dos livros escolares escritos por Norman
          Bridwell, Clifford irá mostrar ao mundo como é possível amar em
          grande!
        </SinopsisContainer>
        <ButtonContainer>
          <AssistirButton>
            <FaPlay size={'2.2em'} />
            <span>Assistir</span>
          </AssistirButton>
          <MoreInfoButton>
            <CgInfo size={'2.8em'} />
            <span>Mais informações</span>
          </MoreInfoButton>
        </ButtonContainer>
      </Description>
      <VideoContainer>
        <VideoWrapper
          src={formatVideoUrl(props.videoUrl)}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </VideoContainer>
    </Container>
  );
};

export default PromotionalVideo;
