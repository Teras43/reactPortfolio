import React from "react";
import styled from "styled-components";
import { View } from "../components";
import { Text } from "../components";
import { Card } from "../components";
import movieDbImg from "../assets/images/angularMovieDBImg.png";
import ecommerceStoreImg from "../assets/images/reactECommerceStoreImg.png";
import golfScorecardImg from "../assets/images/angularGolfScorecardImg.jpeg";
import hangManImg from "../assets/images/javaScriptHangManImg.png";

/** Array with Objects of project data for each project in the cards. */
const projects = [
  {
    title: "Angular MovieDB",
    description:
      "Best viewed on mobile! Uses Angular 11 and The Movie Database API to create a site you can rate and review movies you see!",
    image: movieDbImg,
    site: "https://teras43.github.io/movieGroupProject/",
    mobile: true,
  },
  {
    title: "React E-Commerce Store",
    description:
      "Best viewed on mobile! Uses React.js and a mock API to create a site you can browse items and add them to your cart to buy.",
    image: ecommerceStoreImg,
    site: "https://teras43.github.io/eCommerceStore/",
    mobile: true,
  },
  {
    title: "Angular Golf Scorecard",
    description:
      "Best viewed on mobile! Uses Angular 11 to select a golf course, add players to your golf game and keep track of all the scores for each person.",
    image: golfScorecardImg,
    site: "https://teras43.github.io/golf-scorecard-angular/",
    mobile: true,
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

/** The main page of the app. */
const HomePage = () => {
  const allProjects = projects.map((project, index) => {
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
    <View headerText="Projects">
      <BodyWrapper>
        <ContactDiv>
          <Text fontSize={24} italic>
            Brandon Curtis
          </Text>
          <Text
            fontSize={19}
            italic
            color="black"
            link="email"
            mask="Email Me!"
          >
            Brandcurtis43@gmail.com
          </Text>
          <Text fontSize={16} italic color="black" link mask="My Github">
            https://github.com/Teras43
          </Text>
        </ContactDiv>
        <ProjectDiv>{allProjects}</ProjectDiv>
      </BodyWrapper>
    </View>
  );
};

/** Styles */
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

const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-top: 20px;
  opacity: 0;

  @media (min-width: 860px) {
    align-items: flex-start;
    padding-left: 30px;
  }

  @keyframes slideContactDown {
    0% {
      margin-top: 0px;
    }
    100% {
      opacity: 1;
      margin-top: 100px;
    }
  }
  animation: 1s linear 0s 1 forwards slideContactDown;
`;

const ProjectDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 30px;
  height: 100%;
  width: 100%;
  max-width: 1285px;
  margin: auto;
  opacity: 0;
  @keyframes slideProjectsDown {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: 1s linear 1.2s 1 forwards slideProjectsDown;
`;

/** Exports */
export default HomePage;
