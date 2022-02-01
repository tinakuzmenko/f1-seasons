import Container from '../Container/Container';

import { MainWrapper } from './styles';

const Main = props => (
  <MainWrapper>
    <Container>{props.children}</Container>
  </MainWrapper>
);

export default Main;
