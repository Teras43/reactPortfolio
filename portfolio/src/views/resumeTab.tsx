import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { View } from "../components";
import myResume from "../assets/pdf/myResume.pdf";
import styled from "styled-components";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

/** Basic resume view. */
const Resume = () => {
  const screenWidth = window.innerWidth;
  const pdfWidth = Math.min(screenWidth - screenWidth * 0.25, 850);

  return (
    <View headerText="Resume">
      <BorderDiv>
        <Document file={myResume} onLoadSuccess={console.log}>
          <Page pageNumber={1} width={pdfWidth} />
        </Document>
        <Document file={myResume} onLoadSuccess={console.log}>
          <Page pageNumber={2} width={pdfWidth} />
        </Document>
      </BorderDiv>
    </View>
  );
};

/** Styles */
const BorderDiv = styled.div`
  border: 1px solid black;
  height: auto;
  width: auto;
  margin-top: 30px;
  margin-bottom: 30px;
`;

/** Exports */
export default Resume;
