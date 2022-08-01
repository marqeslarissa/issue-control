import style from "../List.module.scss";

export default function Item({task, time}: {task: string, time: string}) {
  // const {task, time} = props;
  return (
    <li className={style.Item}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  )
}


