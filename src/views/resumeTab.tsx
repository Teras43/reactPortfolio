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
      <ResumeDiv>
        <BorderDiv>
          <Document
            file={myResume}
            onLoadSuccess={console.log}
            externalLinkTarget="_blank"
          >
            <Page pageNumber={1} width={pdfWidth} />
          </Document>
          <Document
            file={myResume}
            onLoadSuccess={console.log}
            externalLinkTarget="_blank"
          >
            <Page pageNumber={2} width={pdfWidth} />
          </Document>
        </BorderDiv>
      </ResumeDiv>
    </View>
  );
};

/** Styles */
const ResumeDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  margin: auto;
  box-sizing: border-box;
  @keyframes FadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: FadeIn 1s linear;
`;

const BorderDiv = styled.div`
  border: 1px solid black;
  height: auto;
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;
`;

/** Exports */
export default Resume;
