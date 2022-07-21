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
      <div id="app-main">
        <header>
          <comp.Hub />
          <comp.Profile />
        </header>
        <comp.Map />
        <comp.MapOptions />
        <comp.Minimap />
      </div>
    )
  }
}

export default App;