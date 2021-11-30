import { useCallback } from "react";
import styled from "styled-components";
import { Text } from ".";

/** Typing on the props for ContactSection Component. */
type ContactProps = {
  /** Text to display for the title of the section. */
  sectionTitle: string;
  /** Text to display within the section component. */
  sectionText: any;
  /** Prop to determine whether to load the image or text variant of the section component. */
  imgPath?: any;
  /** Mask for text if applicable. */
  textMask?: any;
  /** Flags the text as a link (of a certain type if chosen, will use a generic if not),
   * and will be rendered as an <a> tag instead. Default: false */
  textLink?: boolean | "email" | "telephone" | "textMessage";
};

/** Component for the Contact view that displays each section of the contact card body. */
const ContactCardSection = ({
  imgPath = undefined,
  sectionTitle,
  sectionText,
  textMask,
  textLink = false,
}: ContactProps) => {
  let titleSection = 26;
  let bodySection = 19;

  // eslint-disable-next-line no-restricted-globals
  if (screen.width >= 700) {
    titleSection = 42;
    bodySection = 28;
  } else {
    titleSection = 26;
    bodySection = 19;
  }

  const getAllImgTxt = useCallback(() => {
    return sectionText.map((text: string) => {
      return text;
    });
  }, [sectionText]);

  const getAllImgMasks = useCallback(() => {
    return textMask.map((text: string) => {
      return text;
    });
  }, [textMask]);

  const getAllImgs = useCallback(() => {
    let imgTxt = getAllImgTxt();
    let maskTxt = getAllImgMasks();
    return imgTxt.map((linkTxt: string, index: any) => {
      return (
        <IconImgsContainer key={index + 1}>
          <SingleImgContainer>
            <IconImg
              src={imgPath[index]}
              alt="Social Media Icon"
              onClick={() => {
                window.open(`${linkTxt}`, "_blank");
              }}
            ></IconImg>
          </SingleImgContainer>
          <Text
            fontSize={bodySection}
            italic
            color={"white"}
            mask={maskTxt[index]}
            link={textLink}
          >
            {linkTxt}
          </Text>
        </IconImgsContainer>
      );
    });
  }, [bodySection, getAllImgMasks, getAllImgTxt, imgPath, textLink]);

  return imgPath ? (
    <SectionDiv imgPath={imgPath}>
      <TitleDiv>
        <Text fontSize={titleSection} italic color={"white"}>
          {sectionTitle}
        </Text>
      </TitleDiv>
      <ContentDiv>{getAllImgs()}</ContentDiv>
    </SectionDiv>
  ) : (
    <SectionDiv imgPath={imgPath}>
      <TitleDiv>
        <Text fontSize={titleSection} italic color={"white"}>
          {sectionTitle}
        </Text>
      </TitleDiv>
      <ContentDiv>
        <Text
          fontSize={bodySection}
          italic
          color={"white"}
          mask={textMask}
          link={textLink}
        >
          {sectionText}
        </Text>
      </ContentDiv>
    </SectionDiv>
  );
};

/** Contact Section Styles */
const SectionDiv = styled.div<{ imgPath: any }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ imgPath }) =>
    !imgPath
      ? `@media (min-width: 1100px) {
          margin-bottom: 200px;
        }`
      : `@media (min-width: 1100px) {
          margin-top: 200px;
        }`}

  ${({ imgPath }) =>
    !imgPath
      ? `@media (min-width: 1300px) {
          margin-bottom: 0;
        }`
      : `@media (min-width: 1300px) {
          margin-top: 0;
        }`}
`;

const TitleDiv = styled.div``;

const ContentDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const IconImgsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  margin-left: 10px;
`;

const SingleImgContainer = styled.div`
  height: 30px;
  width: 30px;
`;

const IconImg = styled.img`
  height: 100%;
  width: 100%;
`;

/** Contact Section Exports */
export default ContactCardSection;
