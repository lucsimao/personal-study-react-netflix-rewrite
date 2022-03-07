import { Container, List } from './styled';

import React from 'react';

const MovieList: React.FC<{ title: string }> = (props) => {
  return (
    <Container>
      <span>{props.title}</span>
      <List>{props.children}</List>
    </Container>
  );
};

export default MovieList;
