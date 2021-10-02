import React from 'react';
import Popup from 'reactjs-popup';
import './popup.css';
import 'reactjs-popup/dist/index.css';


export default () => (
    <Popup
      trigger={<font className="App-link">Help</font>}
      modal
      nested
    >
      {close => (
        <div className="modal">
          <div className="header"> How to read clues </div>
          <div className="content">
            {' '}
            1) Answers will always follow the form of the clue (eg. singular/plural, past/present)<br/>
            2) "in short" in a clue means that the answer is abbreviated (eg. tablespoon = tbsp)<br/>
            3) "say" in a clue means as an example<br/>
            4) A question mark at the end of a clue implies some wordplay is involved
          </div>
        </div>
      )}
    </Popup>
  );
  