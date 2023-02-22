import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './componentes/pages/Home.js';
import Company from './componentes/pages/Company.js';
import Contact from './componentes/pages/Contact.js';
import NewProject from './componentes/pages/NewProject';
import Container from './componentes/layout/Container.js';
import Navbar from './componentes/layout/Navbar'
import Footer from './componentes/layout/Footer'
import Projects from './componentes/pages/Projects.js';
import Project from './componentes/pages/Project.js';

function App() {
  return (
    <Router>
     <Navbar/>
      <Container customClass='min-height'>
      <Routes>
        
        <Route path='/' element={<Home/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/company' element={<Company/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/newproject' element={<NewProject/>}></Route>
        <Route path='/project/:id' element={<Project/>}></Route>
      </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
