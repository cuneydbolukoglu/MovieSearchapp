import React, { Component } from 'react';
import logo from '../../assets/img/logo.svg'

export default class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <footer>
                <div className="logo-footer">
                    <figure>
                        <a target="blank" href="https://github.com/cuneydbolukoglu"><img src={logo} alt="logo"></img></a>
                    </figure>
                </div>
            </footer>
        )
    }
}