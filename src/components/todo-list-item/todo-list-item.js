// import React from 'react';
import React, { Component } from 'react';

import './todo-list-item.css'

// const TodoListItem = ({ label, important = false }) => {
//    const style = {
//       color: important ? 'steelblue' : 'black',
//       fontWeight: important ? 'bold' : 'normal'
//    };
//    return (
//       <span className="todo-list-item">
//          <span
//             className="todo-list-item-label"
//             style={style}>
//             {label}
//          </span>

//          <button type="button"
//             className="btn btn-outline-success btn-sm float-right">
//             <i className="fa fa-exclamation" />
//          </button>

//          <button type="button"
//             className="btn btn-outline-danger btn-sm float-right">
//             <i className="fa fa-trash-o" />
//          </button>
//       </span>
//    )
// };

export default class TodoListItem extends Component {

   render() {

      const { label, onDeleted2, onToggleImportant2, onToggleDone2, important, done } = this.props;

      let classNames = 'todo-list-item';
      if (done) {
         classNames += ' done';
      }
      if (important) {
         classNames += ' important';
      }

      return (
         <span className={classNames}>
            <span
               className="todo-list-item-label"
               onClick={onToggleDone2}>
               {label}
            </span>

            <button type="button"
               className="btn btn-outline-success btn-sm float-right"
               onClick={onToggleImportant2}>
               <i className="fa fa-exclamation" />
            </button>

            <button type="button"
               className="btn btn-outline-danger btn-sm float-right"
               onClick={onDeleted2}>
               <i className="fa fa-trash-o" />
            </button>
         </span>
      )
   }
}

// export default TodoListItem;









