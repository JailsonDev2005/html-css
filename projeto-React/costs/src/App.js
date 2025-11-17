import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/page/Home';
import Contact from './components/page/Contact';
import Company from './components/page/Company';
import NewProject from './components/page/NewProjeto';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min-height">
          <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} /> 
          <Route path="/contacty" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        
          </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
