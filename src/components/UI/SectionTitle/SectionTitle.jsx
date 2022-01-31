import {SectionTitleWrapper} from './styles';

const SectionTitle = ({title, children}) => {
  return (
    <SectionTitleWrapper>
      <h2>{title}</h2>
      {children}
    </SectionTitleWrapper>
  )
}

export default SectionTitle;
