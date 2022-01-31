import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Favorites from './components/Favorites/Favorites';
import Round from './components/RoundResults/RoundResults';
import Season from './components/Season/Season';
import Footer from './components/UI/Footer/Footer';
import Main from './components/UI/Main/Main';
import Nav from './components/UI/Nav/Nav';
import NotFound from './components/UI/NotFound/NotFound';
import { GlobalStyle } from './styles/GlobalStyle';
import { lightTheme } from './styles/lightTheme';

const App = () => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyle />
    <Nav />
    <Main>
      <Routes>
        <Route path="/" element={<Season />} />
        <Route path="seasons/:seasonId" element={<Season />} />
        <Route path="seasons/:seasonId/:roundId" element={<Round />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Main>
    <Footer />
  </ThemeProvider>
);

export default App;
