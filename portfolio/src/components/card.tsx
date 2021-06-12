import React from "react";
import styled from "styled-components";
import { Text } from "../components";

/** Types */
type Props = {
  /** Key used for each project card. */
  key: number;
  /** Title of the project in the card. */
  title: string;
  /** Small description of project in card. */
  description: string;
  /** Thumbnail image for project in card. */
  image: string;
  /** Website the project is hosted at. */
  site: string;
};

/** Card component that each project will displayed inside. */
const Card = ({ key, title, description, image, site }: Props) => {
  const navSite = (site: any) => {
    window.open(site);
  };

  return (
    <CardDiv key={key}>
      <BackgroundDiv onClick={() => navSite(site)}>
        <ImageDiv>
          <ProjectImg src={image} alt="Thumbnail for Project"></ProjectImg>
        </ImageDiv>
      </BackgroundDiv>
      <TextDiv>
        <TitleDiv>
          <Text fontSize={18} bold link mask={title}>
            {site}
          </Text>
        </TitleDiv>
        <DescriptionDiv>
          <Text fontSize={16} link underline={false} mask={description}>
            {site}
          </Text>
        </DescriptionDiv>
      </TextDiv>
    </CardDiv>
  );
};

/** Styles */
const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 300px;
  margin-right: 15px;
  margin-left: 15px;
  margin-top: 15px;
  cursor: pointer;
`;

const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: black;
  justify-content: center;
  align-items: center;
`;

const ImageDiv = styled.div`
  width: 150px;
  height: 300px;
  object-fit: contain;
`;

const ProjectImg = styled.img`
  height: 100%;
  width: 100%;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
  margin: auto;
`;

const TitleDiv = styled.div`
  margin-top: 10px;
  margin-bottom: 6px;
`;

const DescriptionDiv = styled.div``;

/** Exports */
export default Card;
