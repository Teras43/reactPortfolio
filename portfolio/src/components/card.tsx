import React from "react";
import styled from "styled-components";
import { Text } from "../components";

/** Array with Objects of project data for each project in the cards. */
const projects = [
  {
    title: "Angular MovieDB",
    description:
      "Best viewed on mobile! Uses Angular 11 and The Movie Database API to create a site you can rate and review movies you see!",
    image: "../assets/images/angularMovieDBImg.png",
  },
  {
    title: "React E-Commerce Store",
    description:
      "Best viewed on mobile! Uses React.js and a mock API to create a site you can browse items and add them to your cart to buy.",
    image: "../assets/images/reactECommerceStoreImg.png",
  },
  {
    title: "Angular Golf Scorecard",
    description:
      "Best viewed on mobile! Uses Angular 11 to select a golf course, add players to your golf game and keep track of all the scores for each person.",
    image: "../assets/images/angularGolfScorecardImg.png",
  },
  {
    title: "JavaScript Hangman",
    description:
      "Best viewed on desktop! A simple JavaScript game that lets you play a game of hangman from a predetermined set of words.",
    image: "../assets/images/javaScriptHangManImg.png",
  },
];

/** Types */
type Props = {
  /** Title of the project in the card. */
  title: string;
  /** Small description of project in card. */
  description: string;
  /** Thumbnail image for project in card. */
  image: string;
};

/** Card component each project is displayed inside. */
const Card = ({ title, description, image }: Props) => {
  return (
    <CardDiv>
      <ImageDiv>
        <ProjectImg></ProjectImg>
      </ImageDiv>
      <TextDiv>
        <TitleDiv>
          <Text></Text>
        </TitleDiv>
        <DescriptionDiv>
          <Text></Text>
        </DescriptionDiv>
      </TextDiv>
    </CardDiv>
  );
};

/** Styles */
const CardDiv = styled.div``;

const ImageDiv = styled.div``;

const ProjectImg = styled.img``;

const TextDiv = styled.div``;

const TitleDiv = styled.div``;

const DescriptionDiv = styled.div``;

/** Exports */
export default Card;
