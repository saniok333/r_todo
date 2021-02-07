import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter'
import ItemAddForm from '../item-add-form'

import './app.css'

export default class App extends Component {

   todoDataStart = [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 }
   ]

   maxId = this.todoDataStart.length + 1;

   state = {
      todoData: [
         ...this.todoDataStart
      ]
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
      // const newId = todoData[todoData.length - 1].id + 1;

      const newId = this.maxId++;

      const newItem = { label: text, important: false, id: newId };

      this.setState(({ todoData }) => {

         const newArray = [...todoData, newItem];

         return {
            todoData: newArray
         }
      })
   }

   toggleImportant1 = (id) => {
      console.log('Toggle Important', id);
   }

   toggleDone1 = (id) => {
      console.log('Toggle Done', id);
   }



   render() {
      const { todoData } = this.state;

      return (
         <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
               <SearchPanel />
               <ItemStatusFilter />
            </div>

            <TodoList
               todos={todoData}
               onDeleted1={this.deleteItem1}
               onToggleImportant1={this.toggleImportant1}
               onToggleDone1={this.toggleDone1} />
            <ItemAddForm
               onItemAdded={this.addItem} />
         </div>
      )
   }

}






