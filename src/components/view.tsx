import React, { ReactNode } from "react";
import styled from "styled-components";
import { Header } from "./";

/** Types */
type Props = {
  /** Header displayed at top of page. */
  headerText?: string;
  /** Centers content in view. */
  center?: boolean;
  children?: ReactNode;
};

/** Base view component. */
const View = ({ headerText, center, children }: Props) => {
  return (
    <ViewStyle>
      {headerText && <Header text={headerText} />}
      <BodyStyle {...center}>{children}</BodyStyle>
    </ViewStyle>
  );
};

/** Styles */
const ViewStyle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const BodyStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 8px;
`;

/** Exports */
export default View;
