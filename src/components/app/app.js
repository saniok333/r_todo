import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter'
import ItemAddForm from '../item-add-form'

import './app.css'

export default class App extends Component {

   maxId = 0;

   state = {
      todoData: [
         this.createTodoItem('Drink Coffee'),
         this.createTodoItem('Make Awesome App'),
         this.createTodoItem('Have a lunch')
      ],
      term: '',
      filter: 'all'
   }

   createTodoItem(label) {
      return {
         label,
         important: false,
         done: false,
         id: this.maxId++
      }
   }

   deleteItem1 = (idArg) => {
      this.setState(({ todoData }) => {
         const newArray = todoData.filter((el) => el.id !== idArg)

         return {
            todoData: newArray
         }
      })
   }

   addItem = (text) => {
      const newItem = this.createTodoItem(text);

      this.setState(({ todoData }) => {

         const newArray = [...todoData, newItem];

         return {
            todoData: newArray
         }
      })
   }

   toggleProperty(arr, id, propName) {
      return arr.map((item) => {
         if (item.id === id) { return { ...item, [propName]: !item.[propName] } }
         else { return item };
      })
   }

   toggleImportant1 = (id) => {
      this.setState(({ todoData }) => {
         return {
            todoData: this.toggleProperty(todoData, id, 'important')
         }
      })
   }

   toggleDone1 = (id) => {
      this.setState(({ todoData }) => {
         return {
            todoData: this.toggleProperty(todoData, id, 'done')
         }
      })
   }

   search(tData, trm) {
      return tData.filter((el) => el.label.toLowerCase().includes(trm.toLowerCase()))
   };

   filter(items, filter) {
      switch (filter) {
         case 'all':
            return items;
         case 'active':
            return items.filter((item) => !item.done);
         case 'done':
            return items.filter((item) => item.done);
         default:
            return items;
      }
   }

   onSearchChange = (trm) => {
      this.setState({
         term: trm
      });
   }

   onFilterChange = (flt) => {
      this.setState({
         filter: flt
      });
   }




   render() {
      const { todoData, term, filter } = this.state;

      const visibleItems = this.filter(this.search(todoData, term), filter);

      const doneCount = todoData.filter((el) => el.done).length;

      const todoCount = todoData.length - doneCount;



      return (
         <div className="todo-app">
            <AppHeader toDo={todoCount} done={doneCount} />
            <div className="top-panel d-flex">
               <SearchPanel onSearchChange={this.onSearchChange} />
               <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange} />
            </div>

            <TodoList
               todos={visibleItems}
               onDeleted1={this.deleteItem1}
               onToggleImportant1={this.toggleImportant1}
               onToggleDone1={this.toggleDone1} />
            <ItemAddForm
               onItemAdded={this.addItem} />
         </div>
      )
   }

}






