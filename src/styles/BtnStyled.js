import styled from "styled-components";
import { pizzaRed } from "./colors";

export const BtnStyled = styled.button`
  display: block;
  width: 100%;
  padding: 15px;
  background-color: ${pizzaRed};
  color: white;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
`;
