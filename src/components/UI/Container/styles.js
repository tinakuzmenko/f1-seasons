import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  min-width: ${({theme}) => theme.xs};

  @media (min-width: ${({theme}) => theme.md}) {
    padding: 0 30px;
    min-width: ${({theme}) => theme.md};
  }

  @media (min-width: ${({theme}) => theme.xl}) {
    padding: 0 40px;
    width: ${({theme}) => theme.xl};
  }
`;
