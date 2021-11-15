export default function MyBasket(props) {
  return (
    <div className="myBasket">
      <h2>My basket</h2>
      <p>Items in basket: {props.basket.length}</p>
    </div>
  );
}
