import { useDispatch } from "react-redux";
import { addToCart, removeAll, removeOne } from "../../Store/cart/cartSlice";

const Item = ({ item, type }: any) => {
  const dispatch = useDispatch();

  if (type === "store") {
    return (
      <div style={{ display: "column" }}>
        <span>{item.name}</span>
        <span>{item.price}</span>
        <button onClick={() => dispatch(addToCart(item))}>
          Adicionar ao carrinho
        </button>
      </div>
    );
  } else {
    return (
      <div style={{ display: "column" }}>
        <span>{item.name}</span>
        <button onClick={() => dispatch(removeOne(item))}>-</button>
        <span>{item.amount}</span>
        <button onClick={() => dispatch(addToCart(item))}>+</button>
        <button onClick={() => dispatch(removeAll(item))}>Remover tudo</button>
      </div>
    );
  }
};

export default Item;
