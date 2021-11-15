import "./App.css";
import Navigation from "./components/Navigation.js";
import ProductList from "./components/ProductList";
import Basket from "./components/Basket";

function App() {
  const product = {
    id: 1163,
    productdisplayname: "Round Neck Jersey",
    productdescription: "A warm cosy jersey with a stylish round neck.",
    price: 895,
    soldOut: 0,
  };

  const basket = [1, 2, 3];

  return (
    <div>
      <Navigation />
      <main>
        <ProductList product={product} />
        <Basket basket={basket} />
      </main>
    </div>
  );
}

export default App;
