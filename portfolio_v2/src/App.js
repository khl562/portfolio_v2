import React from 'react';
import './App.css';
import Nav from './components/nav/nav';
import Head from './components/head/head';

class App extends React.Component {
  render(){
  return (
    <div>
<div id="aside"><Nav /></div>
<div id="head"><Head/></div>
</div>
  )};
}

export default App;
