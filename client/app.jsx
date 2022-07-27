import React from 'react';
import * as comp from './components';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div id="app-main">ß
        <div id="header">
          <comp.Profile />

          Div inner text
        </div>
        <div id="app-display">
          <comp.Map />
          <comp.MapOptions />
          <comp.Minimap />
        </div>

        <div id="footer">

        </div>
      </div>
    )
  }
}

export default App;