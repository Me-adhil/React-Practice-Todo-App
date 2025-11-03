import React, { Component } from "react";
import "./TodoApp.css";

class TodoApp extends Component {
  state = {
    input: "",
    items: [],
  };
  handleChaneg = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  storeItem = (event) => {
    event.preventDefault();
    const { input } = this.state;
    const allItems = this.state.items;
    allItems.push(input);
    this.setState({
      items: allItems,
      input: "",
      // items:[...this.state.items,input]
    });
  };
  deleteClick = key => {
    console.log(key);
    const allItems = this.state.items;
    allItems.splice(key, 1);
    this.setState({
      items: allItems,
    });
  };
  render() {
    const { input, items } = this.state;
    console.log(items);
    return (
      <div className="todo-container">
        <h2>TODO APP</h2>
        <form onSubmit={this.storeItem} className="input-section">
          <input
            onChange={this.handleChaneg}
            value={input}
            placeholder="Enter the text"
          />
        </form>
        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data}
              <i
                class="fa-solid fa-trash-can"
                onClick={()=>this.deleteClick(index)}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default TodoApp;
