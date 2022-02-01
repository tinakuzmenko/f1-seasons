import img from '../../../images/loader.svg';

import { LoaderImageWrapper } from './styles';

const Loader = ({ width = 50, height = 50 }) => (
  <LoaderImageWrapper
    src={img}
    width={width}
    height={height}
    alt="Loading..."
  />
);

export default Loader;
