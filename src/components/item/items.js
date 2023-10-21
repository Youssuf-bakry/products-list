import React from "react";
import Product from "./Product";

const Items = (props) => {
  const { items, del, incQuantityHandler, decQuantityHandler } = props;
  let length = items.length;

  const ListItem = length ? (
    items.map((item) => {
      return (
        <Product
          item={item}
          del={del}
          key={item.id}
          incQuantityHandler={incQuantityHandler}
          decQuantityHandler={decQuantityHandler}
        />
      );
    })
  ) : (
    <div className="text">There are no items, Try to add some.</div>
  );
  return (
    <div>
      <div className="header item">
        <p>Product</p>
        <p>Price</p>
        <p>Edit</p>
        <p>Quantity</p>
      </div>
      {ListItem}
    </div>
  );
};

export default Items;
