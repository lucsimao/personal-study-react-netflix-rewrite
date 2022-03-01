import React from 'react';
import styled from 'styled-components';

const Logo = styled.a`
  cursor: pointer;
  content: url('https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg');
  height: 2em;
`;

export default function Header() {
  return (
    <>
      <Logo data-testid="netflix-logo" href="/" />
    </>
  );
}
