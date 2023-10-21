import React from "react";

function Product({ item, del, incQuantityHandler, decQuantityHandler }) {
  //   const [quantity, setQuantity] = useState(item.quantity);
  //   function incQuantityHandler() {
  //     // item.quantity++;
  //     setQuantity((q) => q + 1);
  //     console.log(quantity);
  //   }
  //   function decQuantityHandler() {
  //     if (quantity === 1) del(item.id);
  //     setQuantity((q) => q - 1);
  // console.log(quantity);
  // item.quantity--;
  //   }
  return (
    <div className="item">
      <p>{item.product}</p>
      <p>{item.price}</p>
      <p className="delete" onClick={() => del(item.id)}>
        &times;
      </p>
      <p className="buttons">
        <button onClick={() => incQuantityHandler(item.id)}>+</button>
        <span>{item.quantity}</span>
        <button onClick={() => decQuantityHandler(item.id)}>-</button>
      </p>
    </div>
  );
}

export default Product;
