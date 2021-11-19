import { useState } from "react";

export default function Product(props) {
  // console.log(props);
  const [count, setCount] = useState(0);

  function addCount() {
    setCount((previousCount) => previousCount + 1);
    props.addToBasket({
      productdisplayname: props.productdisplayname,
      id: props.id,
      price: props.price,
    });
  }

  function removeCount() {
    setCount((previousCount) => {
      if (previousCount > 1) {
        return previousCount - 1;
      }
      return 0;
    });
  }

  const buttonState = props.soldout ? "soldOut" : "";

  return (
    <article style={{ backgroundColor: props.soldout ? "rgba(190, 52, 70, 0.507)" : "rgba(73, 52, 190, 0.307)" }}>
      <h3>{props.productdisplayname}</h3>
      <p>
        {props.articletype} | {props.brandname}
      </p>
      <p>Price: {props.price},-</p>
      <div>
        <button className={buttonState} disabled={props.soldout} onClick={removeCount}>
          -
        </button>
        <span>{count}</span>
        <button className={buttonState} disabled={props.soldout} onClick={addCount}>
          +
        </button>
      </div>
    </article>
  );
}
