import Product from "./Product.js";

export default function ProductList(props) {
  console.log(props);
  const mapped = props.products.map((product) => <Product {...product} key={product.id} />);

  return (
    <section className="productList">
      <h2 style={{ gridColumn: "1/4", marginBottom: "0" }}>Product List</h2>
      {mapped}
    </section>
  );
}
