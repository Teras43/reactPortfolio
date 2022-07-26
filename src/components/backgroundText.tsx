import { useCallback, useRef } from "react";
import styled from "styled-components";

/** Prop typing for the Background Text Component. */
type BkgdProps = {
  /** Prop that dictates whether to load the rest of the web page after the Enter Site button has been clicked. */
  loadSite: boolean;
  /** The function that will set the state of the site to based off the previous loadSite prop. */
  setSiteState: (boolean: any) => void;
  /** The current view displayed on the app. */
  activePageIndex?: number | undefined;
};

/** Component that displays the neon text on the background image of the site. */
const BkgdTxt = ({ setSiteState, activePageIndex }: BkgdProps) => {
  let isClicked = useRef(false);

  const EnterSiteFn = useCallback(() => {
    setSiteState(true);
    isClicked.current = true;
  }, [setSiteState]);

  return (
    <TextContainer>
      <BackgroundTextContainer
        activePageIndex={activePageIndex}
        isClicked={isClicked.current}
      >
        <WelcomeSmallTxt
          activePageIndex={activePageIndex}
          isClicked={isClicked.current}
        >
          Welcome to the website of
        </WelcomeSmallTxt>
        <NameTxt
          activePageIndex={activePageIndex}
          isClicked={isClicked.current}
        >
          Brandon Curtis
        </NameTxt>
      </BackgroundTextContainer>
      <BtnContainer>
        <EnterBtn
          isClicked={isClicked.current}
          onClick={() => EnterSiteFn()}
          data-text="Enter"
        >
          Enter
        </EnterBtn>
      </BtnContainer>
    </TextContainer>
  );
};

