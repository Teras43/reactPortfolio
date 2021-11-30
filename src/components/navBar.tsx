import { ReactNode, useCallback, useState } from "react";
import styled from "styled-components";
import * as Views from "../views";
import wallBlueImg from "../../src/assets/images/dark_blue_wall.png";
import wallYellowImg from "../../src/assets/images/dark_yellow_wall.png";
import wallRedImg from "../../src/assets/images/dark_red_wall.png";
import { BkgdTxt } from "./";

/** Navbar Types */
type NavBarItemProps = {
  /** Name of a view as a string. */
  viewName: string;
  /** Function that runs to set the current state of the view. */
  onRouteSelect: (viewName: string) => void;
  /** The boolean passed in telling the component whether or not the current route displayed is the 'selected' route / view, or currently active route / view. */
  isSelected: boolean;
  currentRoute: string;
};

type GenericProps = {
  currentRoute?: string;
};

/** Navbar - Controls displaying of the views and navigation for each view. */
const NavBar = () => {
  /** State that tells the component whether the Enter Site button has been clicked and the page needs to fully render. */
  const [loadSite, setLoadSite] = useState<boolean>(false);
  /** The variable that holds the current view to display as a header, pulled from the Views folder 'as Record<string, () => ReactNode>'.  */
  const ViewType = Views as Record<
    string,
    ({ currentRoute }: GenericProps) => ReactNode
  >;
  /** The state for the routing used in the webapp. Initialized at "Home" route. */
  const [currentRoute, setCurrentRoute] = useState<string>("Webapps");
  /** Variable that holds the object with names of each view to set up a route to. */
  const viewNames = Object.keys(Views);

  /** The function that checks the state to see if the button has been clicked to render the rest of the page. */
  const setSiteState = useCallback((boolean) => {
    setLoadSite(boolean);
    return;
  }, []);

  /** The function that accesses the Views object (imported) and maps item styling and properties on each view, to display in the Navbar in the view. */
  const getRoutes = useCallback(() => {
    /** The map on the object with each view name. */
    return viewNames.map((viewName, index) => (
      <NavBarItem
        key={index}
        onRouteSelect={setCurrentRoute}
        viewName={viewName}
        isSelected={currentRoute === viewName}
        currentRoute={currentRoute}
      ></NavBarItem>
    ));
  }, [currentRoute, viewNames]);

  return (
    <PageWrapper viewName={currentRoute}>
      <NavContainer>
        {loadSite && <NavBarStyle>{getRoutes()}</NavBarStyle>}
      </NavContainer>
      {loadSite && ViewType[currentRoute]?.({ currentRoute })}
      <BkgdTxt
        loadSite={loadSite}
        setSiteState={setSiteState}
        currentView={currentRoute}
      />
    </PageWrapper>
  );
};

/** Navbar Item component that takes the view(route) names and changes the displayed name to be a capitalized version of the view name. It applies styling and attributes for selection and routing as well. */
const NavBarItem = ({
  viewName,
  currentRoute,
  onRouteSelect,
  isSelected,
}: NavBarItemProps) => {
  const formatRouteName = useCallback(
    () => viewName.replace(/([A-Z]+)/g, " $1"),
    [viewName]
  );

  return (
    <NavBarItemStyle
      isSelected={isSelected}
      viewName={viewName}
      currentRoute={currentRoute}
      onClick={() => onRouteSelect(viewName)}
    >
      {formatRouteName()}
    </NavBarItemStyle>
  );
};

/** Accessability settings for animation. */
// @media screen and (prefers-reduced-motion) {
//   *element w/ animation here* {
//     animation: none;
//   }
// }

/** Navbar Styles */
const PageWrapper = styled.div<{ viewName: string }>`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-image: ${({ viewName }) =>
    viewName === "Webapps"
      ? `url(${wallBlueImg})`
      : viewName === "Resume"
      ? `url(${wallYellowImg})`
      : viewName === "Contact"
      ? `url(${wallRedImg})`
      : `url(${wallBlueImg})`};
  background-color: #010a01;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  text-align: center;
  font-family: "Indie Flower", cursive;
`;

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const NavBarStyle = styled.div`
  width: 100%;
  max-width: 1275px;
  height: 70px;
  position: fixed;
  font-size: 16px;
  background: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  z-index: 20;

  @media (min-width: 1275px) {
    margin: auto;
  }
`;

