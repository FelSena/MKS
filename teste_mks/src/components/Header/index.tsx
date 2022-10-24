import { useState } from "react";
import { useSelector } from "react-redux";
import { useCart } from "../../Store/cart/cartSlice";
import Cart from "../Cart";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const cart = useSelector(useCart);
  const amount = cart.reduce((acc, item) => acc + item.amount, 0);

  return (
    <div style={{ display: "flex" }}>
      <h2>MKS sistemas</h2>
      <div onClick={() => setShowCart(!showCart)}>
        <span>Icone</span>
        <span>{amount}</span>
      </div>
      {showCart && <Cart setShowCart={setShowCart} />}
    </div>
  );
};

export default Header;
