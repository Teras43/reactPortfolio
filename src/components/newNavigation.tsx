import { ReactNode, useState, useCallback } from "react";
import styled from "styled-components";
import * as Views from "../views";
import { Games, Webapps, Contact } from "../views";
import { BkgdTxt } from "./";
import wallBlueImg from "../../src/assets/images/dark_blue_wall.png";
import wallYellowImg from "../../src/assets/images/dark_yellow_wall.png";
import wallRedImg from "../../src/assets/images/dark_red_wall.png";

// "#3e3f46"

/** Order of pages. */
const NavOrder: Record<string, number> = {
  Webapps: 0,
  Games: 1,
  Contact: 2,
};

const Navigation = () => {
  /** State that tells the component whether the Enter Site button has been clicked and the page needs to fully render. */
  const [loadSite, setLoadSite] = useState<boolean>(false);
  const [activePageIndex, setActivePageIndex] = useState<number>(1);
  const ViewType = Views as Record<string, (viewName: any) => ReactNode>;

  const viewArray = Object.keys(ViewType).sort(
    (a, b) => NavOrder[a] - NavOrder[b]
  );

  // const renderViews = useCallback(() => {
  //   viewArray.map((viewName) =>
  //     ViewType[viewName]({ activePageIndex, viewName, viewArray })
  //   );
  // }, [activePageIndex, ViewType, viewArray]);

  /** The function that checks the state to see if the button has been clicked to render the rest of the page. */
  const setSiteState = useCallback((boolean) => {
    setLoadSite(boolean);
    return;
  }, []);

  const getRoutes = useCallback(() => {
    const allRoutes = viewArray.map((viewName) => {
      return (
        <NavBarListItemStyle
          key={Math.random()}
          activeIndex={activePageIndex}
          viewName={viewName}
          isSelected={viewArray.indexOf(viewName) === activePageIndex}
          onClick={() => setActivePageIndex(viewArray.indexOf(viewName))}
        >
          <NavBarItemStyle
            isSelected={viewArray.indexOf(viewName) === activePageIndex}
          >
            {viewName}
          </NavBarItemStyle>
        </NavBarListItemStyle>
      );
    });

    return allRoutes;
  }, [activePageIndex, viewArray]);

  return (
    <PageWrapper activeIndex={activePageIndex}>
      <NavContainer>
        {loadSite && <NavBarStyle>{getRoutes()}</NavBarStyle>}
      </NavContainer>
      {/* {loadSite && renderViews()} */}
      {loadSite && Webapps({ activePageIndex, viewArray })}
      {loadSite && Games({ activePageIndex, viewArray })}
      {loadSite && Contact({ activePageIndex, viewArray })}
      <BkgdTxt
        loadSite={loadSite}
        setSiteState={setSiteState}
        activePageIndex={activePageIndex}
      />
    </PageWrapper>
  );
};

/** Navbar Styles */
const PageWrapper = styled.div<{ activeIndex: number }>`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: ${({ activeIndex }) =>
    activeIndex === 1
      ? `url(${wallBlueImg})`
      : activeIndex === 0
      ? `url(${wallYellowImg})`
      : activeIndex === 2
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
  activeIndex: number;
  viewName: string;
  isSelected: boolean;
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
      : viewName === "Games"
      ? "#26293d"
      : viewName === "Webapps"
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
        : viewName === "Games"
        ? "#26293d"
        : viewName === "Webapps"
        ? "#3d3c26"
        : "#3d2626"};

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
        : viewName === "Games"
        ? "#26293d"
        : viewName === "Webapps"
        ? "#3d3c26"
        : "#3d2626"};

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

/** Exports */
export default Navigation;
