export default function Product(props) {
  return (
    <article>
      <h2>{props.product.productdisplayname}</h2>
      <p>{props.product.productdescription}</p>
    </article>
  );
}
