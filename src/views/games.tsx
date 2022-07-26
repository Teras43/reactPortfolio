import { View } from "../components";
import { Card } from "../components";
import styled from "styled-components";
import wordle_thumbnail from "../assets/images/wordle_thumbnail.png";
import redSwirl from "../assets/images/red-swirls.jpeg";
import hangManImg from "../assets/images/javaScriptHangManImg.png";

type GamesProps = {
  activePageIndex: number;
  viewArray: string[];
  fadeOut: boolean;
};

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
      "Best viewed on Desktop! A quick and simple candy crush game using React!",
    image: redSwirl,
    site: "https://teras43.github.io/candy-crush/",
    mobile: false,
  },
  {
    title: "JavaScript Hangman",
    description:
      "Best viewed on desktop! A simple JavaScript game that lets you play a game of hangman!",
    image: hangManImg,
    site: "https://teras43.github.io/Hang-Man/",
    mobile: false,
  },
];

/** The view component for the Games tab. */
const Games = ({ activePageIndex, viewArray, fadeOut }: GamesProps) => {
  const gameProjectCards = gameProjects.map((project, index) => {
    return (
      <Card
        key={index}
        image={project.image}
        title={project.title}
        description={project.description}
        site={project.site}
        mobile={project.mobile}
        headerText="My games"
      ></Card>
    );
  });

  return (
    <View
      viewId={"Games"}
      activePageIndex={activePageIndex}
      viewArray={viewArray}
      headerText="My games"
    >
      <BodyWrapper
        fadeOut={fadeOut}
        currentView={"Games"}
        activePageIndex={activePageIndex}
        viewArray={viewArray}
      >
        <ProjectDiv
          fadeOut={fadeOut}
          currentView={"Games"}
          activePageIndex={activePageIndex}
          viewArray={viewArray}
        >
          {gameProjectCards}
        </ProjectDiv>
      </BodyWrapper>
    </View>
  );
};

/** Game View Styles */
const BodyWrapper = styled.div<{
  fadeOut: boolean;
  currentView: string;
  activePageIndex: number;
  viewArray: string[];
}>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  opacity: 0;

  @keyframes FadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes FadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  animation: ${({ fadeOut, currentView, activePageIndex, viewArray }) =>
    currentView === viewArray[activePageIndex] && fadeOut
      ? "FadeOut 0.5s linear forwards"
      : "FadeIn 0.5s linear forwards"};
`;

const ProjectDiv = styled.div<{
  fadeOut: boolean;
  currentView: string;
  activePageIndex: number;
  viewArray: string[];
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 60px;
  opacity: 0;
  transition: 0.5s;

  @keyframes FadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes FadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  animation: ${({ fadeOut, currentView, activePageIndex, viewArray }) =>
    currentView === viewArray[activePageIndex] && fadeOut
      ? "FadeOut 0.5s linear forwards"
      : "FadeIn 0.5s linear forwards"};

  @media screen and (max-width: 799px) {
    margin-top: 10;
  }
`;

/** Exports */
export default Games;
