import styled from "styled-components";
import { View } from "../components";
import { ContactCardSection } from "../components";
import fbImg from "../assets/images/facebook.png";
import liImg from "../assets/images/linkedin.png";

type Props = {
  currentRoute: string;
};

/** The view component for the Contact page. */
const Contact = ({ currentRoute }: Props) => {
  let socialArray = [fbImg, liImg];
  let socialLinkArray = [
    // "https://www.facebook.com/brandcurtis/",
    "https://www.linkedin.com/in/brandcurtis/",
  ];
  // let socialMask = ["Facebook", "LinkedIn"];
  let socialMask = ["LinkedIn"];

  return (
    <View headerText="Lets get in touch">
      <BodyWrapper>
        <CardDiv>
          <BorderDiv>
            <ContactDiv>
              <ContactCardSection
                sectionTitle={"You can email me:"}
                sectionText={"Brandcurtis43@gmail.com"}
                textMask={"Brandcurtis43@gmail.com"}
                textLink={"email"}
              />
              <ContactCardSection
                sectionTitle={"Some socials:"}
                imgPath={socialArray}
                textLink={true}
                sectionText={socialLinkArray}
                textMask={socialMask}
              />
              <ContactCardSection
                sectionTitle={"Github if you'd like:"}
                sectionText={"https://github.com/Teras43"}
                textMask={"Link to Github"}
                textLink={true}
              />
            </ContactDiv>
          </BorderDiv>
        </CardDiv>
        <AttrDiv>
          {/* <div>
            Facebook Icon made by{" "}
            <a
              href="https://www.flaticon.com/authors/ruslan-babkin"
              title="Ruslan Babkin"
            >
              Ruslan Babkin
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div> */}
          <div>
            LinkedIn Icon made by{" "}
            <a href="https://www.freepik.com" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
        </AttrDiv>
      </BodyWrapper>
    </View>
  );
};

/** Contact View Styles */
const BodyWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 400px;
  height: 25em;
  margin-right: 15px;
  margin-left: 15px;
  margin-top: 25px;
  margin-bottom: 50px;
  border: 1px solid #ffffff9d;
  border-radius: 10px;
  box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #1b356c,
    0 0 0.8rem #1b356c, 0 0 2.8rem #1b356c, inset 0 0 1.3rem #1b356c;
  background-color: #141414;
  align-items: center;

  @media (min-width: 700px) {
    max-width: 800px;
    height: 28em;
  }

  @media (min-width: 1100px) {
    max-width: 1000px;
    height: 30em;
  }

  @media (min-width: 1300px) {
    max-width: 1200px;
    height: 35em;
  }
`;

const BorderDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 95%;
  border: 1px solid #a3a3a3;
  border-radius: 5px;
  margin: 8px;
`;

const ContactDiv = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;

  @media (min-width: 1100px) {
    flex-direction: row;
  }

  @media (min-width: 1300px) {
  }
`;

const AttrDiv = styled.div`
  height: 8em;
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: flex-end;

  a {
    text-decoration: none;
    color: white;
  }
`;

/** Contact View Exports */
export default Contact;
