import React from 'react';
import BigKanban from './comps/BigKanban.jsx';
require("./scss/styles.scss");

class App extends React.Component {
  render() {
    return (
      <div>
        <BigKanban />
      </div>
    )
  }
}

export default App;
