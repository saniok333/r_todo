(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n(1),r=n(9),c=n.n(r),l=n(7),i=n(6),s=n(10),u=n(2),d=n(3),b=n(5),f=n(4),h=(n(17),function(t){var e=t.toDo,n=t.done;return Object(a.jsxs)("div",{className:"app-header d-flex",children:[Object(a.jsx)("h1",{children:"My Todo List"}),Object(a.jsxs)("h2",{children:[e," more to do, ",n," done"]})]})}),j=(n(18),function(t){Object(b.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={term:""},t.onSearchChange=function(e){t.setState({term:e.target.value}),t.props.onSearchChange(e.target.value)},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("input",{type:"text",className:"form-control search-input",placeholder:"type to search",onChange:this.onSearchChange,value:this.state.term})}}]),n}(o.Component)),m=n(11),p=(n(19),function(t){Object(b.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props,e=t.label,n=t.onDeleted2,o=t.onToggleImportant2,r=t.onToggleDone2,c=t.important,l="todo-list-item";return t.done&&(l+=" done"),c&&(l+=" important"),Object(a.jsxs)("span",{className:l,children:[Object(a.jsx)("span",{className:"todo-list-item-label",onClick:r,children:e}),Object(a.jsx)("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:o,children:Object(a.jsx)("i",{className:"fa fa-exclamation"})}),Object(a.jsx)("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:n,children:Object(a.jsx)("i",{className:"fa fa-trash-o"})})]})}}]),n}(o.Component)),g=(n(20),function(t){var e=t.todos,n=t.onDeleted1,o=t.onToggleImportant1,r=t.onToggleDone1,c=e.map((function(t){var e=t.id,c=Object(m.a)(t,["id"]);return Object(a.jsx)("li",{className:"list-group-item",children:Object(a.jsx)(p,Object(i.a)(Object(i.a)({},c),{},{onDeleted2:function(){n(e)},onToggleImportant2:function(){return o(e)},onToggleDone2:function(){return r(e)}}))},e)}));return Object(a.jsx)("ul",{className:"list-group todo-list",children:c})}),O=(n(21),function(t){Object(b.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props,e=t.filter,n=t.onFilterChange,o=this.buttons.map((function(t){var o=t.name,r=t.label,c=o===e?"btn btn-info":"btn btn-outline-secondary";return Object(a.jsx)("button",{type:"button",className:c,onClick:function(){return n(o)},children:r},o)}));return Object(a.jsx)("div",{className:"btn-group",children:o})}}]),n}(o.Component)),v=(n(22),function(t){Object(b.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={label:""},t.onLabelChange=function(e){t.setState({label:e.target.value})},t.onSubmit=function(e){e.preventDefault(),t.props.onItemAdded(t.state.label),t.setState({label:""})},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{className:"item-add-form d-flex",onSubmit:this.onSubmit,children:[Object(a.jsx)("input",{type:"text",className:"form-control",onChange:this.onLabelChange,placeholder:"What needs to be done",value:this.state.label}),Object(a.jsx)("button",{className:"btn btn-outline-secondary",children:"Add_Item"})]})}}]),n}(o.Component)),x=(n(23),function(t){Object(b.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).maxId=0,t.state={todoData:[t.createTodoItem("Drink Coffee"),t.createTodoItem("Make Awesome App"),t.createTodoItem("Have a lunch")],term:"",filter:"all"},t.deleteItem1=function(e){t.setState((function(t){return{todoData:t.todoData.filter((function(t){return t.id!==e}))}}))},t.addItem=function(e){var n=t.createTodoItem(e);t.setState((function(t){var e=t.todoData;return{todoData:[].concat(Object(s.a)(e),[n])}}))},t.toggleImportant1=function(e){t.setState((function(n){var a=n.todoData;return{todoData:t.toggleProperty(a,e,"important")}}))},t.toggleDone1=function(e){t.setState((function(n){var a=n.todoData;return{todoData:t.toggleProperty(a,e,"done")}}))},t.onSearchChange=function(e){t.setState({term:e})},t.onFilterChange=function(e){t.setState({filter:e})},t}return Object(d.a)(n,[{key:"createTodoItem",value:function(t){return{label:t,important:!1,done:!1,id:this.maxId++}}},{key:"toggleProperty",value:function(t,e,n){return t.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},Object(l.a)({},n,!t[n])):t}))}},{key:"search",value:function(t,e){return t.filter((function(t){return t.label.toLowerCase().includes(e.toLowerCase())}))}},{key:"filter",value:function(t,e){switch(e){case"all":return t;case"active":return t.filter((function(t){return!t.done}));case"done":return t.filter((function(t){return t.done}));default:return t}}},{key:"render",value:function(){var t=this.state,e=t.todoData,n=t.term,o=t.filter,r=this.filter(this.search(e,n),o),c=e.filter((function(t){return t.done})).length,l=e.length-c;return Object(a.jsxs)("div",{className:"todo-app",children:[Object(a.jsx)(h,{toDo:l,done:c}),Object(a.jsxs)("div",{className:"top-panel d-flex",children:[Object(a.jsx)(j,{onSearchChange:this.onSearchChange}),Object(a.jsx)(O,{filter:o,onFilterChange:this.onFilterChange})]}),Object(a.jsx)(g,{todos:r,onDeleted1:this.deleteItem1,onToggleImportant1:this.toggleImportant1,onToggleDone1:this.toggleDone1}),Object(a.jsx)(v,{onItemAdded:this.addItem})]})}}]),n}(o.Component));c.a.render(Object(a.jsx)(x,{}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.1e98ce3f.chunk.js.map