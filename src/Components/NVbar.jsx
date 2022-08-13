import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function NVbar() {
  return (
    <>
 <header id="header" className="fixed-top d-flex align-items-center background">
    <div className="container d-flex align-items-center background">
      
    <a href="index.html" className="logo"><img src="/images/Calendly-Logo.jpeg" alt="" /></a>
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><a className="nav-link scrollto active"><Nav.Link><Link to="/">Home</Link></Nav.Link></a></li>
          <li><a className="nav-link scrollto active"><Nav.Link><Link to="/Individuals">Individuals</Link></Nav.Link></a></li>
          <li><a className="nav-link scrollto active"><Nav.Link><Link to="/Teams">Home</Link></Nav.Link></a></li>
          <li><a className="nav-link scrollto active"><Nav.Link><Link to="/Enterprise">Enterprise</Link></Nav.Link></a></li>
         
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <a href="#about" className="get-started-btn scrollto">Get Started</a>
    </div>
  </header>
    </>
  )
}

export default NVbar;