import styled from "styled-components";

export const HeaderBar = styled.div`
  width: 100%;
  height: 101px;
  background: #0f52ba;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  box-sizing: border-box;

  @media (max-width: 767px) {
    min-height: 48px;
  }
`;

export const CartBox = styled.div`
  width: 90px;
  height: 45px;
  background: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 767px) {
    height: 26px;
  }
`;
