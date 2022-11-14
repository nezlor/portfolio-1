import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './components/pages/about.js';
import Contact from './components/pages/contact.js';
import Home from './components/pages/index.js';
import mainLogo from '../src/images/logo.svg';
import './styles/styles.scss';
import Portfolio from './components/pages/portfolio.js';
import Menu from './components/menu';



function App() {
  return (
    <>
    <Router>
    <Link to="/">
    <img src={mainLogo} alt="david nesbitt logo" className="img-fluid main-logo"/>
</Link>
<Menu/>
    <Routes>
    <Route exact path='/' element={< Home />}></Route>
    <Route exact path='/portfolio' element={< Portfolio />}></Route>
    <Route exact path='/about' element={< About />}></Route>
    <Route exact path='/contact' element={< Contact />}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
