import img from '../../../images/loader.svg';
import {LoaderImageWrapper} from './styles';

const Loader = () => {
  return (
    <>
      <LoaderImageWrapper src={img} width="50" height="50"/>
    </>
  )
};

export default Loader;
