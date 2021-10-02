import logo from './icon.png';
import './App.css';
import { Link } from 'react-router-dom';
import { Card, CardBody } from 'react-simple-card';
import { Component } from 'react';

class CardComponent extends Component {
  render() {
  return <Card>
      <Link to={`puzzle/` + this.props.id} className="App-dead-link">
        <div id='box'>
          <div class="item"><img src={logo} className="App-logo" alt="logo" /></div>
          <div class="item"><CardBody><b>{this.props.date}</b><br/>{this.props.name}</CardBody></div>
        </div>
      </Link>
    </Card>
  }
}

function App() {
  document.title = "Strait Across";

  return (
    <div className="App">
      <header className="App-header">
        <h2>Strait Across</h2>
        Some Singapore-based puzzles<br/>
        <br/>
        <CardComponent id="1" date="1st October 2021" name="Singapore Pools"/>
      </header>
      <body><a href="mailto:perniciousperil@gmail.com" className="App-link">Leave feedback</a></body>
    </div>
  );
}

export default App;
