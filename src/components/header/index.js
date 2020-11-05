import React, { Component } from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            menu : []
        }
    }

    render (){
        return (
            <header>
               <h1> Movie Search App </h1>
            </header>
        )
    }
}