import React, { useState, useContext } from "react";
import SelectedCarContext from "../../context/SelectedCarContext";
import styled from "styled-components";

const BoxContainer = styled.div`
  display: grid;
  grid-gap: ${(props) => (props.gridGap ? props.gridGap : "20px")};
  /* grid-template-columns: repeat(6, 1fr); */
  grid-template-columns: ${(props) =>
    props.gridRepeat ? `repeat(${props.gridRepeat})` : "repeat(6, 1fr)"};
  @media screen and (max-width: 1000px) {
    grid-template-columns: ${(props) =>
      props.gridRepeat ? `repeat(${props.gridRepeat})` : "repeat(3, 1fr)"};
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: ${(props) =>
      props.gridRepeat ? `repeat(${props.gridRepeat})` : "repeat(2, 1fr)"};
  }
  margin-bottom: 20px;
  cursor: pointer;
`;
const Boxes = styled.div`
  padding: ${(props) => props.padding};
  width: ${(props) => (props.boxWidth ? props.boxWidth : "100%")};
  /* height: 204px; */
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid var(--color-dark-grey);
  border-radius: 10px;
  &.active {
    border: 1px solid var(--color-dark-blue);
    h4{
      color: var(--color-dark-blue)
    }
  }
`;
const BoxIcon = styled.img`
  display: block;
  margin: 40px auto 0 auto;
  width: 90px;
  pointer-events: none;
`;
const BoxText = styled.h4`
  color: ${props => props.textColor};
  text-align: center;
  pointer-events: none;
  margin: ${(props) => props.textMargin};
  line-height: 16px;
`;

const ClickableBox = (props) => {
  const [data, setData] = useState(props.data);
  const { selectedData, setSelectedData } = useContext(SelectedCarContext);

  const isActive = (e) => {
    let id = e.target.id;
    !e.target.classList.contains("active")
      ? e.target.classList.add("active")
      : e.target.classList.remove("active");

    data[id]["active"] = !e.target.classList.contains("active") ? false : true;

    setSelectedData({
      ...selectedData,
      [props.dataName]: data,
    });
    setData(data);

    e.preventDefault();
  };

  return (
    <>
      <BoxContainer {...props}>
        {props.data &&
          props.data.map((icon, index) => {
            return (
              <Boxes {...props} id={index} onClick={isActive}>
                {icon.icon && <BoxIcon src={icon.icon} />}
                {icon.name && <BoxText {...props}>{icon.name}</BoxText>}
              </Boxes>
            );
          })}
      </BoxContainer>
    </>
  );
};

export default ClickableBox;
