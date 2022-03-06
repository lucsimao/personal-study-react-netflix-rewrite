import Item from './item/item';
import React from 'react';
import styled from 'styled-components';

export const Items = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  margin-top: 1em;
  margin-bottom: 1em;
  color: white;
  user-select: none;
  cursor: default;
`;

export default function NavigationItems() {
  return (
    <Items data-testid="navigation-items">
      <Item href="/browse" content="Início" active={true} />
      <Item href="/browse/genre/83" content="Séries" />
      <Item href="/browse/genre/34399" content="Filmes" />
      <Item href="/latest" content="Bombando" />
      <Item href="/browse/my-list" content="Minha lista" />
    </Items>
  );
}
