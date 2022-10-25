import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}
body{
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    font-family: 'Montserrat', sans-serif;
    width: 100vw;
    height: 100vh;
    background-color: #E5E5E5;
}
a {
    text-decoration: none;
}
button {
    cursor: pointer;
}
`;

export default GlobalStyle;

export const ThemeH1 = styled.h1`
  font-weight: 600;
  font-size: 40px;
  line-height: 19px;
  color: #fff;
`;

interface SpanProps {
  weight?: string;
  size?: string;
  color?: string;
}
export const ThemeSpan = styled.span<SpanProps>`
  font-weight: ${(props) => props.weight || "300"};
  font-size: ${(props) => props.size || "20px"};
  line-height: 19px;
  color: ${(props) => props.color};
`;

export const ThemeImg = styled.img`
  width: ${(props) => props.width};
  height: auto;
`;

interface BoxProps {
  width?: string;
  height?: string;
  justify?: string;
  gap?: string;
  padding?: string;
  margin?: string;
  items?: string;
  wrap?: string;
}
export const Row = styled.div<BoxProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height};
  display: flex;
  align-items: ${(props) => props.items || "center"};
  justify-content: ${(props) => props.justify || "center"};
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  flex-wrap: ${(props) => props.wrap};
  @media (max-width: 767px) {
    justify-content: center;
  }
`;

export const Column = styled.div<BoxProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.items || "center"};
  justify-content: ${(props) => props.justify || "center"};
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  flex-wrap: ${(props) => props.wrap};
`;
