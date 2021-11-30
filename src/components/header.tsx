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
  position: fixed;
  font-size: 2em;
  background: none;
  box-sizing: border-box;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  z-index: 10;
  color: ${({ text }) =>
    text === "My work"
      ? `#FFF`
      : text === "My resume"
      ? `#FFE7AD`
      : text === "Lets get in touch"
      ? `#FFC9C2`
      : "#FFF"};
  text-shadow: ${({ text }) =>
    text === "My work"
      ? `0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #1b356c,
    0 0 82px #1b356c, 0 0 92px #1b356c, 0 0 102px #1b356c, 0 0 151px #1b356c`
      : text === "My resume"
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

  @media (min-width: 1200px) {
    font-size: 3.5em;
  }

  /** Flicker in animation on site content load. */
  @keyframes flickerIn {
    0%,
    18%,
    22%,
    25%,
    53%,
    57%,
    100% {
      text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #e6af2e,
        0 0 80px #e6af2e, 0 0 90px #e6af2e, 0 0 100px #e6af2e, 0 0 150px #e6af2e;
    }
    20%,
    24%,
    55% {
      text-shadow: none;
    }
  }
  /* animation: flickerIn 1s linear 0s 1 forwards; */

  /* Keyframe animation for the slide down effect on page load. */
  @keyframes slideDown {
    0% {
      margin-top: 0px;
    }
    100% {
      opacity: 1;
      margin-top: 45px;
      padding: 10px;
    }
  }
  /* animation: slideDown 1s linear 0s 1 forwards; */

  /* Animation for neon light pulsate effect. */
  @keyframes pulsate {
    100% {
      /* Larger blur radius */
      text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #e6af2e,
        0 0 80px #e6af2e, 0 0 90px #e6af2e, 0 0 100px #e6af2e, 0 0 150px #e6af2e;
    }
    0% {
      /* A slightly smaller blur radius */
      text-shadow: 0 0 4px #fff, 0 0 10px #fff, 0 0 18px #fff, 0 0 38px #e6af2e,
        0 0 73px #e6af2e, 0 0 80px #e6af2e, 0 0 94px #e6af2e, 0 0 140px #e6af2e;
    }
  }
  /* pulsate 0.11s ease-in-out infinite alternate; */
`;

/** Header Exports */
export default Header;
