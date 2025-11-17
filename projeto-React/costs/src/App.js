import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/page/Home';
import Contact from './components/page/Contact';
import Company from './components/page/Company';
import NewProject from './components/page/NewProjeto';

import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <ul>
          <Link to="/">Home</Link>
          <Link to="/contacty">Contatos</Link>
          <Link to="/company">Company</Link>
          <Link to="/newproject">Novo Projeto</Link>
      </ul>
      <Container customClass="min-height">
          <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} /> 
          <Route path="/contacty" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        
          </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
