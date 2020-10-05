import React from "react";
import styled from "styled-components";
import ClickableBox from "../ClickableBox";
import ContentBox from "../ContentBox";
import ProfilePic from "../../assets/images/profilepic.jpg";
import Section from "../Section";
import bgImage from "../../assets/images/boxbg.jpg";
import eu from "../../assets/icons/eu.svg";

const ContentContainer = styled.div`
  height: 395px;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 948px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Input = styled.input`
  width: 60px;
  height: 90px;
  border-radius: 10px;
  border-color: white;
  border-style: hidden;
  margin: 0 2px;
`;

const ProfileContainer = styled.div`
  display: block;
  overflow: hidden;
  height: 85px;
  width: 85px;
  border-radius: 50%;
  border-color: none;
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
          <div style={{ position: "relative", top: "60px" }}>
            <div style={{ display: "flex" }}>
              <img
                src={eu}
                style={{
                  display: "block",
                  top: "18px",
                  position: "relative",
                  width: "34px",
                }}
              />
              <div>
                <h4 style={{ color: "var(--color-dark-grey)" }}>
                  Fyll i reggnummer
                </h4>
                <div style={{ display: "flex" }}>
                  <div style={{ marginRight: "5px" }}>
                    <Input maxLength="1" />
                    <Input maxLength="1" />
                    <Input maxLength="1" />
                  </div>
                  <div style={{ marginLeft: "5px" }}>
                    <Input maxLength="1" />
                    <Input maxLength="1" />
                    <Input maxLength="1" />
                  </div>
                </div>
              </div>
            </div>
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
