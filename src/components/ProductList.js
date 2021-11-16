import Product from "./Product.js";

export default function ProductList(props) {
  return (
    <section className="productList">
      <h2 style={{ gridColumn: "1/4", marginBottom: "0" }}>Product List</h2>
      <Product product={props.product} />
      <Product product={props.product} />
      <Product product={props.product} />
      <Product product={props.product} />
      <Product product={props.product} />
      <Product product={props.product} />
    </section>
  );
}
