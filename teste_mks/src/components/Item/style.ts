import styled from "styled-components";

export const ItemBox = styled.div`
  height: 285px;
  width: 218px;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const PriceBox = styled.span`
  background: #373737;
  height: 32px;
  width: 84px;
  padding: 1px 5px;
  box-sizing: border-box;
  border-radius: 5px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 12px;
  text-align: center;
`;

export const BtnCart = styled.div`
  width: 100%;
  background: #0f52ba;
  height: 32px;
  width: 218px;
  border-radius: 0px 0px 8px 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
`;

export const ItemOnCart = styled.div`
  width: 397px;
  min-height: 95px;
  background: #ffffff;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 5px 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 767px) {
    flex-direction: column;
    width: 250px;
    min-height: 220px;
  }
`;

export const AmountBox = styled.div`
  height: 25px;
  width: 65px;
  border-radius: 4px;
  background: #ffffff;
  border: 0.3px solid #bfbfbf;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 0px;
  box-sizing: border-box;
`;

interface AmountBtn {
  left?: boolean;
  right?: boolean;
}
export const AmountBtn = styled.button<AmountBtn>`
  width: 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: ${(props) => props.right && "0.3px solid #bfbfbf"};
  border-left: ${(props) => props.left && "0.3px solid #bfbfbf"};
`;

export const RemoveAll = styled.button`
  width: 75px;
  height: 30px;
  border: none;
  background: #000;
  border-radius: 50%;
  position: relative;
  bottom: 45px;
  left: 25px;
  color: #fff;
  @media (max-width: 767px) {
    width: 30px;
    height: 30px;
    bottom: 200px;
    left: 120px;
  }
`;
