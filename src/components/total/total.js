import React from "react";

const Total = ({ total, sum }) => {
  //   const { total } = props;
  //   const [total, setTotal] = useState(0);
  //   let total = 0;
  //   for (let i = 0; i < items.length; i++) {
  // total += parseFloat(items[i].price * items[i].quantity);
  //   }

  //   useEffect(() => {
  //     // Calculate the total when the component mounts

  //     total();
  //   }, [total]);
  //   console.log(items);
  //   setTotal(
  //     items.reduce((acc, item) => {
  //       return acc + item.price * item.quantity;
  //     }, 0)
  //   );
  //   setTotal((t) => t + parseFloat(items[i].price * items[i].quantity));

  return (
    <div>
      <p className="text" defaultValue={0}>
        Total Price: {sum}
      </p>
    </div>
  );
};

export default Total;
