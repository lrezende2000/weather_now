import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1em;
  padding-bottom: .5em;
  border-bottom: 2px solid var(--primary-color);

  & + & {
    margin-top: 1.5em;
  }
`;

export const Input = styled.input`
  width: 100%;

  font-size: 0.9em;
  color: black;

  &::placeholder {
    text-transform: capitalize;
  }
`;
