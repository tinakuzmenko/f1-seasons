import {ThemeProvider} from 'styled-components';
import {lightTheme} from './styles/lightTheme';
import {GlobalStyle} from './styles/GlobalStyle';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

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
