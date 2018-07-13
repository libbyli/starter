import React from 'react';
import ReactDOM from 'react-dom';
import '../css/main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        hello world
      </div>
    );
  };
}

ReactDOM.render(<App />, document.getElementById('app'));
