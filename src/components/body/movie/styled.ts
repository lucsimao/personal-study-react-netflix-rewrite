import styled from 'styled-components';

const baseURL = 'https://image.tmdb.org/t/p/w200/';

export const MovieImage = styled.a`
  content: url(${(props: { url: string }) => baseURL + props.url});
  border-radius: 0.3vw;
  width: 13vw;
  &:hover {
    width: 14vw;
  }
`;
