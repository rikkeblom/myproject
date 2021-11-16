import { useState } from "react";

export default function Product(props) {
  console.log(props);
  const [count, setCount] = useState(0);

  function addCount() {
    setCount((previousCount) => previousCount + 1);
  }

  function removeCount() {
    setCount((previousCount) => {
      if (previousCount > 1) {
        return previousCount - 1;
      }
      return 0;
    });
  }

  return (
    <article style={{ backgroundColor: props.soldOut ? "rgba(190, 52, 70, 0.507)" : "rgba(73, 52, 190, 0.307)" }}>
      <h3>{props.productdisplayname}</h3>
      <p>
        {props.articletype} | {props.brandname}
      </p>
      <p>Price: {props.price},-</p>

      <div>
        <button onClick={removeCount}>-</button>
        <span>{count}</span>
        <button onClick={addCount}>+</button>
      </div>
    </article>
  );
}
