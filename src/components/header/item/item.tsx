import { Container, SelectedItem, StyledItem } from './styled';

import React from 'react';

export default function Item(props: {
  href: string;
  content: string;
  active?: boolean;
}) {
  return (
    <Container>
      {props.active ? (
        <SelectedItem href={props.href}>{props.content}</SelectedItem>
      ) : (
        <StyledItem href={props.href}>{props.content}</StyledItem>
      )}
    </Container>
  );
}
