import {LogoWrapper} from './styles';

const Logo = ({src, width, height, alt = "F1 Seasons App logo", title = "F1 Seasons App"}) => {
  return <LogoWrapper src={src} width={width} height={height} alt={alt} title={title}/>;
}

export default Logo;
