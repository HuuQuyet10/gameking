import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from '../MenuPhai/About';
import Howtoplay from '../MenuPhai/Howtoplay';
import Bonuses from '../MenuPhai/Bonuses';
import Affiliate from '../MenuPhai/Affiliate';
import Fairness from '../MenuPhai/Fairness';
import Statistics from '../MenuPhai/Statistics';

class Routerjs extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/about" component={About} />
                    <Route exact path="/How-to-play" component={Howtoplay} />
                    <Route exact path="/bonuses" component={Bonuses} />
                    <Route exact path="/affiliate" component={Affiliate} />
                    <Route exact path="/fairness" component={Fairness} />
                    <Route exact path="/statistics" component={Statistics} />
                </div>
            </Router>
        );
    }
}

export default Routerjs;