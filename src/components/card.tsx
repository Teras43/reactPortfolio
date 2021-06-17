import React from "react";
import styled from "styled-components";
import { Text } from "../components";

/** Types */
type Props = {
  /** Title of the project in the card. */
  title: string;
  /** Small description of project in card. */
  description: string;
  /** Thumbnail image for project in card. */
  image: string;
  /** Website the project is hosted at. */
  site: string;
  /** Will size thumbnail image to mobile or desktop size. */
  mobile?: boolean;
};

/** Card component that each project will displayed inside. */
const Card = ({ title, description, image, site, mobile = true }: Props) => {
  const navSite = (site: any) => {
    window.open(site);
  };

  return (
    <CardDiv>
      <BackgroundDiv onClick={() => navSite(site)}>
        <ImageDiv mobile={mobile}>
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
  width: 100%;
  max-width: 400px;
  height: 200px;
  margin-right: 15px;
  margin-left: 15px;
  margin-top: 15px;
  margin-bottom: 150px;
  cursor: pointer;
`;

const BackgroundDiv = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  background-color: black;
  justify-content: center;
  align-items: center;

  @media (min-width: 410px) {
    height: 250px;
  }
`;

const ImageDiv = styled.div<{ mobile: boolean }>`
  /* width: ${({ mobile }) => (mobile ? "100px" : "100%")}; */
  width: 33%;
  height: 200px;
  object-fit: contain;
  @media (min-width: 410px) {
    height: 250px;
  }
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
