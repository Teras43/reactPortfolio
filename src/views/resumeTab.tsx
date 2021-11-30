import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { View } from "../components";
import myResume from "../assets/pdf/CurtisBrandon_Resume_2021-11-11.pdf";
import styled from "styled-components";

/** Global worker for the PDF viewer used for the Resume. */
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

/** The view component for the resume. */
const Resume = () => {
  /** Width of the current viewport. */
  const screenWidth = window.innerWidth;
  /** Width of the PDF relative to the current viewport. */
  const pdfWidth = Math.min(screenWidth - screenWidth * 0.25, 850);

  return (
    <View headerText="My resume">
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

/** Resume View Styles */
const ResumeDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50;
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
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;
`;

/** Resume View Exports */
export default Resume;
