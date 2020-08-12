import React, { Component } from 'react'
import { Accordion, Card, Container, Badge, Button, OverlayTrigger, Tooltip, ListGroup } from 'react-bootstrap' 
import NumberFormat from 'react-number-format';


const END_POINT_CONTINENTS_CASES = 'https://disease.sh/v2/countries';
class ShowContries extends Component {

    state = {
        contries: []
    };

    componentDidMount() {
        fetch(END_POINT_CONTINENTS_CASES)
            .then(res => res.json())
            .then(res => {
                // let totalCases = res.cases;
                this.setState({
                   contries: res
                });
            });
    }
    render () {
      return (
        <section id='Countries'>
            <Container>
              <h2>COUNTRIES</h2>
              <Accordion defaultActiveKey="0">   
              {this.state.contries.map(item => (
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey={item.countryInfo._id} className='headerContries'>
                    <div>
                      <img className='contriesFlag' src={item.countryInfo.flag} />
                      {item.country} 
                    </div>
                    
                    <div>
                      <OverlayTrigger
                          key='top'
                          placement='top'
                          overlay={
                            <Tooltip>
                              All cases in <strong>{item.country}</strong>
                            </Tooltip>
                          }
                        >
                        <Badge variant="info">
                          <NumberFormat value={item.cases} displayType={'text'} thousandSeparator={true} />
                        </Badge>
                      </OverlayTrigger>
                      <OverlayTrigger
                          key='top'
                          placement='top'
                          overlay={
                            <Tooltip>
                              Recovered in <strong>{item.country}</strong>
                            </Tooltip>
                          }
                        >
                        <Badge variant="success">
                          <NumberFormat value={item.recovered} displayType={'text'} thousandSeparator={true} />
                        </Badge>
                      </OverlayTrigger>
                      <OverlayTrigger
                          key='top'
                          placement='top'
                          overlay={
                            <Tooltip >
                              Deaths in <strong>{item.country}</strong>
                            </Tooltip>
                          }
                        >
                        <Badge variant="secondary">
                          <NumberFormat value={item.deaths} displayType={'text'} thousandSeparator={true} />
                        </Badge>
                      </OverlayTrigger>
                      <OverlayTrigger
                          key='top'
                          placement='top'
                          overlay={
                            <Tooltip >
                              Today's new cases in <strong>{item.country}</strong>
                            </Tooltip>
                          }
                        >
                        <Badge variant="danger">
                          <NumberFormat value={item.todayCases} displayType={'text'} thousandSeparator={true} />
                        </Badge>
                      </OverlayTrigger>
                    </div>
                    
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={item.countryInfo._id}>
                      <ListGroup variant="flush">
                        <ListGroup.Item>Total Cases: <NumberFormat value={item.cases} displayType={'text'} thousandSeparator={true} /></ListGroup.Item>
                        <ListGroup.Item>Total Recovered: <NumberFormat value={item.recovered} displayType={'text'} thousandSeparator={true} /></ListGroup.Item>
                        <ListGroup.Item>Total Deaths: <NumberFormat value={item.deaths} displayType={'text'} thousandSeparator={true} /></ListGroup.Item>
                      <ListGroup.Item>Today Cases: <NumberFormat value={item.todayCases} displayType={'text'} thousandSeparator={true} /></ListGroup.Item>
                      </ListGroup>
                  </Accordion.Collapse>
                </Card>
    
                      ))}
              </Accordion>
            </Container>
        </section>
      );
    }
  }
export default ShowContries