import { ReactNode } from "react";
import styled from "styled-components";
import { Header } from "./";

/** View Types */
type Props = {
  /** Header displayed at top of page. */
  headerText?: string;
  /** Centers content in view. */
  center?: boolean;
  /** Typing for the node which holds the children (the body of the page). */
  children?: ReactNode;
  /** Id as the name of the view. */
  viewId: string | undefined;
  /** Current page index that is active in the display. */
  activePageIndex: number;
  /** The array that holds the positioning of all the views. */
  viewArray: string[];
};

/** Component that wraps and displays the main body of the view, and displays the banner for which view is currently routed to. */
const View = ({
  headerText,
  children,
  viewId,
  activePageIndex,
  viewArray,
}: Props) => {
  return (
    <ViewStyle
      id={viewId}
      viewArray={viewArray}
      activePageIndex={activePageIndex}
    >
      <HeaderDiv>{headerText && <Header text={headerText} />}</HeaderDiv>
      <BodyStyle>{children}</BodyStyle>
    </ViewStyle>
  );
};

/** View Styles */
const ViewStyle = styled.div<{
  viewArray: string[];
  activePageIndex: number;
  id: string | undefined;
}>`
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  opacity: ${({ viewArray, activePageIndex, id }) =>
    id === viewArray[activePageIndex] ? 1 : 0};
  display: ${({ viewArray, activePageIndex, id }) =>
    id === viewArray[activePageIndex] ? "" : "none"};
  z-index: 50;
  overflow: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  @media screen and (max-width: 1200px) {
    align-items: center;
  }

  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

const BodyStyle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  padding-right: 30px;
  z-index: 10;

  @media screen and (max-width: 1200px) {
    height: auto;
    margin-left: 0;
    margin-top: 0px;
    padding: 0px 20px;
  }
`;

const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  z-index: 11;
`;

/** View Exports */
export default View;
