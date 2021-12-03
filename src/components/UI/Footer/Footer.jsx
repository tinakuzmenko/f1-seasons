import {FooterCopyright, FooterLayout, FooterSocial, FooterWrapper} from './styles';
import logo from '../../../images/f1-seasons-logo.svg';
import github from '../../../images/github.svg';
import linkedin from '../../../images/linkedin.svg';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import SocialIcon from '../SocialIcon/SocialIcon';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterLayout>
          <Link to="/">
            <Logo src={logo} size='70'/>
          </Link>
          <FooterCopyright>
            <p>&copy; Design & code by Tina Kuzmenko, 2021.</p>
          </FooterCopyright>
          <FooterSocial>
            <SocialIcon
              link={"https://github.com/tinakuzmenko/"}
              img={github}
              alt={"GitHub link"}
            />
            <SocialIcon
              link={"https://www.linkedin.com/in/tina-kuzmenko/"}
              img={linkedin}
              alt={"LinkedIn link"}
            />
          </FooterSocial>
        </FooterLayout>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
