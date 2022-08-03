import styled from 'styled-components';

export const SectionTitleWrapper = styled.div`
  display: grid;
  width: auto;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;

  h2 {
    margin: 0;
  }

  @media (min-width: ${({ theme }) => theme.sizes.md}) {
    grid-auto-flow: column;
  }
`;
