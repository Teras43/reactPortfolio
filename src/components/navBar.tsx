import React, { ReactNode, useCallback, useState } from "react";
import styled from "styled-components";
import * as Views from "../views";

/** Types */
type NavBarItemProps = {
  viewName: string;
  onRouteSelect: (viewName: string) => void;
  isSelected: boolean;
};

/** Controls displaying of the views and navigation. */
const NavBar = () => {
  const ViewType = Views as Record<string, () => ReactNode>;
  const [currentRoute, setCurrentRoute] = useState<string>("HomePage");

  const getRoutes = useCallback(() => {
    const viewNames = Object.keys(Views);

    return viewNames.map((viewName, index) => (
      <NavBarItem
        key={index}
        onRouteSelect={setCurrentRoute}
        viewName={viewName}
        isSelected={currentRoute === viewName}
      ></NavBarItem>
    ));
  }, [currentRoute]);

  return (
    <PageWrapper>
      <NavBarStyle>{getRoutes()}</NavBarStyle>
      {ViewType[currentRoute]?.()}
    </PageWrapper>
  );
};

const NavBarItem = ({
  viewName,
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
      onClick={() => onRouteSelect(viewName)}
    >
      {formatRouteName()}
    </NavBarItemStyle>
  );
};

/** Styles */
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavBarStyle = styled.div`
  width: 100vw;
  height: 55px;
  position: fixed;
  font-size: 22px;
  background-color: #e4e4e4;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 2;
  @keyframes Slide {
    0% {
      transform: translateX(-50em);
    }
    100% {
      transform: translateX(0em);
    }
  }
  animation: 1s ease-out 0s 1 Slide;
`;

const NavBarItemStyle = styled.div<{ isSelected: boolean }>`
  margin-right: 4px;
  padding-left: 18px;
  user-select: none;
  cursor: pointer;
  padding-right: 18px;
  border-bottom: ${({ isSelected }) =>
    isSelected ? "1px solid black" : "none"};
  margin-bottom: ${({ isSelected }) => (isSelected ? "8px" : "0")};
  @keyframes Bounce {
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
  }
`;

/** Exports */
export default NavBar;
