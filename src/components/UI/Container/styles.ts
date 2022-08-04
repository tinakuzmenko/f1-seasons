import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  min-width: ${({ theme }) => theme.sizes.xs};

  @media (min-width: ${({ theme }) => theme.sizes.md}) {
    padding: 0 30px;
    min-width: ${({ theme }) => theme.sizes.md};
  }

  @media (min-width: ${({ theme }) => theme.sizes.xl}) {
    padding: 0 40px;
    width: ${({ theme }) => theme.sizes.xl};
  }
`;
