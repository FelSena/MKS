import { useDispatch } from "react-redux";
import { addToCart, removeAll, removeOne } from "../../Store/cart/cartSlice";
import { Row, ThemeImg, ThemeSpan } from "../../styles/globals";
import { BtnCart, ItemBox, PriceBox } from "./style";
import bag from "../assets/shopping-bag.svg";

const Item = ({ item, type }: any) => {
  const dispatch = useDispatch();

  if (type === "store") {
    return (
      <ItemBox style={{ display: "column" }}>
        <ThemeImg src={item.photo} width="138px" />
        <Row items="center" justify="space-between" width="90%">
          <ThemeSpan size="16px" weight="500">
            {item.name}
          </ThemeSpan>
          <PriceBox>R${item.price}</PriceBox>
        </Row>
        <Row width="90%">
          <ThemeSpan size="10px" weight="300">
            {item.description.slice(0, 70) + "..."}
          </ThemeSpan>
        </Row>
        <BtnCart onClick={() => dispatch(addToCart(item))}>
          <ThemeImg src={bag} width="12px" />
          COMPRAR
        </BtnCart>
      </ItemBox>
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
