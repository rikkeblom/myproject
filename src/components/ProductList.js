import Product from "./Product.js";

export default function ProductList(props) {
  return (
    <section className="productList">
      <Product product={props.product} />
      <Product product={props.product} />
      <Product product={props.product} />
      <Product product={props.product} />
      <Product product={props.product} />
      <Product product={props.product} />
    </section>
  );
}
