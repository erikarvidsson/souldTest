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
        />
        <Button buttonText="Boka verkstad" dark="true" />
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;
