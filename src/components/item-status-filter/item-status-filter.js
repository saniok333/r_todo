// import React from 'react';
import React, { Component, component } from 'react';

import './item-status-filter.css'

// const ItemStatusFilter = () => {
//    return (
//       <div className="btn-group">
//          <button type="button"
//             className="btn btn-info">All</button>
//          <button type="button"
//             className="btn btn-outline-secondary">Active</button>
//          <button type="button"
//             className="btn btn-outline-secondary">Done</button>
//       </div>

//    )
// }

export default class ItemStatusFilter extends Component {

   buttons = [
      { name: 'all', label: 'All' },
      { name: 'active', label: 'Active' },
      { name: 'done', label: 'Done' }
   ]




   render() {

      const { filter, onFilterChange } = this.props;


      const tagButtons = this.buttons.map(({ name, label }) => {

         let classNames = (name === filter) ? 'btn btn-info' : 'btn btn-outline-secondary';

         return (
            <button key={name}
               type="button"
               className={classNames}
               onClick={() => onFilterChange(name)} >
               {label}
            </button>
         )

      })

      return (
         <div className="btn-group" >
            {tagButtons}
         </div>
      )
   }
}

// export default ItemStatusFilter;