import {ThemeProvider} from 'styled-components';
import {lightTheme} from './styles/lightTheme';
import {GlobalStyle} from './styles/GlobalStyle';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import {getSeasons} from './api/getSeasons';
import {useEffect, useState} from 'react';

const App = () => {
  const [seasons, setSeasons] = useState();

  useEffect(() => {
    getSeasons().then((response) => setSeasons(response));
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle/>
      <Nav/>
      <Main seasons={seasons}/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
