import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';

import Header from './components/Header';
import Nav from './components/Nav';
import Projects from './components/ProjectsList';
import About from './components/About';
import Hobbies from './components/Hobbies';
import Music from './components/Music';
import Footer from './components/Footer';

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
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/music" element={<Music />} />
      </Routes>
      <Footer />
    </Router>
  </AppContainer>
);

export default App;
