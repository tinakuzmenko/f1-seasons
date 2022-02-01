import { ContainerWrapper } from './styles';

const Container = ({ className, children }) => (
  <ContainerWrapper className={className}>{children}</ContainerWrapper>
);

export default Container;