const NavBarItemStyle = styled.div<{
  isSelected: boolean;
  viewName: string;
  currentRoute: string;
}>`
  margin-right: 4px;
  padding-left: 18px;
  font-size: 20px;
  user-select: none;
  cursor: pointer;
  opacity: ${({ isSelected }) => (isSelected ? "1" : "0.5")};
  color: ${({ isSelected, viewName }) =>
    isSelected && viewName === "Webapps"
      ? "#FFF"
      : isSelected && viewName === "Resume"
      ? "#FFE7AD"
      : isSelected && viewName === "Contact"
      ? "#FFC9C2"
      : "#FFF"};
  text-shadow: ${({ isSelected, viewName }) =>
    isSelected && viewName === "Webapps"
      ? `0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #1b356c,
    0 0 82px #1b356c, 0 0 92px #1b356c, 0 0 102px #1b356c, 0 0 100px #1b356c`
      : isSelected && viewName === "Resume"
      ? `0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #FBAF00,
    0 0 82px #FBAF00, 0 0 92px #FBAF00, 0 0 102px #FBAF00, 0 0 151px #FBAF00`
      : isSelected && viewName === "Contact"
      ? `0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #FF3A20,
    0 0 82px #FF3A20, 0 0 92px #FF3A20, 0 0 102px #FF3A20, 0 0 151px #FF3A20`
      : "none"};
  padding-right: 18px;

  @media (min-width: 460px) {
    font-size: 28px;
  }

  @media (min-width: 865px) {
    font-size: 32px;
  }

  @media (min-width: 1200px) {
    font-size: 42px;
  }

  /** Flicker in animation on site content load for the header and currently selected NavBar path. */
  ${({ isSelected, currentRoute }) =>
    isSelected && currentRoute === "Webapps"
      ? `@keyframes flickerIn {
      0%,
      18%,
      22%,
      25%,
      53%,
      57%,
      100% {
        text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #1b356c,
          0 0 80px #1b356c, 0 0 90px #1b356c, 0 0 100px #1b356c, 0 0 150px #1b356c;
      }
      20%,
      24%,
      55% {
        text-shadow: none;
      }
    }
    animation: flickerIn 1s linear 2.5s 1 none;
    `
      : isSelected && currentRoute === "Resume"
      ? `@keyframes flickerIn {
      0%,
      18%,
      22%,
      25%,
      53%,
      57%,
      100% {
        text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #FBAF00,
          0 0 80px #FBAF00, 0 0 90px #FBAF00, 0 0 100px #FBAF00, 0 0 150px #FBAF00;
      }
      20%,
      24%,
      55% {
        text-shadow: none;
      }
    }
    animation: flickerIn 1s linear 2.5s 1 none;
    `
      : isSelected && currentRoute === "Contact"
      ? `@keyframes flickerIn {
      0%,
      18%,
      22%,
      25%,
      53%,
      57%,
      100% {
        text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #FF3A20,
          0 0 80px #FF3A20, 0 0 90px #FF3A20, 0 0 100px #FF3A20, 0 0 150px #FF3A20;
      }
      20%,
      24%,
      55% {
        text-shadow: none;
      }
    }
    animation: flickerIn 1s linear 2.5s 1 none;
    `
      : "none"}
  /* Pulsating animation for each item in the navbar. */ 
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

  /* Commented out CSS here is for a previous animation for the navbar current route highlighting that I was using. */
  /* border-bottom: ${({ isSelected }) =>
    isSelected ? "1px solid black" : "none"};
  margin-bottom: ${({ isSelected }) => (isSelected ? "8px" : "0")}; */
  /* @keyframes Bounce {
    50% {
      margin-bottom: 15px;
    }
    75% {
      margin-top: 10px;
    }
  }
  animation: Bounce 1s infinite;
  animation-play-state: paused;
  transform: rotate(0deg);
  @keyframes Reset {
    100% {
      transform: rotate(0deg);
    }
  }
  &:not(:hover) {
    animation: Reset 0.5s 1;
  }
  &:hover {
    animation-play-state: running;
  } */
`;

/** Navbar Exports */
export default NavBar;
