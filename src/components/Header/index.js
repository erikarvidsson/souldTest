import React from "react";
import styled from "styled-components";
import Bg from "../../assets/images/headerBg.jpg";
import Overlay from "../../assets/images/overlay.png";
import Button from "../Button";
import { ourCars } from "../../data";

const HeaderContainer = styled.div`
  @media screen and (min-width: 992px) {
    margin-left: -130px;
  }
  display: block;
  /* margin-top: 281px; */
  /* padding-top: 200px; */
  bottom: 0;
  left: 0;
  width: 100vw;
  background-image: url(${Bg});
  background-position: 0 60px;
  background-size: cover;
  height: 100vh;
`;
const ImageOverlay = styled.img`
  display: block;
  position: absolute;
  top: 0;
  width: 100vw;
  @media screen and (max-width: 1340px) {
    height: 70%;
  }
`;
const HeaderText = styled.h1`
  display: block;
  position: absolute;
  margin-top: 200px;
  z-index: 2;
  text-align: center;
  width: 100%;
`;
const ButtonsContainer = styled.div`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  margin-top: 320px;
  @media screen and (max-width: 948px) {
    margin-top: 430px;
  }
  @media screen and (max-width: 800px) {
    margin-top: 320px;
  }
`;
const ContentBox = styled.div`
  position: absolute;
  bottom: 46px;
  right: 0;
  width: 500px;
  height: 178px;
  border-left: 2px solid var(--color-dark-grey);
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <ImageOverlay src={Overlay} />
      <HeaderText>Vi finns i din närhet</HeaderText>
      <ButtonsContainer>
        <Button
          buttonText="Bilar i lager"
          toLeft="true"
          notice={ourCars.length}
          href="#cars"
        />
        <Button buttonText="Boka verkstad" dark="true" />
      </ButtonsContainer>
      <ContentBox>
        <div></div>
        <h3 style={{ margin: "14px 0 30px 50px", color: "#fff" }}>
          Spetsa din roadtrip med nya sommardäck
        </h3>
        <Button margin="0 0 0 50px" buttonText="Köp däck" bgColor="transparent" color="#fff" padding="10px 16px"/>
      </ContentBox>
    </HeaderContainer>
  );
};

export default Header;
