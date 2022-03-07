import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 40vw;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding: 3.1vw;
  padding-bottom: 4vh;
`;

export const AssistirButton = styled.button`
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1.5vh;
  padding-left: 2.6em;
  padding-right: 2.6em;
  appearance: none;
  border: 0px;
  border-radius: 4px;
  cursor: pointer;
  overflow: visible;

  &:hover {
    background-color: #aaaaaa;
  }
  span {
    margin-left: 14px;
    font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 1.7em;
  }
`;

export const ButtonContainer = styled.div`
  margin-bottom: 16vw;
  bottom: 0;
  display: flex;
`;

export const MoreInfoButton = styled.button`
  margin-left: 15px;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.6rem;
  padding-left: 1.8rem;
  padding-right: 1.8rem;
  appearance: none;
  border: 0px;
  border-radius: 4px;
  cursor: pointer;
  overflow: visible;
  background-color: rgba(109, 109, 110, 0.7);
  color: white;

  &:hover {
    background-color: rgba(49, 49, 50, 0.7);
  }

  span {
    margin-left: 14px;
    white-space: nowrap;
    font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 1.76em;
  }
`;

export const SinopsisContainer = styled.div`
  color: #fff;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  font-size: 1.4vw;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
  margin-top: 0.1vw;
  font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  margin-bottom: 25px;
`;

export const TitleContainer = styled.div`
  color: #fff;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  font-size: 3.5vw;
  text-shadow: 4px 4px 8px rgb(0 0 0);
  margin-top: 0.1vw;
  font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  margin-bottom: 25px;
`;
