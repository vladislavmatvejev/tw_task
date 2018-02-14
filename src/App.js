import React, { Component } from 'react';
import PersonList from './PersonList'
import './App.css';

class App extends Component {

    render() {
        return (
            <div>
                <div className="header">
                    <h2 className="title">Address book</h2>
                </div>
                <PersonList/>
            </div>);
    }
}

export default App;
