import { View } from "../components";
import { Card } from "../components";
import styled from "styled-components";
import wordle_thumbnail from "../assets/images/wordle_thumbnail.png";
import redSwirl from "../assets/images/red-swirls.jpeg";
import hangManImg from "../assets/images/javaScriptHangManImg.png";
// import myResume from "../assets/pdf/CurtisBrandon_Resume_2021-11-11.pdf";
// import { Document, Page, pdfjs } from "react-pdf";

/** Global worker for the PDF viewer used for the Resume. */
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

/** Array of objects containing all the projects for this tab (Games). */
const gameProjects = [
  {
    title: "Wordle",
    description:
      "Best viewed on mobile! A simple JavaScript wordle app that uses a random word API to get a new word each time you play!",
    image: wordle_thumbnail,
    site: "https://teras43.github.io/wordleGame/",
    mobile: true,
  },
  {
    title: "Candy Crush",
    description:
      "Best viewed on Desktop! A quick and simple candy crush game using React! (W.I.P. CSS)",
    image: redSwirl,
    site: "https://teras43.github.io/candy-crush/",
    mobile: false,
  },
  {
    title: "JavaScript Hangman",
    description:
      "Best viewed on desktop! A simple JavaScript game that lets you play a game of hangman from a predetermined set of words.",
    image: hangManImg,
    site: "https://teras43.github.io/Hang-Man/",
    mobile: false,
  },
];

/** The view component for the Games tab. */
const Games = () => {
  const gameProjectCards = gameProjects.map((project, index) => {
    return (
      <Card
        key={index}
        image={project.image}
        title={project.title}
        description={project.description}
        site={project.site}
        mobile={project.mobile}
      ></Card>
    );
  });

  return (
    <View headerText="My games">
      <BodyWrapper>
        <ProjectDiv>{gameProjectCards}</ProjectDiv>
      </BodyWrapper>
    </View>
  );
};

/** Game View Styles */
const BodyWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

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

const ProjectDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 100px;
  height: 100%;
  width: 100%;
  max-width: 1285px;
  margin: auto;
  opacity: 0;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: fadeIn 1s linear 0.2s 1 forwards;

  @media (min-width: 865px) {
  }
`;

/** Exports */
export default Games;

/** The view component for the resume. */
// const Resume = () => {
//   /** Width of the current viewport. */
//   const screenWidth = window.innerWidth;
//   /** Width of the PDF relative to the current viewport. */
//   const pdfWidth = Math.min(screenWidth - screenWidth * 0.25, 850);

//   return (
//     <View headerText="My resume">
//       <ResumeDiv>
//         <BorderDiv>
//           <Document
//             file={myResume}
//             onLoadSuccess={console.log}
//             externalLinkTarget="_blank"
//           >
//             <Page pageNumber={1} width={pdfWidth} />
//           </Document>
//           <Document
//             file={myResume}
//             onLoadSuccess={console.log}
//             externalLinkTarget="_blank"
//           >
//             <Page pageNumber={2} width={pdfWidth} />
//           </Document>
//         </BorderDiv>
//       </ResumeDiv>
//     </View>
//   );
// };

// /** Resume View Styles */
// const ResumeDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100%;
//   width: 50;
//   margin: auto;
//   box-sizing: border-box;
//   @keyframes FadeIn {
//     0% {
//       opacity: 0;
//     }
//     100% {
//       opacity: 1;
//     }
//   }
//   animation: FadeIn 1s linear;
// `;

// const BorderDiv = styled.div`
//   width: 100%;
//   margin-top: 25px;
//   margin-bottom: 25px;
// `;

// /** Resume View Exports */
// export default Resume;
