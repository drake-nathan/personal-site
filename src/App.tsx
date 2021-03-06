import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';

import Header from './components/Header/Header';
import Projects from './components/Projects/ProjectsList';
import Home from './components/Home/Home';
import Interests from './components/Interests/Interests';
import Music from './components/Music/Music';
import Footer from './components/Footer/Footer';

const AppContainer = styled.div`
  p {
    font-size: 1.25rem;
    font-weight: 400;
  }
`;

const App = () => (
  <AppContainer>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/music" element={<Music />} />
      </Routes>
      <Footer />
    </Router>
  </AppContainer>
);

export default App;
