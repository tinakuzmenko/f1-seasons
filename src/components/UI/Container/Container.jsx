import {ContainerWrapper} from './styles';

const Container = ({className, children}) => {
  return (
    <ContainerWrapper className={className}>
      {children}
    </ContainerWrapper>
  );
};

export default Container;
