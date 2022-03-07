import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  overflow: hidden;
  z-index: -1;

  &:before {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;

    content: '';

    background-image: linear-gradient(
      to bottom,
      rgba(20, 20, 20, 0.2) 0,
      rgba(20, 20, 20, 0.2) 50%,
      rgba(20, 20, 20, 0.6) 80%,
      rgba(20, 20, 20, 0.9) 90%,
      #141414 95%,
      #141414 100%
    );
  }
`;

export const VideoWrapper = styled.iframe`
  width: 100vw;
  height: 56.25vw;
  overflow: hidden;
  pointer-events: none;
  top: 0px;
  z-index: -1;

  margin-bottom: -10vh;
`;