/** Background Text Component Styles */
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: flex-start;
  align-items: center;
  font-weight: 400;
  transition: 1s;
  opacity: 0;
  z-index: 8;

  @keyframes FadeIn {
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: FadeIn 1s linear forwards;
`;

const BackgroundTextContainer = styled.div<{
  isClicked: boolean;
  activePageIndex: number | undefined;
}>`
  border: ${({ isClicked }) =>
    isClicked ? `0.3rem solid rgba(255, 255, 255, 0.3)` : `0.3rem solid #fff`};
  border-radius: 2rem;
  padding: 0.7em;
  box-shadow: ${({ activePageIndex, isClicked }) =>
    activePageIndex === 1
      ? !isClicked
        ? `0 0 20px #fff`
        : "0 0 20px #9e9e9e"
      : activePageIndex === 0
      ? !isClicked
        ? "0 0 20px #FBAF00"
        : "0 0 20px #a27100"
      : activePageIndex === 2
      ? !isClicked
        ? "0 0 20px #FF3A20"
        : "0 0 20px #932213"
      : `0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #1b356c,
    0 0 0.8rem #1b356c, 0 0 2.8rem #1b356c, inset 0 0 1.3rem #1b356c;`};
`;

const WelcomeSmallTxt = styled.div<{
  isClicked: boolean;
  activePageIndex: number | undefined;
}>`
  opacity: ${({ isClicked }) => (isClicked ? 0.3 : 1)};
  font-family: "Dancing Script", cursive;
  font-size: 1.5em;
  color: #fff;
  margin-right: 35px;
  text-shadow: ${({ activePageIndex }) =>
    activePageIndex === 1
      ? `0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #1b356c,
    0 0 82px #1b356c, 0 0 92px #1b356c, 0 0 102px #1b356c, 0 0 151px #1b356c;`
      : activePageIndex === 0
      ? `0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #FBAF00,
    0 0 82px #FBAF00, 0 0 92px #FBAF00, 0 0 102px #FBAF00, 0 0 151px #FBAF00;`
      : activePageIndex === 2
      ? `0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #FF3A20,
    0 0 82px #FF3A20, 0 0 92px #FF3A20, 0 0 102px #FF3A20, 0 0 151px #FF3A20;`
      : `0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #1b356c,
    0 0 82px #1b356c, 0 0 92px #1b356c, 0 0 102px #1b356c, 0 0 151px #1b356c;`};

  @media (min-width: 700px) {
    font-size: 2.5em;
  }

  @media (min-width: 900px) {
    font-size: 3.5em;
  }

  @media (min-width: 1300px) {
    font-size: 4em;
  }

  @media (min-width: 1700px) {
    font-size: 4.5em;
  }

  @media (min-width: 1890px) {
    font-size: 5.5em;
  }
`;

const NameTxt = styled.div<{
  isClicked: boolean;
  activePageIndex: number | undefined;
}>`
  opacity: ${({ isClicked }) => (isClicked ? 0.65 : 1)};
  font-family: "Dancing Script", cursive;
  font-size: 4em;
  font-weight: 700;
  color: #fff;
  text-shadow: ${({ activePageIndex }) =>
    activePageIndex === 1
      ? `0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #1b356c,
    0 0 82px #1b356c, 0 0 92px #1b356c, 0 0 102px #1b356c, 0 0 151px #1b356c;`
      : activePageIndex === 0
      ? `0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #FBAF00,
    0 0 82px #FBAF00, 0 0 92px #FBAF00, 0 0 102px #FBAF00, 0 0 151px #FBAF00;`
      : activePageIndex === 2
      ? `0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #FF3A20,
    0 0 82px #FF3A20, 0 0 92px #FF3A20, 0 0 102px #FF3A20, 0 0 151px #FF3A20;`
      : `0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #1b356c,
    0 0 82px #1b356c, 0 0 92px #1b356c, 0 0 102px #1b356c, 0 0 151px #1b356c;`};

  @media (min-width: 700px) {
    font-size: 5em;
  }

  @media (min-width: 900px) {
    font-size: 6em;
  }

  @media (min-width: 1050px) {
    font-size: 7em;
  }

  @media (min-width: 1300px) {
    font-size: 9em;
  }

  @media (min-width: 1700px) {
    font-size: 10em;
  }

  @media (min-width: 1890px) {
    font-size: 11em;
  }

  @media (min-width: 2080px) {
    font-size: 12em;
  }

  @media (min-width: 2265px) {
    font-size: 13em;
  }

  @media (min-width: 2445px) {
    font-size: 14em;
  }

  @media (min-width: 2630px) {
    font-size: 15em;
  }

  /* The flicker keyframe animation is a flickering color, almost like a lightbulb going out for a split second. */
  @keyframes flicker {
    0%,
    18%,
    22%,
    25%,
    53%,
    57%,
    100% {
      text-shadow: 0 0 35px #fff;
    }
    8%,
    20%,
    24%,
    64%,
    78% {
      text-shadow: none;
    }
  }

  animation: ${({ isClicked }) =>
    !isClicked ? `flicker 3s infinite 1.2s alternate;` : `none`};
`;

const EnterBtn = styled.button<{ isClicked: boolean }>`
  opacity: ${({ isClicked }) => (isClicked ? 0 : 1)};
  font-family: "Bebas Neue", cursive;
  cursor: pointer;
  width: 200px;
  height: 45px;
  background: none;
  border: none;
  font-size: 2.5em;
  transform: rotate(-10deg);
  color: #fff;
  text-shadow: "0 0 20px #fff";

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: -2;
    opacity: 0.5;
    filter: blur(40px);
  }

  :after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 20px;
    z-index: -1;
    color: #fff;
    filter: blur(15px);
  }

  @media (min-width: 700px) {
    font-size: 3.5em;
  }

  @media (min-width: 900px) {
    font-size: 4.5em;
  }

  @media (min-width: 1050px) {
    font-size: 5.5em;
  }

  @media (min-width: 1300px) {
    font-size: 5.5em;
  }
`;

const BtnContainer = styled.div`
  margin-top: 50px;
`;

/** Background Text Component Exports */
export default BkgdTxt;
