import React from 'react';
import './head.css';
import TypedReactDemo from "../typewriter";


class Head extends React.Component {
    render() {
        return (
            <div id="header-section">
                <div id="react-root"><TypedReactDemo
                    strings={[
                        'a Developer',
                        'a Creator',
                        ' Dependant',
                        ' Flexible'
                    ]}
                /></div>
            </div>
        )
    }
}

export default Head;