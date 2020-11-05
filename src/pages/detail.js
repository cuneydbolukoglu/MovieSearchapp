import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import axios from 'axios';

const API_KEY = '59669de6';

export default class detail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            imdbID: this.props.match.params.imdbid
        }
    }

    componentDidMount() {

        this.state.imdbID && (
            axios.get(`http://www.omdbapi.com/?i=${this.state.imdbID}&apikey=${API_KEY}`)
                .then(response => {
                    this.setState({ data: response.data })
                })
        )
    }

    render() {
        return (
            <div className="movie-detail">
                <Container>
                    <h1>Detail</h1>
                    <Link to="/"><span>{"< Back"}</span></Link>
                    <hr />
                    <Row>
                        <Col>
                            <figure>
                                <img src={this.state.data.Poster === 'N/A' ? 'https://placehold.it/198x264&text=Image+Not+Found' : this.state.data.Poster} alt={this.state.data.Title}></img>
                            </figure>
                        </Col>
                        <Col xl={8} >
                            <div className="detail-content">
                                <div className="title">
                                    <h2>{this.state.data.Title}</h2>
                                    <h3>{this.state.data.imdbRating}</h3>
                                </div>
                                <span>{this.state.data.Rated}</span>
                                <span>{this.state.data.Runtime}</span>
                                <span>{this.state.data.Genre}</span>
                                <p>{this.state.data.Plot}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}