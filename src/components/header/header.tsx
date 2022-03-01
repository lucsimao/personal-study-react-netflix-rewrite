import NavigationItems from './navigation-items';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  height: 68px;
  padding: 0px 60px 0px 60px;
`;

const Logo = styled.a`
  cursor: pointer;
  content: url('https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg');
  height: 1.563em;
  margin-right: 25px;
`;

export default function Header() {
  return (
    <>
      <Container>
        <Logo data-testid="netflix-logo" href="/" />
        <NavigationItems />
      </Container>
    </>
  );
}
