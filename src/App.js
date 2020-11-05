import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import Header from './components/header';
import Footer from './components/footer';

import Home from './pages/home';
import Detail from './pages/detail';

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: "cuneyd"
        };
    }

    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/detail/:imdbid" component={Detail} />
                </Switch>
                <Footer />
            </Router>
        )
    }
}