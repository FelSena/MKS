import { useSelector } from "react-redux";
import { useCart } from "../../Store/cart/cartSlice";

const Header = () => {
  const cart = useSelector(useCart);
  const amount = cart.reduce((acc, item) => acc + item.amount, 0);

  console.log(cart);
  return (
    <div style={{ display: "flex" }}>
      <h2>MKS sistemas</h2>
      <div>
        <span>Icone</span>
        <span>{amount}</span>
      </div>
    </div>
  );
};

export default Header;
