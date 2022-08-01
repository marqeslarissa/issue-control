import React from 'react';
import Button from '../Button';
import style from './Form.module.scss';

class Form extends React.Component {
  state = {
    task: "",
    time: "00:00:00"
  }

  addTask(evento: React.FormEvent<HTMLFormElement>){
    evento.preventDefault();
    console.log('state: ', this.state);
  }

  render() {
    return (
      <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="task">
            Add a new study
          </label>
          <input type="text" name="task" value={this.state.task} onChange={evento => this.setState({...this.state, task: evento.target.value})} id="task" placeholder="What do you want study" required />
        </div>
        <div>
          <label htmlFor="time">
            Time
          </label>
          <input type="time" name="time" value={this.state.time} onChange={evento => this.setState({ ...this.state, time: evento.target.value })} id="time" step="1" min="00:00:00" max="01:30:00" required />
        </div>
        <Button type="submit" text="Add" />
      </form>
    )
  }
}
export default Form;