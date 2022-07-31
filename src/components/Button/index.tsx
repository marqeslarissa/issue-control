import React from 'react';
import style from './Button.module.scss';

class Button extends React.Component<{ text: string }> {
  render() {
    // const estaAtivo= true; //inline style
    // const styles= {
    //   backGround: estaAtivo ? "green" : "red"
    // }

    return (
      <button className={style.button}> 
        {this.props.text}
      </button>
    )
  }
}
export default Button;