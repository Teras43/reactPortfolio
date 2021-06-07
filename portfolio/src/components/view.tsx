import React, { ReactNode } from "react";
import styled from "styled-components";
import { Header } from "./";

/** Types */
type Props = {
  headerText?: string;
  children?: ReactNode;
};

/** Base view component. */
const View = ({ headerText, children }: Props) => {
  return (
    <ViewStyle>
      {headerText && <Header text={headerText} />}
      <BodyStyle>{children}</BodyStyle>
    </ViewStyle>
  );
};

/** Styles */
const ViewStyle = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const BodyStyle = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-top: 8px;
`;

/** Exports */
export default View;
