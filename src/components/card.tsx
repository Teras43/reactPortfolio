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
  /** Header text for the view the card will be sitting in. */
  headerText: string;
};

/** Component that decides the data / styling for each project. Each card representing a 'section'. */
const Card = ({
  title,
  description,
  image,
  site,
  mobile = true,
  headerText,
}: Props) => {
  /** Variable that holds the current font sizes for the title and description. */
  let fontSizeTitle = 18;
  let fontSizeDesc = 16;
  /** If statement that checks the screen width, then passes in the variable for the text size for the card project text. */
  // eslint-disable-next-line no-restricted-globals
  if (screen.width >= 865) {
    fontSizeTitle = 40;
    fontSizeDesc = 34;
  } else {
    fontSizeTitle = 18;
    fontSizeDesc = 16;
  }
  /** Function that simply opens the website of the project clicked. */
  const navSite = (site: any) => {
    window.open(site);
  };

  return (
    <CardDiv headerText={headerText}>
      <BorderDiv>
        <BackgroundDiv onClick={() => navSite(site)}>
          <ImageDiv mobile={mobile}>
            <ProjectImg
              mobile={mobile}
              src={image}
              alt="Thumbnail for Project"
            ></ProjectImg>
          </ImageDiv>
        </BackgroundDiv>
        <TextDiv>
          <TitleDiv>
            <Text
              fontSize={fontSizeTitle}
              bold
              link
              mask={title}
              color={"white"}
              align={"center"}
            >
              {site}
            </Text>
          </TitleDiv>
          <DescriptionDiv>
            <Text
              fontSize={fontSizeDesc}
              link
              underline={false}
              mask={description}
              color={"white"}
              align={"center"}
            >
              {site}
            </Text>
          </DescriptionDiv>
        </TextDiv>
      </BorderDiv>
    </CardDiv>
  );
};

/** Card Component Styles */
const CardDiv = styled.div<{ headerText: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  max-width: 400px;
  margin-right: 15px;
  margin-left: 15px;
  margin-top: 25px;
  margin-bottom: 50px;
  cursor: pointer;
  border: 1px solid #ffffff9d;
  border-radius: 10px;
  box-shadow: ${({ headerText }) =>
    headerText === "My games"
      ? "0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #1b356c, 0 0 0.8rem #1b356c, 0 0 2.8rem #1b356c, inset 0 0 1.3rem #1b356c;"
      : "0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #FBAF00, 0 0 0.8rem #FBAF00, 0 0 2.8rem #FBAF00, inset 0 0 1.3rem #FBAF00;"};
  background-color: #141414;
  align-items: center;
  justify-content: center;

  @media (min-width: 865px) {
    max-width: 1300px;
  }
`;

const BorderDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 98%;
  width: 98%;
  border: 1px solid #a3a3a3;
  border-radius: 5px;
  margin: 8px;

  @media (min-width: 865px) {
    flex-direction: row;
  }
`;

const BackgroundDiv = styled.div`
  width: 90%;
  height: 175px;
  margin-top: 15px;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  border: 1px solid #c2c2c2;
  border-radius: 10px;

  @media (min-width: 410px) {
    height: 225px;
  }

  @media (min-width: 865px) {
    width: 50%;
    height: 80%;
    margin-left: 10px;
    margin-bottom: 15px;
  }
`;

const ImageDiv = styled.div<{ mobile: boolean }>`
  width: ${({ mobile }) => (mobile ? "33%" : "100%")};
  height: 175px;
  object-fit: contain;
  @media (min-width: 410px) {
    height: 225px;
  }

  @media (min-width: 865px) {
    height: 100%;
    width: ${({ mobile }) => (mobile ? "50%" : "100%")};
  }

  @media (min-width: 1200px) {
  }
`;

const ProjectImg = styled.img<{ mobile: boolean }>`
  height: 100%;
  width: 100%;

  @media (min-width: 865px) {
    border-radius: ${({ mobile }) => (!mobile ? "10px" : "0")};
  }
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
  margin: auto;
  margin-top: 0;
  margin-bottom: 10px;

  @media (min-width: 865px) {
    width: 45%;
  }
`;

const TitleDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 6px;
`;

const DescriptionDiv = styled.div``;

/** Card Component Exports */
export default Card;
