import React from "react";
import styled from "styled-components";
import ClickableBox from "../ClickableBox";
import ContentBox from "../ContentBox";
import ProfilePic from "../../assets/images/profilepic.jpg";
import Section from "../Section";
import bgImage from '../../assets/images/boxbg.jpg'

const ContentContainer = styled.div`
  height: 395px;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 948px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

// const ContentBox = styled.div`
//   .buttonImgBox {
//     display: grid;
//     grid-template-columns: 2fr 1fr;
//   }
//   background-color: var(--color-dark-grey);
//   background-image: url(${bgImage});
//   border-radius: 25px;
//   padding: ${(props) => props.padding};
// `;

const ProfileContainer = styled.div`
  display: block;
  overflow: hidden;
  height: 85px;
  width: 85px;
  border-radius: 50%;
  margin-left: auto;
  margin-top: 22px;

  img {
    width: 100%;
  }
`;

const repairs = [
  { name: "Service" },
  { name: "Hjulskifte" },
  { name: "Byta vindruta" },
];

const TwoRowContentBox = () => {
  return (
    <Section>
      <ContentContainer>
        <ContentBox padding="30px 50px">
          <div className="buttonImgBox">
            <div>
              <h3>Boka Verkstad</h3>
              <ClickableBox
                data={repairs}
                backgroundColor="#fff"
                gridRepeat="3, auto"
                gridGap="5px"
                boxWidth="max-content"
                textMargin="8px 15px"
              />
            </div>
            <ProfileContainer>
              <img src={ProfilePic} alt="profile" />
            </ProfileContainer>
          </div>
        </ContentBox>
        <ContentBox padding="30px 50px" bgImage={bgImage}>
          <h3 style={{ color: "white" }}>
            Följ med på vår roadtrip <br /> och filmserie genom Västsverige
          </h3>
        </ContentBox>
      </ContentContainer>
    </Section>
  );
};

export default TwoRowContentBox;
