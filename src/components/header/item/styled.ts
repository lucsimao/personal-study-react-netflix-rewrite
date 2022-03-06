import styled from 'styled-components';

export const Container = styled.li`
  list-style-type: none;
  margin-left: 20px;
  font-size: 0.88em;
  white-space: nowrap;
`;

export const StyledItem = styled.a`
  color: white;
  text-decoration: none;
  font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 300;
`;

export const SelectedItem = styled(StyledItem)`
  font-weight: 450;
`;
