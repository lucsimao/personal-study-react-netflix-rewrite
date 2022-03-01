import React from 'react';
import styled from 'styled-components';

const Container = styled.li`
  list-style-type: none;
  margin-left: 20px;
  font-family: sans-serif;
  font-size: 1.2;
  font-size: 14px;
  white-space: nowrap;
`;

const StyledItem = styled.a`
  color: white;
  text-decoration: none;
  font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

const SelectedItem = styled(StyledItem)`
  font-weight: 700;
`;

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
