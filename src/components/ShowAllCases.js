import React, {Component} from 'react'
import {Card, Container} from 'react-bootstrap' 
import NumberFormat from 'react-number-format';
import { FaGlobeAmericas, FaUserAstronaut, FaUserInjured, FaSpinner } from "react-icons/fa";


// const END_POINT_GLOBAL_CASES = 'https://corona.lmao.ninja/all';
class ShowAllCases extends Component {

    // let totalCases = 0;
    state = {
        totalCases: '',
        totalDeaths: '',
        totalRecovered: '',
    };

    componentDidMount() {
        fetch('https://corona.lmao.ninja/all')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    totalCases: res.cases,
                    totalDeaths: res.deaths,
                    totalRecovered: res.recovered,
                });
            });
    }
    render () {
      return (
        <section className='sectionAllCases' id='globalNumbers'>
            <Container>
                <h2>GLOBAL NUMBERS</h2>
                <div className='allCases'>
                    <Card bg='info' text='white'>
                        <Card.Body>
                            <FaGlobeAmericas className='iconsAllCases' />
                            <Card.Title className='casesTitle'>
                                Total Cases
                            </Card.Title>
                            <Card.Text>
                                {!this.state.totalCases ? <FaSpinner className='spinner' /> : <NumberFormat value={this.state.totalCases} displayType={'text'} thousandSeparator={true} className='casesResult' />}
                            </Card.Text>
                            <Card.Text>
                                Global confirmed cases
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card bg='success' text='white'>
                        <Card.Body>
                            <FaUserAstronaut className='iconsAllCases' />
                            <Card.Title className='casesTitle'>
                                Recovered
                            </Card.Title>
                            <Card.Text>
                                {!this.state.totalRecovered ? <FaSpinner className='spinner' /> : <NumberFormat value={this.state.totalRecovered} displayType={'text'} thousandSeparator={true} className='casesResult' />}
                            </Card.Text>
                            <Card.Text>
                                Global recovered cases
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card bg='secondary' text='white'>
                        <Card.Body>
                            <FaUserInjured className='iconsAllCases' />
                            <Card.Title  className='casesTitle'>
                                DEATHS
                            </Card.Title>
                            <Card.Text>
                                {!this.state.totalDeaths ? <FaSpinner className='spinner' /> : <NumberFormat value={this.state.totalDeaths} displayType={'text'} thousandSeparator={true} className='casesResult' />}
                            </Card.Text>
                            <Card.Text>
                                Global Deaths
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </section>
      );
    }
  }
export default ShowAllCases