import { useState } from "react";
import ReactCardFlip from "react-card-flip";

export default function Product(props) {
  // console.log(props);
  const [count, setCount] = useState(0);
  const [flipped, flipProduct] = useState(false);

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
    <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
      <article style={{ backgroundColor: props.soldout ? "rgba(190, 52, 70, 0.507)" : "rgba(73, 52, 190, 0.307)" }}>
        <h3 onClick={() => flipProduct(true)}>{props.productdisplayname}</h3>
        <div>
          {props.articletype} | {props.brandname}
        </div>
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
      <article>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum veniam, impedit nulla blanditiis officiis assumenda. Cum quae nemo recusandae, adipisci aperiam repudiandae deserunt minus autem impedit ipsam nostrum eligendi nesciunt.
      </article>
    </ReactCardFlip>
  );
}
