import { Avatar, Container } from './styled';

import CaretIcon from './caret-icon';
import { FaSearch } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import Item from '../item/item';
import { Items } from '../navigation-items/styled';
import React from 'react';

export default function OptionsMenu() {
  return (
    <Container>
      <Items data-testid="infantil-navigation">
        <FaSearch size={19} style={{ fill: 'white', marginLeft: '20px' }} />
        <Item href="/Kids" content="Infantil" />
        <IoMdNotifications
          size={29}
          style={{ strokeWidth: '10', fill: 'white', marginLeft: '20px' }}
        />
        <Avatar />
        <CaretIcon />
      </Items>
    </Container>
  );
}
