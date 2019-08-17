import React from 'react';

class Square extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        value: '' ,
      };
    }
    render() {
      return (
        <button className="square" onClick={() => this.setState({value: 'Y'})}>
          {this.state.value}
        </button>
      );
    }
  }

export default Square