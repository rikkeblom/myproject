export default function Product(props) {
  return (
    <article style={{ backgroundColor: props.product.soldOut ? "rgba(190, 52, 70, 0.507)" : "rgba(73, 52, 190, 0.307)" }}>
      <h2>{props.product.productdisplayname}</h2>
      <p>{props.product.productdescription}</p>
    </article>
  );
}
