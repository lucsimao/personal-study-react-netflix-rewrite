import styled from 'styled-components';

const baseURL = 'https://image.tmdb.org/t/p/w355_and_h200_multi_faces/';

export const MovieImage = styled.a`
  content: url(${(props: { url: string }) => baseURL + props.url});
  border-radius: 0.3vw;
  width: 15vw;
  &:hover {
    width: 18vw;
  }
`;
