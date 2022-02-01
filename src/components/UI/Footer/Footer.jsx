import { Link } from 'react-router-dom';

import logo from '../../../images/f1-seasons-logo.svg';
import github from '../../../images/github.svg';
import linkedin from '../../../images/linkedin.svg';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import SocialLink from '../SocialLink/SocialLink';

import {
  FooterCopyright,
  FooterLayout,
  FooterSocial,
  FooterWrapper,
} from './styles';

const Footer = () => (
  <FooterWrapper>
    <Container>
      <FooterLayout>
        <Link to="/">
          <Logo src={logo} width="70" height="70" />
        </Link>
        <FooterCopyright>
          <p>&copy; Design & code by Tina Kuzmenko, 2021.</p>
        </FooterCopyright>
        <FooterSocial>
          <SocialLink
            link="https://github.com/tinakuzmenko/"
            src={github}
            alt="GitHub link"
          />
          <SocialLink
            link="https://www.linkedin.com/in/tina-kuzmenko/"
            src={linkedin}
            alt="LinkedIn link"
          />
        </FooterSocial>
      </FooterLayout>
    </Container>
  </FooterWrapper>
);

export default Footer;
