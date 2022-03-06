import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding-left: 60px;
  margin-top: 15px;
  margin-bottom: 2vw;
  span {
    color: white;
    display: table-cell;
    vertical-align: bottom;
    font-size: 1.4vw;
    font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 550;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-content: flex-start;

  li {
    margin-top: 10px;
    margin-right: 8px;
  }
`;

const MovieList: React.FC<{ title: string }> = (props) => {
  return (
    <Container>
      <span>{props.title}</span>
      <List>{props.children}</List>
    </Container>
  );
};

export default MovieList;
