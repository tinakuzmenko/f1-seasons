import { FC, PropsWithChildren } from 'react';

import Container from '../Container/Container';

import { MainWrapper } from './styles';

const Main: FC<PropsWithChildren> = ({ children }) => (
  <MainWrapper>
    <Container>{children}</Container>
  </MainWrapper>
);

export default Main;
