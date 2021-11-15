import MyBasket from "./MyBasket";
import CheckoutForm from "./CheckoutForm";

export default function Basket(props) {
  return (
    <section className="basket">
      <MyBasket basket={props.basket} />
      <CheckoutForm />
    </section>
  );
}
