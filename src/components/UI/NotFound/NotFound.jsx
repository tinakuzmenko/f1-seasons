import {Link} from 'react-router-dom';
import SectionTitle from '../SectionTitle/SectionTitle';
import {NotFoundDescriptionWrapper} from './styles';

const NotFound = () => {
  return (
    <>
      <SectionTitle>
        <h2>Oh no!</h2>
      </SectionTitle>
      <NotFoundDescriptionWrapper>The page you are looking for doesn't exist.</NotFoundDescriptionWrapper>
      <NotFoundDescriptionWrapper>
        <Link to="/">{'<< Back to seasons'}</Link>
      </NotFoundDescriptionWrapper>
    </>
  )
};

export default NotFound;
