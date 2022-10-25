import { useSelector } from "react-redux";
import { useCart } from "../../Store/cart/cartSlice";
import { Column, Row, ThemeSpan } from "../../styles/globals";
import Item from "../Item";
import { BtnX, CartDiv, BtnBuy, ColumnItems } from "./style";

const Cart = ({ setShowCart }: any) => {
  const cart = useSelector(useCart);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.amount * item.price,
    0
  );

  return (
    <CartDiv>
      <Row justify="space-between" width="90%" padding="15px 0">
        <ThemeSpan size="27px" weight="600" color="white">
          Carrinho de compras
        </ThemeSpan>
        <BtnX onClick={() => setShowCart(false)}>X</BtnX>
      </Row>
      <ColumnItems>
        {cart.map((item) => (
          <Item key={item.id} item={item} type="cart" />
        ))}
      </ColumnItems>
      <Column gap="15px">
        <Row width="80%" justify="space-between">
          <ThemeSpan size="28px" weight="600" color="white">
            Total:
          </ThemeSpan>
          <ThemeSpan size="28px" weight="600" color="white">
            R${totalPrice}.00
          </ThemeSpan>
        </Row>
        <BtnBuy>Finalizar Compra</BtnBuy>
      </Column>
    </CartDiv>
  );
};

export default Cart;
