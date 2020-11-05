import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

import Cardbox from '../components/cardbox';

const API_KEY = '59669de6';

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null
        };
    }

    componentDidMount() {
        axios.get(`http://www.omdbapi.com/?s='Superman'&apikey=${API_KEY}`)
            .then(response => {
                const data = response.data.Search;
                this.setState({ data })
            })
    }

    handleChange = (event) => {
        this.setState({ search: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        axios.get(`http://www.omdbapi.com/?s=${this.state.search}&apikey=${API_KEY}`)
            .then(response => {
                const data = response.data.Search;
                this.setState({ data });
            })
            .catch(function (error) {
                console.log(error);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="App-movie">
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Control placeholder="Search....." type="text" name="name" onChange={this.handleChange} />
                        <Button type="submit" className="btn btn-dark">Search</Button>
                    </Form>
                    <hr />
                    <Row>
                        {
                            this.state.data ? (
                                this.state.data.map((data, index) =>
                                    <Col xl={3} lg={3} md={6} sm={6} xs={12} key={index} >
                                        <Link to={`/detail/${data.imdbID}`}>
                                            <Cardbox
                                                Title={data.Title}
                                                Poster={data.Poster}
                                                Type={data.Type}
                                                Year={data.Year}
                                                imdbID={data.imdbID}
                                            />
                                        </Link>
                                    </Col>
                                )
                            ) : (
                                    <Col><span className="error">Movies not Found !</span></Col>
                                )
                        }
                    </Row>
                </Container>
            </div>
        )
    }
}