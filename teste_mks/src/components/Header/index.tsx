import { useState } from "react";
import { useSelector } from "react-redux";
import { useCart } from "../../Store/cart/cartSlice";
import { Row, ThemeH1, ThemeImg, ThemeSpan } from "../../styles/globals";
import Cart from "../Cart";
import { CartBox, HeaderBar } from "./style";
import cartIcon from "../assets/Vector.svg";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const cart = useSelector(useCart);
  const amount = cart.reduce((acc, item) => acc + item.amount, 0);

  return (
    <HeaderBar>
      <Row items="baseline" gap="2px">
        <ThemeH1>MKS</ThemeH1>
        <ThemeSpan color="white">Sistemas</ThemeSpan>
      </Row>
      <CartBox onClick={() => setShowCart(!showCart)}>
        <ThemeImg width="18px" src={cartIcon} />
        <ThemeSpan weight="700" size="18px" color="black">
          {amount}
        </ThemeSpan>
      </CartBox>
      {showCart && <Cart setShowCart={setShowCart} />}
    </HeaderBar>
  );
};

export default Header;
