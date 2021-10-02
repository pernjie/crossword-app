import logo from './back.png';
import Crossword, { ThemeProvider } from './crossword_src/index';
import data from './crossword_data';
import { Link } from "react-router-dom";
import React from 'react';
import CustomPopup from './CustomPopup';
import Confetti from './Confetti';


function Puzzle(props) {
  const {id} = props.match.params
  const [isCorrect, setIsCorrect] = React.useState(false);
  
  document.title = "Puzzle: " + data[id]['puzzleName'];

  return (
    <div className="App-left">
      <Link to={`/`} className="App-link"><img src={logo} width="10" height="10"/>&nbsp;&nbsp;<span>Back</span>&nbsp;&nbsp;</Link>
      <CustomPopup/>
      <h2>{data[id]['puzzleName']} <CorrectDisplay isCorrect={isCorrect} /></h2>

      <div>
        <ThemeProvider
          theme={{
              // columnBreakpoint: '9999px',
              gridBackground: '#282c34',
              // cellBackground: '#ffe',
              // cellBorder: '#fca',
              textColor: '#222D43',
              // numberColor: '#9f9',
              focusBackground: '#FAD988',
              highlightBackground: '#FFEAB5',
          }}
          >
            <Crossword data={data[id]['data']} puzzleName={data[id]['puzzleName']} onCrosswordCorrect = {(isCrosswordCorrect) => {
              setIsCorrect(isCrosswordCorrect);
            }}/>
          </ThemeProvider>
        </div>
    </div>
  );
}

class CorrectDisplay extends React.Component {
  render() {
    if (this.props.isCorrect) {
      return (
        <span style={{color:'#0BC175'}}><Confetti/> (Complete)</span>
      );
    } else {
      return (
        <span style={{color:'#FE6E61'}}> (Incomplete)</span>
      )
    }
  }
}

export default Puzzle;
