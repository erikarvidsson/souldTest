import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  position: relative;
  display: block;
  width: fit-content;
  z-index: 2;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#fff")};
  color: ${(props) => (props.color ? props.color : "var(--color-dark-blue)")};
  border: 2px solid var(--color-dark-grey);
  border-radius: 8px;
  padding: ${(props) => (props.padding ? props.padding : "11px 21px")};
  margin-left: ${(props) => (props.toLeft ? "auto" : "")};
  margin: ${(props) => (props.margin ? props.margin : "")};
  cursor: pointer;
  &.dark {
    border: none;
    background-color: var(--color-dark-blue);
    color: #fff;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
const ButtonNotification = styled.span`
  position: absolute;
  right: -8px;
  top: -8px;
  font-size: 9px;
  width: 20px;
  height: 20px;
  color: var(--color-dark-blue);
  border-radius: 30px;
  background: var(--color-pink);

  span {
    display: block;
    margin-top: -5px;
  }
`;

const Button = (props) => {
  return (
    <>
      <ButtonContainer {...props} className={props.dark ? "dark" : ""}>
        {props.buttonText}
        {props.notice && (
          <ButtonNotification>
            <span>{props.notice}</span>
          </ButtonNotification>
        )}
      </ButtonContainer>
    </>
  );
};

export default Button;
