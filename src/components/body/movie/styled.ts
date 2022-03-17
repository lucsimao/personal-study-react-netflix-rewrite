import { IMAGE_BASE_URL } from './../../config/index';
import styled from 'styled-components';

const baseURL = IMAGE_BASE_URL;

export const MovieImage = styled.a`
  content: url(${(props: { url: string }) => baseURL + props.url});
  border-radius: 0.3vw;
  width: 13vw;
  &:hover {
    width: 14vw;
  }
`;

export const DetailedMovieImage = styled.a`
  border-radius: 5px 5px 0px 0px;
  content: url(${(props: { url: string }) => baseURL + props.url});
  width: 18vw;
`;

export const TitleContainer = styled.div`
  position: absolute;
  top: 0;
  color: #fff;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  font-size: 1.5vw;
  text-shadow: 4px 4px 8px rgb(0 0 0);
  margin-top: 0.1vw;
  font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;
