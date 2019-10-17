import React from 'react';
import author from './author.png';
import './nav.css';
import { TiDeviceLaptop } from 'react-icons/ti';
import { TiDevicePhone } from 'react-icons/ti';
import { TiSocialGithub } from 'react-icons/ti';
import { TiSocialLinkedin } from 'react-icons/ti';
import { TiSocialInstagram } from 'react-icons/ti';
import { TiSocialFacebook } from 'react-icons/ti';
import { IconContext } from 'react-icons';



class Nav extends React.Component {
  render() {
    return (
      
      <div className="Nav">
        <IconContext.Provider value={{ className: 'react-icons' }}>
          <nav href="#navbar" className=""></nav>
          <aside className="">
              <div className="text-center">
              <div className="author-img"><img src={author} alt="author-img"/></div>
                <h1 className="name"><a href="index.html">Kevin Lee</a></h1>
                <div className="email"><TiDeviceLaptop /> kevinleehyun@gmail.com</div>
                <div className="phone-number"><TiDevicePhone /> 562 405-2820</div>
              </div>
              <nav role="navigation" className="navbar">
                <div id="navbar" className="collapse text-center">
                  <ul>
                    <li className="active"><a href="#home" data-nav-section="home">INTRODUCTION</a></li>
                    <li><a href="#about" data-nav-section="about">ABOUT</a></li>
                    <li><a href="#timeline" data-nav-section="timeline">TIMELINE</a></li>
                  </ul>
                </div>
              </nav>
              <nav id="main-menu">
                <ul>
                <li><a href="https://www.facebook.com/dhruv.barochia" target="_blank" rel="noopener noreferrer"><TiSocialFacebook /></a></li>
                  <li><a href="https://www.instagram.com/ddbarochiya/" target="_blank" rel="noopener noreferrer"><TiSocialInstagram /></a></li>
                  <li><a href="https://www.linkedin.com/in/dhruv-b-545b52a9/" target="_blank" rel="noopener noreferrer"><TiSocialLinkedin /></a></li>
                  <li><a href="https://github.com/Dhruv34788" target="_blank" rel="noopener noreferrer"><TiSocialGithub/></a></li>
                </ul>
              </nav>
          </aside>
          </IconContext.Provider>
      </div>
    )};
}

export default Nav;
