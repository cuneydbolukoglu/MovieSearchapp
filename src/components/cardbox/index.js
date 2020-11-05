import React, { Component } from 'react';

export default class Cardbox extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="cardbox">
                <figure>
                    <img src={this.props.Poster === 'N/A' ? 'https://placehold.it/198x264&text=Image+Not+Found' : this.props.Poster} alt={this.props.Title}></img>
                </figure>
                <h1>{this.props.Title}</h1>
                <span>{this.props.Type}</span>
                <div className="year">{this.props.Year}</div>
            </div>
        )
    }
}