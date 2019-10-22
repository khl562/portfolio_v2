import React from 'react';
import './App.css';
import Nav from './components/nav/nav';
import Head from './components/head/head';
import About from './components/about/about';

class App extends React.Component {
  render(){
  return (
    <div className="container">
<div id="aside"><Nav /></div>
<div id="head"><Head/></div><br></br>
<div id="about"><About/></div>
</div>
  )};
}

export default App;
