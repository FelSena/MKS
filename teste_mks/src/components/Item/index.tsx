import { useDispatch } from "react-redux";
import { addToCart } from "../../Store/cart/cartSlice";
import { Product } from "../ProductsList";

const Item = ({ item }: any) => {
  const dispatch = useDispatch();
  return (
    <div style={{ display: "column" }}>
      <span>{item.name}</span>
      <span>{item.price}</span>
      <button onClick={() => dispatch(addToCart(item))}>
        Adicionar ao carrinho
      </button>
    </div>
  );
};

export default Item;
