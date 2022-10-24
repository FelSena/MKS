import { useSelector } from "react-redux";
import { useCart } from "../../Store/cart/cartSlice";

const Header = () => {
  const cart = useSelector(useCart);
  console.log(cart);
  return (
    <div style={{ display: "flex" }}>
      <h2>MKS sistemas</h2>
      <div>
        <span>Icone</span>
        <span>{cart.length}</span>
      </div>
    </div>
  );
};

export default Header;
