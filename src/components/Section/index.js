import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  display: ${(props) => props.display};
  margin: ${(props) => (props.margin ? props.margin : "auto")};
  @media screen and (max-width: 992px) {
  padding: 20px;
  };
`;

const Section = (props) => {
  return <SectionContainer>{props.children}</SectionContainer>;
};

export default Section;
