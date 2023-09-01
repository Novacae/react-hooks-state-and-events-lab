import { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  function PutIn() {
    setInCart((PutIn) => !PutIn);
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove" : "add"} onClick={PutIn}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
