import React from 'react';
// import logo from './logo.svg';
import './nav.css';

function Nav() {
  return (
    <div className="Nav">
        <nav href="#navbar" className=""></nav>
        <aside className="">
            <div className="text-center">
              <div className="author-img"></div>
              <h1><a href="index.html">Kevin Lee</a></h1>
              <span className="email">kevinleehyun@gmail.com</span>
            </div>
            <nav role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="main-menu">
              <ul>
              <li><a href="https://www.facebook.com/dhruv.barochia" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://twitter.com/ddbarochiya" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                <li><a href="https://www.instagram.com/ddbarochiya/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/dhruv-b-545b52a9/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/Dhruv34788" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://medium.com/@dhruv.barochia34788" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li>
              </ul>
            </nav>
        </aside>
    </div>
  );
}

export default Nav;
