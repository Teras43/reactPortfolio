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
  /** String of the currently selected route. */
  currentRoute: string;
  /** Boolean dictating whether the view is mobile. */
  mobile: boolean;
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
  const [currentRoute, setCurrentRoute] = useState<string>("Games");
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
        mobile
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
  mobile,
}: NavBarItemProps) => {
  const formatRouteName = useCallback(
    () => viewName.replace(/([A-Z]+)/g, " $1"),
    [viewName]
  );

  return (
    <NavBarListItemStyle
      viewName={viewName}
      isSelected={isSelected}
      mobile={mobile}
    >
      <NavBarItemStyle
        // currentRoute={currentRoute}
        isSelected={isSelected}
        onClick={() => onRouteSelect(viewName)}
      >
        {formatRouteName()}
      </NavBarItemStyle>
    </NavBarListItemStyle>
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
  width: 100vw;
  height: 100vh;
  background-image: ${({ viewName }) =>
    viewName === "Games"
      ? `url(${wallBlueImg})`
      : viewName === "Webapps"
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
  padding-bottom: 50px;
`;

const NavContainer = styled.div`
  display: flex;
  position: absolute;
  top: 15%;
  left: 5%;
  text-align: left;
  z-index: 100;
`;

// const NavContainer = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
// `;

const NavBarStyle = styled.div`
  position: relative;
  transform: skewY(-15deg);
`;

// const NavBarStyle = styled.div`
//   width: 100%;
//   max-width: 1275px;
//   height: 70px;
//   position: fixed;
//   font-size: 16px;
//   background: none;
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
//   text-decoration: none;
//   z-index: 20;

//   @media (min-width: 1275px) {
//     margin: auto;
//   }
// `;

const NavBarListItemStyle = styled.div<{
  viewName: string;
  isSelected: boolean;
  mobile: boolean;
}>`
  position: relative;
  list-style: none;
  width: 200px;
  background: ${({ isSelected, viewName }) =>
    isSelected
      ? viewName === "Games"
        ? "#1b345c"
        : viewName === "Webapps"
        ? "#FBAF00"
        : "#FF3A20"
      : "#3e3f46"};
  padding-left: 10px;
  z-index: ${({ viewName }) =>
    viewName === "Games" ? "2" : viewName === "Webapps" ? "3" : "1"};
  transition: 0.5s;
  transform: ${({ isSelected }) => (isSelected ? "translateX(50px)" : "none")};

  :hover {
    background: ${({ isSelected, viewName }) =>
      isSelected
        ? viewName === "Games"
          ? "#1b345c"
          : viewName === "Webapps"
          ? "#FBAF00"
          : "#FF3A20"
        : viewName === "Games"
        ? "#1b345c"
        : viewName === "Webapps"
        ? "#FBAF00"
        : "#FF3A20"};
    transform: translateX(50px);

    ::before {
      background: ${({ isSelected, viewName }) =>
        isSelected
          ? viewName === "Games"
            ? "#1b345c"
            : viewName === "Webapps"
            ? "#FBAF00"
            : "#FF3A20"
          : viewName === "Games"
          ? "#1b345c"
          : viewName === "Webapps"
          ? "#FBAF00"
          : "#FF3A20"};
    }

    ::after {
      background: ${({ isSelected, viewName }) =>
        isSelected
          ? viewName === "Games"
            ? "#1b345c"
            : viewName === "Webapps"
            ? "#FBAF00"
            : "#FF3A20"
          : viewName === "Games"
          ? "#1b345c"
          : viewName === "Webapps"
          ? "#FBAF00"
          : "#FF3A20"};
    }
  }

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: -40px;
    width: 40px;
    height: 100%;
    background: #2e3133;
    transform-origin: right;
    transform: skewY(45deg);
    transition: 0.5s;
    background: ${({ isSelected, viewName }) =>
      isSelected
        ? viewName === "Games"
          ? "#1b345c"
          : viewName === "Webapps"
          ? "#FBAF00"
          : "#FF3A20"
        : "#3e3f46"};
  }

  ::after {
    content: "";
    position: absolute;
    top: -40px;
    left: 0;
    width: 100%;
    height: 40px;
    background: #35383e;
    transform-origin: bottom;
    transform: skewX(45deg);
    transition: 0.5s;
    background: ${({ isSelected, viewName }) =>
      isSelected
        ? viewName === "Games"
          ? "#1b345c"
          : viewName === "Webapps"
          ? "#FBAF00"
          : "#FF3A20"
        : "#3e3f46"};
  }

  :last-child::after {
    box-shadow: -120px 120px 20px rgba(0, 0, 0, 0.25);
  }
`;

const NavBarItemStyle = styled.div<{ isSelected: boolean }>`
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#999")};
  display: block;
  letter-spacing: 0.05em;
  transition: 0.5s;
  line-height: 4em;
  font-weight: 600;

  :hover {
    color: #fff;
  }
`;

// const NavBarItemStyle = styled.div<{
//   isSelected: boolean;
//   viewName: string;
//   currentRoute: string;
// }>`
//   margin-right: 4px;
//   padding-left: 18px;
//   font-size: 20px;
//   user-select: none;
//   cursor: pointer;
//   opacity: ${({ isSelected }) => (isSelected ? "1" : "0.5")};
//   color: ${({ isSelected, viewName }) =>
//     isSelected && viewName === "Games"
//       ? "#FFF"
//       : isSelected && viewName === "Webapps"
//       ? "#FFE7AD"
//       : isSelected && viewName === "Contact"
//       ? "#FFC9C2"
//       : "#FFF"};
//   text-shadow: ${({ isSelected, viewName }) =>
//     isSelected && viewName === "Games"
//       ? `0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #1b356c,
//     0 0 82px #1b356c, 0 0 92px #1b356c, 0 0 102px #1b356c, 0 0 100px #1b356c`
//       : isSelected && viewName === "Webapps"
//       ? `0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #FBAF00,
//     0 0 82px #FBAF00, 0 0 92px #FBAF00, 0 0 102px #FBAF00, 0 0 151px #FBAF00`
//       : isSelected && viewName === "Contact"
//       ? `0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #FF3A20,
//     0 0 82px #FF3A20, 0 0 92px #FF3A20, 0 0 102px #FF3A20, 0 0 151px #FF3A20`
//       : "none"};
//   padding-right: 18px;

//   @media (min-width: 460px) {
//     font-size: 28px;
//   }

//   @media (min-width: 865px) {
//     font-size: 32px;
//   }

//   @media (min-width: 1200px) {
//     font-size: 42px;
//   }
// `;

/** Navbar Exports */
export default NavBar;
