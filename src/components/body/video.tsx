import { CgInfo } from 'react-icons/cg';
import { FaPlay } from 'react-icons/fa';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Description = styled.div`
  height: 100vh;
  width: 40vw;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding: 3.1vw;
  padding-bottom: 4vh;
`;

const ButtonContainer = styled.div`
  margin-bottom: 16vw;
  /* margin-top: 58vh; */
  bottom: 0;
  display: flex;
`;

const VideoContainer = styled.div`
  position: absolute;

  /* border-style: solid;
  border-color: rgba(0, 0, 0, 0.4);
  border-bottom-width: 200px; */
  z-index: -1;
`;

const VideoWrapper = styled.iframe`
  width: 100vw;
  height: 56.25vw;

  overflow: hidden;
  pointer-events: none;
  top: 0px;
  z-index: -1;
`;

const AssistirButton = styled.button`
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1.5vh;
  padding-left: 2.6em;
  padding-right: 2.6em;
  appearance: none;
  border: 0px;
  border-radius: 4px;
  cursor: pointer;
  overflow: visible;

  &:hover {
    background-color: #aaaaaa;
  }
  span {
    margin-left: 14px;

    font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 1.7em;
  }
`;

const MoreInfoButton = styled.button`
  margin-left: 15px;

  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.6rem;
  padding-left: 1.8rem;
  padding-right: 1.8rem;
  appearance: none;
  border: 0px;
  border-radius: 4px;
  cursor: pointer;
  overflow: visible;

  background-color: rgba(109, 109, 110, 0.7);
  &:hover {
    background-color: rgba(49, 49, 50, 0.7);
  }
  color: white;

  span {
    margin-left: 14px;

    font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 1.76em;
  }
`;

const SinopsisContainer = styled.div`
  color: #fff;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  font-size: 1.4vw;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
  margin-top: 0.1vw;
  font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  margin-bottom: 25px;
`;

const formatVideoUrl = (videoUrl: string) => {
  const youtubeUrl = 'https://www.youtube.com/embed/';
  const options =
    '?version=3&rel=0&autoplay=1&controls=0&&showinfo=0&loop=1&mute=1&start=50&showinfo=0&color=white&iv_load_policy=3&playlist=';
  return `${youtubeUrl}${videoUrl}${options}${videoUrl}`;
};

const Video: React.FC<{ videoUrl: string }> = (props) => {
  return (
    <Container>
      <Description>
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

export default Video;
