import {Routes, Route} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {lightTheme} from './styles/lightTheme';
import {GlobalStyle} from './styles/GlobalStyle';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Seasons from './components/Seasons/Seasons';
import Main from './components/UI/Main/Main';
import Drivers from './components/Drivers/Drivers';
import Teams from './components/Teams/Teams';
import Favorites from './components/Favorites/Favorites';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle/>
      <Nav/>
      <Main>
        <Routes>
          <Route path="/" element={<Seasons/>}/>
          <Route path="drivers" element={<Drivers/>}/>
          <Route path="teams" element={<Teams/>}/>
          <Route path="favorites" element={<Favorites/>}/>
        </Routes>
      </Main>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
