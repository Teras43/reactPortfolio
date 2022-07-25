import styled from "styled-components";

/** Header Types */
type Props = {
  /** The type for the prop of the header being passed in. */
  text: string;
};

/** Renders text as a header for each view, depending on which is selected and active. */
const Header = ({ text }: Props) => (
  <HeaderStyle text={text}>{text}</HeaderStyle>
);

/** Header Styles */
const HeaderStyle = styled.div<{ text: string }>`
  width: 100%;
  height: 2em;
  overflow: hidden;
  font-size: 2em;
  background: none;
  box-sizing: border-box;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  z-index: 10;
  color: ${({ text }) =>
    text === "My games"
      ? `#FFF`
      : text === "My work"
      ? `#FFE7AD`
      : text === "Lets get in touch"
      ? `#FFC9C2`
      : "#FFF"};
  text-shadow: ${({ text }) =>
    text === "My games"
      ? `0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #1b356c,
    0 0 82px #1b356c, 0 0 92px #1b356c, 0 0 102px #1b356c, 0 0 151px #1b356c`
      : text === "My work"
      ? `0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #FBAF00,
    0 0 82px #FBAF00, 0 0 92px #FBAF00, 0 0 102px #FBAF00, 0 0 151px #FBAF00`
      : text === "Lets get in touch"
      ? `0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #FF3A20,
    0 0 82px #FF3A20, 0 0 92px #FF3A20, 0 0 102px #FF3A20, 0 0 151px #FF3A20`
      : "none"};

  @media (min-width: 460px) {
    font-size: 2.5em;
  }

  @media (min-width: 865px) {
    font-size: 2.7em;
  }

  @media (min-width: 1201px) {
    font-size: 3.5em;
  }

  @media screen and (max-width: 1200px) {
    margin-top: 100px;
  }
`;

/** Header Exports */
export default Header;
