import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: .5em 5%;
  
  background-color: var(--gray);

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: var(--primary-color);
    font-weight: 700;
    font-size: 1.2em;

    display: flex;
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 4.5em;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 2em;

  button {
    display: flex;
    align-items: center;
    gap: .5em;
  
    cursor: pointer;
    color: var(--error-color);
    font-weight: 700;
  }
`;
