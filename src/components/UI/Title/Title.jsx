import {TitleWrapper} from './styles';

const Title = ({title, children}) => {
  return (
    <TitleWrapper>
      <h2>{title}</h2>
      {children}
    </TitleWrapper>
  )
}

export default Title;
