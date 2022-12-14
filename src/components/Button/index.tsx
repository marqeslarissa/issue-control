import React from 'react';
import style from './Button.module.scss';

class Button extends React.Component<{ text: string, type?: "button" | "submit" | "reset" | undefined }> {
  render() {
    // const estaAtivo= true; //inline style
    // const styles= {
    //   backGround: estaAtivo ? "green" : "red"
    // }
    const{type = "button"}= this.props;
    return (
      <button type={type} className={style.button}> 
        {this.props.text}
      </button>
    )
  }
}
export default Button;