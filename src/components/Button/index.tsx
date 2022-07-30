import React from 'react';
import style from './Button.module.scss';

class Button extends React.Component {
  render() {
    // const estaAtivo= true; //inline style
    // const styles= {
    //   backGround: estaAtivo ? "green" : "red"
    // }

    return (
      <button className={style.button}> 
        Button
      </button>
    )
  }
}
export default Button;