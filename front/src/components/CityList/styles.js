import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  input:focus {
    .list {
      display: block;
    }
  }
`;

export const List = styled.ul`
  height: 100%;
  max-height: 70vh;

  overflow-y: scroll;

  @media (max-width: 1150px) {
    max-height: 50vh;
  }
`;

export const ListItem = styled.li`
  padding: .5em 1em;
  border-bottom: 1px solid var(--primary-color);

  cursor: pointer;
  background-color: ${({ selected }) => selected ? 'var(--gray-dark) !important' : 'transparent'};
  
  &:hover {
    background-color: var(--gray);
  }
`;
