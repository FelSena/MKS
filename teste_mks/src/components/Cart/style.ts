import styled from "styled-components";

export const CartDiv = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 486px;
  max-width: 90%;
  height: 100%;
  background-color: #0f52ba;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const BtnX = styled.button`
  width: 35px;
  height: 35px;
  background: #000000;
  border-radius: 50%;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  border: none;
  @media (max-width: 767px) {
    width: 45px;
    height: 45px;
  }
`;

export const BtnBuy = styled.button`
  width: 100%;
  height: 97px;
  background: #000000;
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
  color: #fff;
  border: none;
`;

export const ColumnItems = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 10px;
  gap: 20px;
  padding: 15px 20px;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #00bfff;
    border-radius: 5px;
  }
`;
