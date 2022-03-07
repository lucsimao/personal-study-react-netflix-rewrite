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
import React from 'react';

const Description: React.FC<{ title: string; sinopsys: string }> = (props) => {
  return (
    <Container>
      <TitleContainer>{props.title}</TitleContainer>
      <SinopsisContainer>{props.sinopsys}</SinopsisContainer>
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
