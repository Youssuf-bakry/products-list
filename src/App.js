import "./App.css";
import React, { Component } from "react";
import Items from "./components/item/items";
import AddItem from "./components/addItem/addItem";
import Total from "./components/total/total";

class App extends Component {
  super(props) {
    this.incQuantityHandler = this.incQuantityHandler.bind(this);
    // this.calculateTotal = this.calculateTotal.bind(this);
  }
  state = {
    items: [
      { id: 1, product: "Pen", price: 2, quantity: 1 },
      { id: 2, product: "Book", price: 10, quantity: 1 },
    ],
    total: 12,
  };

  calculateTotal() {
    let calcTotal = this.state.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    this.setState({ total: calcTotal });
  }
  deleteItem = (id) => {
    let items = this.state.items;
    let i = items.findIndex((item) => item.id === id);
    items.splice(i, 1);
    this.setState({ items: items });
    this.calculateTotal();
  };

  addItem = (item) => {
    this.state.items.length > 0
      ? (item.id = this.state.items[this.state.items.length - 1].id + 1)
      : (item.id = 1);
    console.log(item.id);
    let items = this.state.items;
    items.push(item);
    this.setState({ items: items });
    this.calculateTotal();
  };

  incQuantityHandler = (i) => {
    let items = this.state.items;
    items[i - 1].quantity = items[i - 1].quantity + 1;

    // this.setState({ items: items });
    this.setState({ quantity: this.state.items[i - 1].quantity + 1 });

    this.calculateTotal();
  };
  decQuantityHandler = (i) => {
    let items = this.state.items;
    if (items[i - 1].quantity === 1) return this.deleteItem(i + 1);
    items[i - 1].quantity = items[i - 1].quantity - 1;

    this.setState({ quantity: this.state.items[i - 1].quantity - 1 });
    this.calculateTotal();
  };
  render() {
    return (
      <div className="container">
        <h1>Product List React App</h1>
        <div className="table">
          <Items
            items={this.state.items}
            del={this.deleteItem}
            incQuantityHandler={this.incQuantityHandler}
            decQuantityHandler={this.decQuantityHandler}
          />
          <AddItem add={this.addItem} />

          <Total sum={this.state.total} />
        </div>
      </div>
    );
  }
}

export default App;
