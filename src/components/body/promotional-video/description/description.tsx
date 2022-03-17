import {
  AssistirButton,
  ButtonContainer,
  Container,
  MoreInfoButton,
  SinopsisContainer,
  TitleContainer,
} from './styled';

import { CgInfo } from 'react-icons/cg';
import { FaPlay } from 'react-icons/fa';
import { IMAGE_BASE_URL } from '../../../config';
import { Movie } from '../../../../domain/models/movie';
import React from 'react';
import styled from 'styled-components';

export const LogoImage = styled.a`
  content: url(${(props: { url: string }) => IMAGE_BASE_URL + props.url});
  height: 8em;
  width: 100%;
  position: relative;
  margin-bottom: 18px;
`;

const Description: React.FC<Movie> = (props) => {
  return (
    <Container>
      {props.logo ? (
        <LogoImage url={props.logo} />
      ) : (
        <TitleContainer>{props.title}</TitleContainer>
      )}

      <SinopsisContainer>{props.overview}</SinopsisContainer>
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
    </Container>
  );
};

export default Description;
