import { FaCaretDown } from 'react-icons/fa';
import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 60px;
  display: flex;
  align-items: center;
  align-content: flex-end;
`;

export const Avatar = styled.a`
  cursor: pointer;
  content: url('https://occ-0-1768-3852.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41');
  height: 2em;
  margin-left: 20px;
  border-radius: 4px;
`;

export const Caret = styled(FaCaretDown)`
  fill: 'white';
  margin-left: 10px;
  transform: rotate(
    ${(props: { isHovered: boolean }) => {
      return props.isHovered ? '180deg' : '0deg';
    }}
  );
  transition: 367ms;
`;
