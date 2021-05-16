import React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './NavBar.css';
// import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
const NavBar = () => {
    return (
        <Navbar  className="navbar-fixed topnav"collapseOnSelect expand="lg" sticky='top' variant="light">
        <Navbar.Brand href="/home"><strong className="px-4">Sourav Das Shovon</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav  className="ml-auto mr-auto">
          <Link smooth className="nav-link px-4 text-white " to="#home">Home</Link>
                            <Link smooth className="nav-link px-4 text-white " to="#about">About</Link>
                            <Link smooth className="nav-link px-4 text-white " to="#resume">Resume</Link>
                            
                            <Link smooth className="nav-link px-4 text-white " to="#projects">Projects</Link>
                            <Link smooth className="nav-link px-4 text-white " to="#blog">Blog</Link>
                            <Link smooth className="nav-link px-4 text-white " to="#skills">Skills</Link>
                            <Link smooth className="nav-link px-4 text-white " to="#services">Services</Link>
                            <Link smooth className="nav-link px-4 text-white " to="#contact">Contact</Link>
                           
                            {/* <ul className="social-media-nav list-inline">
                            <li className="list-inline-item"><a href="https://www.facebook.com/kbutsho" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="https://www.facebook.com/kbutsho" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                            <li className="list-inline-item"><a href="https://www.linkedin.com/in/kbutsho " target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faLinkedin} /></a></li>
                            <li className="list-inline-item"><a href="https://github.com/Kbutsho" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faGithub} /></a></li>
                        </ul> */}

          <NavDropdown title="Find More" id="collasible-nav-dropdown ">
              {/* <NavDropdown.Item target="_blank"   href="https://www.linkedin.com/in/avi-mistry-52232a132/">Linkedin</NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://github.com/Avimistry4800">Github</NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://twitter.com/Avi_mistry48/">Twitter</NavDropdown.Item> */}
               <ul className="social-media-nav list-inline">
                            <li className="list-inline-item"><a href="https://www.facebook.com/souravdas.shovon/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="https://www.instagram.com/sourav_shovon/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                            <li className="list-inline-item"><a href="https://www.linkedin.com/in/sourav-das-shovon-1b124813a/ " target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faLinkedin} /></a></li>
                            <li className="list-inline-item"><a href="https://github.com/svn5969" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faGithub} /></a></li>
                        </ul>
            </NavDropdown>
            
            

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default NavBar;