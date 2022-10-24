import { useSelector } from "react-redux";
import { useCart } from "../../Store/cart/cartSlice";
import Item from "../Item";

const Cart = ({ setShowCart }: any) => {
  const cart = useSelector(useCart);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.amount * item.price,
    0
  );
  return (
    <div>
      <button onClick={() => setShowCart(false)}>X</button>
      {cart.map((item) => (
        <Item key={item.id} item={item} type="cart" />
      ))}
      <span>
        <b>{totalPrice}</b>
      </span>
    </div>
  );
};

export default Cart;
