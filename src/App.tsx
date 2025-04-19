import { Box, Container } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Education from './pages/Education';
import CodingProfiles from './pages/CodingProfiles';
import Contact from './pages/Contact';

function App() {
  return (
    <Box>
      <Navbar />
      <Box component="main">
        <Home />
        <Education />
        <Experience />
        <Projects />
        <CodingProfiles />
        {/* <Contact /> */}
      </Box>
    </Box>
  );
}

export default App;
