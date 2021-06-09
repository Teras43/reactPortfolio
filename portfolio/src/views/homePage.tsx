import React from "react";
import styled from "styled-components";
import { View } from "../components";
import { Text } from "../components";

/** The main page of the app. */
const HomePage = () => {
  return (
    <View headerText="Projects">
      <ContactDiv>
        <Text fontSize={24} italic={true}>
          Brandon Curtis
        </Text>
        <Text
          fontSize={19}
          italic={true}
          color="black"
          link="email"
          mask="Email Me!"
        >
          Brandcurtis43@gmail.com
        </Text>
        <Text
          fontSize={16}
          italic={true}
          color="black"
          link={true}
          mask="My Github"
        >
          https://github.com/Teras43
        </Text>
      </ContactDiv>
    </View>
  );
};

/** Styles */
const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  padding-top: 20px;
`;

/** Exports */
export default HomePage;
