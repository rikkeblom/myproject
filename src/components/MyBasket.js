export default function MyBasket(props) {
  const inititalValue = 0;
  let sum = props.basket.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.price;
  }, inititalValue);

  return (
    <div className="myBasket">
      <h2>My basket</h2>
      <p>Items in basket: {props.basket.length}</p>
      <p>Total: {sum} DKK</p>
    </div>
  );
}
