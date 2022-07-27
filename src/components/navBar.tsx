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
    <NavBarListItemStyle
      viewName={viewName}
      isSelected={isSelected}
      currentRoute={currentRoute}
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
  flex-direction: column;
`;

const NavContainer = styled.div`
  display: flex;
  position: absolute;
  top: 15%;
  left: 5%;
  text-align: left;
  z-index: 100;

  @media screen and (max-width: 1200px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    justify-content: center;
    text-align: center;
  }
`;

const NavBarStyle = styled.div`
  position: relative;
  transform: skewY(-15deg);

  @media screen and (max-width: 1200px) {
    position: static;
    transform: none;
    display: flex;
    width: 100%;
  }
`;

const NavBarListItemStyle = styled.div<{
  viewName: string;
  isSelected: boolean;
  currentRoute: string;
}>`
  position: relative;
  list-style: none;
  width: 200px;
  background: ${({ isSelected, viewName, currentRoute }) =>
    isSelected
      ? viewName === "Games"
        ? "#1b345c"
        : viewName === "Webapps"
        ? "#FBAF00"
        : "#FF3A20"
      : currentRoute === "Games"
      ? "#26293d"
      : currentRoute === "Webapps"
      ? "#3d3c26"
      : "#3d2626"};
  padding-left: 10px;
  z-index: ${({ viewName }) =>
    viewName === "Games" ? "2" : viewName === "Webapps" ? "3" : "1"};
  transition: 0.5s;
  transform: ${({ isSelected }) => (isSelected ? "translateX(50px)" : "none")};

  @media screen and (max-width: 1200px) {
    transform: none;
    z-index: 0;
    width: 100%;
    opacity: ${({ isSelected }) => (isSelected ? "1" : "0.7")};
  }

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

    @media screen and (max-width: 1200px) {
      transform: none;
    }

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

      @media screen and (max-width: 1200px) {
        background: none;
      }
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

      @media screen and (max-width: 1200px) {
        background: none;
      }
    }
  }

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: -40px;
    width: 40px;
    height: 100%;
    background: #3e3f46;
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

    @media screen and (max-width: 1200px) {
      position: static;
      transform: none;
      background: none;
    }
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

    @media screen and (max-width: 1200px) {
      position: static;
      transform: none;
      background: none;
    }
  }

  :last-child::after {
    box-shadow: -120px 120px 20px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 1200px) {
      box-shadow: none;
    }
  }
`;

const NavBarItemStyle = styled.div<{ isSelected: boolean }>`
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#999")};
  display: block;
  letter-spacing: 0.05em;
  transition: 0.5s;
  line-height: 4em;
  font-weight: 600;

  @media screen and (max-width: 1200px) {
    font-size: 20px;
    width: 100%;
  }

  :hover {
    color: #fff;
  }
`;

/** Navbar Exports */
export default NavBar;
