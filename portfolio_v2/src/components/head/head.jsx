import React from 'react';
import './head.css';
import TypedReactDemo from "../typewriter";
import "./head.css"

class Head extends React.Component {
    render() {
        return (
            <div id="header-section">
                <div id="intro">Hello My Name Is Kevin</div>
                <div id="react-root"><TypedReactDemo
                    strings={[
                        'Some <i>strings</i> are slanted',
                        'Some <strong>strings</strong> are bold',
                        'HTML characters &times; &copy;'
                    ]}
                /></div>
            </div>
        )
    }
}

export default Head;