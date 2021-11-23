import {ThemeProvider} from 'styled-components';
import {lightTheme} from './styles/light-theme';
import {GlobalStyle} from './styles/GlobalStyles';
import Nav from './UI/Nav/Nav';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle/>
      <Nav/>
    </ThemeProvider>
  );
}

export default App;
