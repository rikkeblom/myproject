import { useState, useRef } from "react";

export default function CheckoutForm() {
  const [name, setName] = useState("");
  const form = useRef(null);

  const nameChanged = (e) => {
    setName(e.target.value);
  };

  function onSubmit(e) {
    e.preventDefault();
    console.log(form.current.checkValidity());
  }

  return (
    <form ref={form} onSubmit={onSubmit}>
      <h3>Checkout Form</h3>
      <div>
        <label htmlFor="name">Name: </label>
        <input required type="text" onChange={nameChanged} name="name" id="name" placeholder="John Doe" value={name} />
      </div>
      <div>
        <label required htmlFor="name">
          Credit Card:{" "}
        </label>
        <input type="number" name="creditcard" id="creditcard" placeholder="3333 3333 3333 3333" />
      </div>
      <div>
        <label htmlFor="date">Date: </label>
        <input type="date" name="date" id="date" />
      </div>
      <button type="submit">Buy Now</button>
    </form>
  );
}
