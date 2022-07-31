import React from "react";
import Item from "./item";
import style from './List.module.scss';

function List() {
  const tasks = [
    {
      task: 'React',
      time:"02:00:00"
    },
    {
      task: 'Javascript',
      time:"01:00:00"
    },
    {
      task: 'Typescript',
      time:"03:00:00"
    }]
  return(
    <aside className={style.taskList}>
      <h2>Studies of the day</h2>
      <ul>
         {tasks.map((item, index) =>(
           <Item
           key={index}
            {...item}
            // task={item.task}  == o {...item} funciona dessa maneira
            // time={item.time}
           />
         ))}
      </ul>
    </aside>
  )
}
export default List;