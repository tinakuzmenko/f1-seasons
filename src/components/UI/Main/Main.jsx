import {MainWrapper} from './styles';
import Container from '../Container/Container';

const Main = (props) => {
  return (
    <MainWrapper>
      <Container>
        {props.children}
      </Container>
    </MainWrapper>
  )
}

export default Main;
