import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-content: center;
  background-color: black;
  height: 41px;
  padding: 0px 4% 0px 4%;
`;

const Logo = styled.a`
  cursor: pointer;
  content: url('https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg');
  height: 2em;
`;

export default function Header() {
  return (
    <>
      <Container>
        <Logo data-testid="netflix-logo" href="/" />
      </Container>
    </>
  );
}
