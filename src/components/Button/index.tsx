import React from 'react';
import './style.scss';

class Button extends React.Component {
  render() {
    // const estaAtivo= true; //inline style
    // const styles= {
    //   backGround: estaAtivo ? "green" : "red"
    // }

    return (
      <button className="button"> 
        Button
      </button>
    )
  }
}
export default Button;