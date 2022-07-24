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
};

/** Component that wraps and displays the main body of the view, and displays the banner for which view is currently routed to. */
const View = ({ headerText, children }: Props) => {
  return (
    <ViewStyle>
      <HeaderDiv>{headerText && <Header text={headerText} />}</HeaderDiv>
      <BodyStyle>{children}</BodyStyle>
    </ViewStyle>
  );
};

/** View Styles */
const ViewStyle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;

  @media screen and (max-width: 1200px) {
    align-items: center;
  }
`;

const BodyStyle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 75px;
  padding-left: 30px;
  padding-right: 30px;
  z-index: 10;
  overflow: scroll;
  overflow-x: none;

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
