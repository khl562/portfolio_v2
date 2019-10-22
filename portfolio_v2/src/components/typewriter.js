import React from 'react';
import Typed from 'typed.js';
import { TiDownloadOutline } from "react-icons/ti";
import { IconContext } from 'react-icons';
import '../index.css';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class TypedReactDemo extends React.Component {
    componentDidMount() {
        // If you want to pass more options as props, simply add
      // your desired props to this destructuring assignment.
      const { strings } = this.props;
      // You can pass other options here, such as typing speed, back speed, etc.
      const options = {
          strings: strings,
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 1500,
        loop: !0
      };
      // this.el refers to the <span> in the render() method
      this.typed = new Typed(this.el, options);
    }
  
    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
      // to prevent memory leaks
      this.typed.destroy();
    }
  
    render() {
      return (
        <div className="wrap">
          <h1 className="head-title" data-aos="fade-up">hi<br></br> i'm kevin</h1>
          
          <div className="type-wrap" data-aos="fade-up" data-aos-delay="50"><span>i am </span>
            <span 
              style={{ whiteSpace: 'pre' }}
              ref={(el) => { this.el = el; }}
            />
          </div><br></br>
          <IconContext.Provider value={{ className: 'head-icons' }}>
          <div data-aos="fade-up" data-aos-delay="100"><a href="google.com"><TiDownloadOutline /></a></div>
          </IconContext.Provider>
          {/* <button onClick={() => this.typed.toggle()}>Toggle</button>
          <button onClick={() => this.typed.start()}>Start</button>
          <button onClick={() => this.typed.stop()}>Stop</button>
          <button onClick={() => this.typed.reset()}>Reset</button>
          <button onClick={() => this.typed.destroy()}>Destroy</button> */}
        </div>
      );
    }
  }

  export default TypedReactDemo;
  