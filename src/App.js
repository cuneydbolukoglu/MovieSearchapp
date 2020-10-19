import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import { Form, Button, Container, Row, Col, Modal } from 'react-bootstrap'

const API_KEY = '59669de6';

const ColBox = ({ Title, imdbID, Poster, Type, Year }) => {

    const clickHandler = () => {

        axios.get(`http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`)
            .then(response => {
                const detail = response.data
                //this.setState({ detail });
                console.log(detail);
            })
        return (
            <div>
                {/* {
                    JSON.stringify(this.state.detal)
                } */}
                {/* { this.state.detail.map((index) =>
                <MovieDetail key={index}
                    Title={Title}
                    Poster={Poster}
                />
            )
            } */}
            </div>
        )
    }

    return (
        <div className="Box" onClick={() => clickHandler()}>
            <figure>
                <img src={Poster === 'N/A' ? 'https://placehold.it/198x264&text=Image+Not+Found' : Poster} alt={Title}></img>
            </figure>
            <h1>{Title}</h1>
            <span>{Type}</span>
            <div className="year">{Year}</div>
        </div>
    )
}

const MovieDetail = ({ Title, Poster, Type, Year, imdbRating, Rated, Runtime, Genre, Plot }) => {

    return (
        <div>
            <Modal>
                <Modal.Header>
                    <Modal.Title>{Title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <figure>
                        <img src={Poster === 'N/A' ? 'https://placehold.it/198x264&text=Image+Not+Found' : Poster} alt={Title}></img>
                    </figure>
                    <span>{Type}</span>
                    <div className="year">{Year}</div>
                    <Row>
                        <col>{imdbRating}</col>
                        <col>{Runtime}</col>
                        <col>{Rated}</col>
                        <col>{Genre}</col>
                        <col>{Plot}</col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.get(`http://www.omdbapi.com/?s=${this.state.name}&apikey=${API_KEY}`)
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

    componentDidMount() {
        axios.get(`http://www.omdbapi.com/?s='Superman'&apikey=${API_KEY}`)
            .then(response => {
                const data = response.data.Search;
                this.setState({ data });
            })
    }

    render() {
        return (
            <div className="App-movie">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Control placeholder="Search....." type="text" name="name" onChange={this.handleChange} />
                    <Button type="submit" variant="dark">Search</Button>
                </Form>
                <Container>
                    <Row>
                        {
                            this.state.data.map((data, index) =>
                                <Col xl={3} lg={3} md={6} sm={6} xs={12} key={index} >
                                    <ColBox
                                        Title={data.Title}
                                        Poster={data.Poster}
                                        Type={data.Type}
                                        Year={data.Year}
                                        imdbID={data.imdbID}
                                    />
                                </Col>
                            )
                        }
                    </Row>
                </Container>
            </div>
        )
    }
}