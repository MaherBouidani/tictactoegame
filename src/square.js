import React from 'react';
function handleX() { 
    alert('click'); 
}
class Square extends React.Component {
    render() {
      return (
        <button className="square" onClick={handleX}>
          {this.props.value}
        </button>
      );
    }
  }

export default Square