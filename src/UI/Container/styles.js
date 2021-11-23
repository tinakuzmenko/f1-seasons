import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  margin: 0 auto;
  padding: 0 10px;
  width: ${({theme}) => theme.xs};

  @media (min-width: ${({theme}) => theme.md}) {
    padding: 0 20px;
    width: ${({theme}) => theme.md};
  }

  @media (min-width: ${({theme}) => theme.xl}) {
    padding: 0 30px;
    width: ${({theme}) => theme.xl};
  }
`;
