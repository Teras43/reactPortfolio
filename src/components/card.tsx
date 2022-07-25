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
    fontSizeTitle = 22;
    fontSizeDesc = 20;
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
              hover
              data-text={title}
            >
              {site}
            </Text>
          </TitleDiv>
          <DescriptionDiv>
            <Text
              fontSize={fontSizeDesc}
              underline={false}
              mask={description}
              color={"white"}
              align={"center"}
            >
              {site}
            </Text>
          </DescriptionDiv>
          <BtnDiv headerText={headerText}>
            <a href={site} target="_blank" rel="noreferrer" id="navBtn">
              <span>
                {headerText === "My games" ? "Play Game!" : "Visit App!"}
              </span>
              <i></i>
            </a>
          </BtnDiv>
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
  height: 100%;
  max-width: 1300px;
  margin-right: 15px;
  margin-left: 15px;
  margin-top: 25px;
  margin-bottom: 50px;
  border: 1px solid #ffffff9d;
  border-radius: 10px;
  box-shadow: ${({ headerText }) =>
    headerText === "My games"
      ? "0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #1b356c, 0 0 0.8rem #1b356c, 0 0 2.8rem #1b356c, inset 0 0 1.3rem #1b356c;"
      : "0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #FBAF00, 0 0 0.8rem #FBAF00, 0 0 2.8rem #FBAF00, inset 0 0 1.3rem #FBAF00;"};
  background-color: #141414;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
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

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

const BackgroundDiv = styled.div`
  width: 70%;
  height: 175px;
  margin-top: 15px;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  border: 1px solid #c2c2c2;
  border-radius: 10px;
  z-index: 10;
  overflow: hidden;
  cursor: pointer;

  @media (min-width: 410px) {
    height: 225px;
  }

  @media (min-width: 800px) {
    width: 50%;
    height: 100%;
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

  @media screen and (max-width: 550px) {
    width: ${({ mobile }) => (mobile ? "40%" : "100%")};
  }

  @media (min-width: 800px) {
    height: 100%;
    width: ${({ mobile }) => (mobile ? "50%" : "100%")};
  }
`;

const ProjectImg = styled.img<{ mobile: boolean }>`
  height: 100%;
  width: 100%;

  @media (min-width: 800px) {
    border-radius: ${({ mobile }) => (!mobile ? "10px" : "0")};
  }
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: auto;
  margin-top: 0;
  margin-bottom: 10px;

  @media (min-width: 800px) {
    width: 45%;
  }
`;

const TitleDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 6px;
  cursor: pointer;

  @media screen and (max-width: 850px) {
    font-size: 28;
  }
`;

const DescriptionDiv = styled.div`
  display: flex;
`;

const BtnDiv = styled.div<{ headerText: string }>`
  --blueTheme: #aac4fc;
  --goldTheme: #fbaf00;

  margin-top: 60px;
  display: flex;

  @media screen and (max-width: 1200px) {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 1084px) {
    margin-top: 30px;
  }

  #navBtn {
    position: relative;
    background: #444;
    color: #fff;
    text-decoration: none;
    font-size: 1.5em;
    letter-spacing: 0.1em;
    font-weight: 400;
    padding: 10px 30px;
    transition: 0.5s;
  }

  #navBtn:hover {
    letter-spacing: 0.25em;
    background: ${({ headerText }) =>
      headerText === "My games" ? "var(--blueTheme)" : "var(--goldTheme)"};
    box-shadow: ${({ headerText }) =>
      headerText === "My games"
        ? "0 0 35px var(--blueTheme)"
        : "0 0 35px var(--goldTheme)"};
    color: ${({ headerText }) =>
      headerText === "My games" ? "var(--blueTheme)" : "var(--goldTheme)"};
  }

  #navBtn::before {
    content: "";
    position: absolute;
    inset: 2px;
    background: #27282c;
  }

  #navBtn span {
    position: relative;
    z-index: 1;
  }

  #navBtn i {
    position: absolute;
    inset: 0;
    display: block;
  }

  #navBtn i::before {
    content: "";
    position: absolute;
    top: -6px;
    left: 100%;
    transform: translateX(-50%);
    width: 10px;
    height: 10px;
    background: #27282c;
    border: ${({ headerText }) =>
      headerText === "My games"
        ? "2px solid var(--blueTheme)"
        : "2px solid var(--goldTheme)"};
    transition: 0.5s;
  }

  #navBtn:hover i::before {
    left: 0%;
    transform: translateX(-50%) rotate(45deg);
    box-shadow: ${({ headerText }) =>
      headerText === "My games"
        ? "40px 39px var(--blueTheme)"
        : "40px 39px var(--goldTheme)"};
  }

  #navBtn i::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    transform: translateX(-50%);
    width: 10px;
    height: 10px;
    background: #27282c;
    border: ${({ headerText }) =>
      headerText === "My games"
        ? "2px solid var(--blueTheme)"
        : "2px solid var(--goldTheme)"};
    transition: 0.5s;
  }

  #navBtn:hover i::after {
    left: 100%;
    transform: translateX(-50%) rotate(-45deg);
    box-shadow: ${({ headerText }) =>
      headerText === "My games"
        ? "40px -39px var(--blueTheme)"
        : "40px -39px var(--goldTheme)"};
  }
`;

/** Card Component Exports */
export default Card;
