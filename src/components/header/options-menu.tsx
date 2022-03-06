import { FaCaretDown, FaSearch } from 'react-icons/fa';
import React, { useState } from 'react';

import { IoMdNotifications } from 'react-icons/io';
import Item from './item/item';
import { Items } from './navigation-items/styled';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  right: 60px;
  display: flex;
  align-items: center;
  align-content: flex-end;
`;

const Avatar = styled.a`
  cursor: pointer;
  content: url('https://occ-0-1768-3852.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41');
  height: 2em;
  margin-left: 20px;
  border-radius: 4px;
`;

const Caret = styled(FaCaretDown)`
  fill: 'white';
  margin-left: 10px;
  transform: rotate(
    ${(props: { isHovered: boolean }) => {
      return props.isHovered ? '180deg' : '0deg';
    }}
  );
  transition: 367ms;
`;

function CaretIcon() {
  const [isHovered, setIsHovered] = useState(false);

  const hoveredIcon = (
    <>
      <Caret
        onMouseLeave={() => setIsHovered(false)}
        onMouseOver={() => setIsHovered(true)}
        size={15}
        isHovered={isHovered}
      />
    </>
  );

  return hoveredIcon;
}

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
