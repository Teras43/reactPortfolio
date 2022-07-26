import styled from "styled-components";
import { View } from "../components";
import { Card } from "../components";
import movieDbImg from "../assets/images/angularMovieDBImg.png";
import ecommerceStoreImg from "../assets/images/reactECommerceStoreImg.png";
import golfScorecardImg from "../assets/images/angularGolfScorecardImg.jpeg";
import mdAutomotiveImg from "../assets/images/md-automotive-repair.jpeg";

type WebappsProps = {
  activePageIndex: number;
  viewArray: string[];
};

/** Array of objects that holds data to be displayed in the card component. */
const projects = [
  {
    title: "MD Automotive",
    description:
      "Best viewed on desktop or mobile! A local automotive company page made to view mechanic services and contact the mechanic!",
    image: mdAutomotiveImg,
    site: "https://www.mdautomotive.repair",
    mobile: false,
  },
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
];

/** The landing page view of the app. */
// { activePageIndex, viewName, viewArray }: WebappsProps
const HomePage = ({ activePageIndex, viewArray }: WebappsProps) => {
  /** Variable that holds the project cards mapped to each project in the projects array. */
  const allProjects = projects.map((project, index) => {
    return (
      <Card
        key={index}
        image={project.image}
        title={project.title}
        description={project.description}
        site={project.site}
        mobile={project.mobile}
        headerText="My work"
      ></Card>
    );
  });

  return (
    <View
      viewId={"Webapps"}
      activePageIndex={activePageIndex}
      viewArray={viewArray}
      headerText="My work"
    >
      <BodyWrapper>
        <ProjectDiv>{allProjects}</ProjectDiv>
      </BodyWrapper>
    </View>
  );
};

/** Home View Styles */
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  margin: auto;
  opacity: 0;
  margin-top: 70px;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: fadeIn 1s linear 0.2s 1 forwards;
`;

/** Home View Exports */
export default HomePage;
