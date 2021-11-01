import styled from 'styled-components';

export const Container = styled.div`
  padding: 1em;

  display: grid;
  grid-template-columns: 1fr 3fr;

  border-radius: .5em;
  box-shadow: 0 0 1em rgba(0,0,0,.5);

  @media(max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-right: 1px solid var(--primary-color);

  > p {
    margin-right: .3em;

    font-size: .7em;
    font-weight: 400;
    font-style: italic;
    text-align: right;
  }

  @media(max-width: 600px) {
    border: 0;
    border-bottom: 1px solid var(--primary-color);
  }
`;

export const Infos = styled.div`
  margin-bottom: .5em;

  display: flex;
  align-items: center;
  gap: 1em;

  span {
    font-size: 1.2em;
    font-weight: 900;
  }
`;

export const AditionalInfos = styled.div`
  p {
    margin-bottom: 1em;

    font-size: 1em;
    color: var(--primary-color);
    font-weight: 700;
  }
`;

export const DayContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Day = styled.div`
  display: flex;
  align-items: center;

  & + & {
    border-top: 1px solid var(--gray-dark);
  }
  
  > div {
    margin: 1em;

    span {
      font-weight: 700;
      color: var(--primary-color);
    }
  }

  @media(max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PrevisionContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;

  @media(max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

export const Prevision = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5em;

  border: 1px solid var(--primary-color);
  border-radius: .5em;
  padding: .3em;

  p {
    margin-bottom: .2em;

    font-size: .8em;
    font-weight: 700;
  }

  span {
    text-align: center;
  }

  @media(max-width: 750px) {
    &:first-child{
      margin-left: .5em;
    }
  }

  @media(max-width: 420px) {
    &:first-child{
      margin-left: 0;
    }
  }
`;
