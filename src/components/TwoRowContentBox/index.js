import React, { useState } from "react";
import styled from "styled-components";
import ClickableBox from "../ClickableBox";
import ContentBox from "../ContentBox";
import ProfilePic from "../../assets/images/profilepic.jpg";
import Section from "../Section";
import bgImage from "../../assets/images/boxbg.jpg";
import eu from "../../assets/icons/eu.svg";
import videoIcon from "../../assets/icons/video.svg";

const ContentContainer = styled.div`
  height: 395px;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 948px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const InputBox = styled.div`
  position: "relative";
  top: "60px";

  @media screen and (max-width: 948px) {
    top: "0px";
  }
`;

const Input = styled.input`
  width: 60px;
  height: 90px;
  border-radius: 10px;
  border-color: white;
  border-style: hidden;
  margin: 0 2px;
  font-family: "Roboto", sans-serif;
  text-align: center;
  font-size: 44px;
  @media screen and (max-width: 1388px) {
    width: 25%;
    height: 100%;
  }
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

const PlayButtonBox = styled.div`
  display: flex;
  margin-top: 190px;
  img {
    width: 36px;
    cursor: pointer;
  }
  h4 {
    color: #fff;
    margin: auto 0 auto 18px;
    cursor: pointer;
  }

  div.video {
    background-color: #000;
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9;

    h2  {
      margin: auto;
      color: #fff;
    }
  }
`;

const repairs = [
  { name: "Service" },
  { name: "Hjulskifte" },
  { name: "Byta vindruta" },
];

const TwoRowContentBox = () => {
  const [openVideo, setOpenVideo] = useState(false);

  const openVideoToggle = () => {
    setOpenVideo(!openVideo);
  };

  return (
    <Section>
      <ContentContainer>
        <ContentBox padding="30px 50px">
          <div className="buttonImgBox">
            <div style={{ marginRight: "auto" }}>
              <h3>Boka Verkstad</h3>
              <ClickableBox
                data={repairs}
                backgroundColor="#fff"
                gridRepeat="3, auto"
                gridGap="5px"
                boxWidth="max-content"
                textMargin="8px 15px"
                textColor="var(--color-dark-grey)"
              />
            </div>
            <ProfileContainer>
              <img src={ProfilePic} alt="profile" />
            </ProfileContainer>
          </div>
          <InputBox>
            <div style={{ display: "flex" }}>
              <img
                src={eu}
                alt="background"
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
          </InputBox>
        </ContentBox>
        <ContentBox
          padding="30px 50px"
          bgImage={
            "linear-gradient(to top,rgb(185 185 185 / 0%),#1b679e82), url(" +
            bgImage +
            ")"
          }
        >
          <h3 style={{ color: "white" }}>
            Följ med på vår roadtrip <br /> och filmserie genom Västsverige
          </h3>

          <PlayButtonBox>
            <img src={videoIcon} alt="playVideo" onClick={openVideoToggle} />
            <h4 onClick={openVideoToggle}>Avsnitt 2 - Dingle</h4>
            {openVideo && (
              <div className="video" onClick={openVideoToggle}>
                <h2>No video found</h2>
              </div>
            )}
          </PlayButtonBox>
        </ContentBox>
      </ContentContainer>
    </Section>
  );
};

export default TwoRowContentBox;
