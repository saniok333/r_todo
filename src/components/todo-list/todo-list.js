import React from 'react';

import TodoListItem from '../todo-list-item'

import './todo-list.css'

const TodoList = ({ todos, onDeleted1, onToggleImportant1, onToggleDone1 }) => {

   const elements = todos.map((item) => {

      const { id, ...itemProps } = item;

      const deleteItem2 = () => {
         onDeleted1(id)
      }

      return (
         <li key={id} className="list-group-item">
            {/* <TodoListItem
               label={item.label}
               important={item.important} /> */}
            <TodoListItem {...itemProps}
               // onDeleted2={() => onDeleted1(id)} 
               onDeleted2={deleteItem2}
               onToggleImportant2={() => onToggleImportant1(id)}
               onToggleDone2={() => onToggleDone1(id)}
            />
         </li>)
   })

   return (
      <ul className="list-group todo-list">
         {elements}
      </ul>
   );
};

export default TodoList;