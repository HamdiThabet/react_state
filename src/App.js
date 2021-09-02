import React, { Component } from 'react';
import './App.css';
import Profile from './Profile';
import img from "./img.jpg"
class App extends Component {
    constructor() {
        super();
        this.state = {
            fullName: "Thabet Hamdi",
            profession: "Ingénieur électrique",
            img,
            toggle: true
        }
    };
    toggle = () => {
        this.setState({ toggle: !this.state.toggle })
    };
    render() {
        return (
            <>
                { }
                {this.state.toggle && 
                    (<div className='composants'>
                        <Profile src={this.state.img} fullName={this.state.fullName} profession={this.state.profession} />
                    </div>
                )}
                <button className={`clickclick ${this.state.toggle ? 'success' : 'échec'}`} onClick={this.toggle}>{this.state.toggle ? 'Hide list' : 'Show list'}
                </button>
            </>
        );
    }
};
export default App;