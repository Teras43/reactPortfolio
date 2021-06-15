import React from "react";
import styled from "styled-components";

/** Types */
type Props = {
  text: string;
};

/** Renders text as a header. */
const Header = ({ text }: Props) => <HeaderStyle>{text}</HeaderStyle>;

/** Styles */
const HeaderStyle = styled.div`
  width: 100%;
  height: 55px;
  position: fixed;
  font-size: 22px;
  background-color: #e4e4e4;
  box-shadow: 0px 4px 21px 0px rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  z-index: 1;
  @keyframes slideDown {
    0% {
      margin-top: 0px;
    }
    100% {
      opacity: 1;
      margin-top: 55px;
      padding: 20px;
    }
  }
  animation: 1s linear 1s 1 forwards slideDown;
`;

/** Exports */
export default Header;
