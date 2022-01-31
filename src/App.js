import {Routes, Route} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {lightTheme} from './styles/lightTheme';
import {GlobalStyle} from './styles/GlobalStyle';
import Nav from './components/UI/Nav/Nav';
import Footer from './components/UI/Footer/Footer';
import Main from './components/UI/Main/Main';
import Favorites from './components/Favorites/Favorites';
import Season from './components/Season/Season';
import Round from './components/RoundResults/RoundResults';
import NotFound from './components/UI/NotFound/NotFound';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle/>
      <Nav/>
      <Main>
        <Routes>
          <Route path="/" element={<Season/>}/>
          <Route path="seasons/:seasonId" element={<Season/>}/>
          <Route path="seasons/:seasonId/:roundId" element={<Round/>}/>
          <Route path="favorites" element={<Favorites/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Main>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
