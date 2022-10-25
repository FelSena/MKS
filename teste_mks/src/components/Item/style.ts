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
