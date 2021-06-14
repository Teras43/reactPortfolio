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
      <AnimationDiv>
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
      </AnimationDiv>
    </View>
  );
};

/** Styles */
const AnimationDiv = styled.div`
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
  padding-left: 30px;
  padding-top: 20px;
`;

const ProjectDiv = styled.div`
  display: flex;
`;

/** Exports */
export default HomePage;
