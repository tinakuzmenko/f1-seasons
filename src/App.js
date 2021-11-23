import {ThemeProvider} from 'styled-components';
import {lightTheme} from './styles/light-theme';
import {GlobalStyle} from './styles/GlobalStyles';
import Nav from './UI/Nav/Nav';
import Footer from './UI/Footer/Footer';
import Main from './UI/Main/Main';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle/>
      <Nav/>
      <Main/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
