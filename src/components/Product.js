export default function Product(props) {
  function clicked(e) {
    console.log("'id " + props.product.id + "' was clicked");
  }

  return (
    <article style={{ backgroundColor: props.product.soldOut ? "rgba(190, 52, 70, 0.507)" : "rgba(73, 52, 190, 0.307)" }}>
      <h3>{props.product.productdisplayname}</h3>
      <p>{props.product.productdescription}</p>
      <button onClick={clicked}>buy now</button>
    </article>
  );
}
