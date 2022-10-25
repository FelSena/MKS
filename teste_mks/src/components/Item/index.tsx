import { useDispatch } from "react-redux";
import { addToCart, removeAll, removeOne } from "../../Store/cart/cartSlice";
import { Column, Row, ThemeImg, ThemeSpan } from "../../styles/globals";
import {
  AmountBox,
  AmountBtn,
  BtnCart,
  ItemBox,
  ItemOnCart,
  PriceBox,
  RemoveAll,
} from "./style";
import bag from "../assets/shopping-bag.svg";

const Item = ({ item, type }: any) => {
  const dispatch = useDispatch();
  const totalItem = item.amount * item.price;

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
      <ItemOnCart>
        <ThemeImg src={item.photo} width="50px" />
        <Row margin="0 0 0 5px">
          <ThemeSpan size="14px" weight="600">
            {item.name}
          </ThemeSpan>
        </Row>
        <Column>
          <AmountBox>
            <AmountBtn right={true} onClick={() => dispatch(removeOne(item))}>
              -
            </AmountBtn>
            <ThemeSpan size="12px" weight="400">
              {item.amount}
            </ThemeSpan>
            <AmountBtn left={true} onClick={() => dispatch(addToCart(item))}>
              +
            </AmountBtn>
          </AmountBox>
        </Column>
        <ThemeSpan weight="700" size="14px">
          R${totalItem}.00
        </ThemeSpan>
        <RemoveAll onClick={() => dispatch(removeAll(item))}>X</RemoveAll>
      </ItemOnCart>
    );
  }
};

export default Item;
