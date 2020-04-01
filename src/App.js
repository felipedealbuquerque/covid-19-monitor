import React, {Component} from 'react';
import Header from './components/Header'
import ShowAllCases from './components/ShowAllCases'
import ShowContries from './components/ShowContries'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <ShowAllCases />
        <ShowContries />
      </div>
    );
  }
}

export default App;