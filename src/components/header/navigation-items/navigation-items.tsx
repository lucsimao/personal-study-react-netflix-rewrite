import Item from '../item/item';
import { Items } from './styled';
import React from 'react';

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
