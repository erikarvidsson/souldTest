import React, { useContext, useState } from "react";
import styled from "styled-components";
import ClickableBox from "../ClickableBox";
import Button from "../Button";
import { icons, cars, ourCars } from "../../data";
import Section from "../Section";
import SelectedCarContext from "../../context/SelectedCarContext";

const SmallText = styled.h4`
  width: 100%;
  text-align: right;
  cursor: pointer;
`;
const Line = styled.hr`
  background-color: var(--color-dark-grey);
  height: 1px;
  border-width: 0;
`;

//Filter selected cars
const CarSelector = () => {
  const [showSelected, setShowSelected] = useState(false)
  const { selectedData } = useContext(SelectedCarContext);
  var selectedCars = [];
  var selectedTypes = [];

  // Get all selected filter matches  
  if (selectedData) {
    let selected = Object.values(selectedData).map((objects) => {
      let newObjects = objects.filter((obj) => {
        return obj.active === true;
      });

      return newObjects;
    });

    Object.values(selected).map((objects) => {
      Object.values(objects).filter((object) => {
        let availableTypes = Object.values(ourCars).filter((type) => {
          return type.type === object.name;
        });

        let availableCars = Object.values(ourCars).filter((type) => {
          return type.brand === object.name;
        });

        availableCars.map((car) => {
          selectedCars.push(car);
          return car
        });
        availableTypes.map((car) => {
          selectedTypes.push(car);
          return car
        });
        return object
      });
      return objects
    });
  }

  let result;

  // Remove none matching cars if multiple filter is selected
  if(selectedCars && selectedTypes) {
    result = selectedCars.filter((cars) => selectedTypes.includes(cars));
  }
  if (
    selectedTypes &&
    selectedTypes.length > 0 &&
    selectedCars &&
    !selectedCars.length > 0
  ) {
    result = selectedTypes;
  }
  if (
    selectedCars &&
    selectedCars.length > 0 &&
    selectedTypes &&
    !selectedTypes.length > 0
  ) {
    result = selectedCars;
  }

  //Show filtered cars
  const showSelectedSwitch = () => {
    setShowSelected(!showSelected)
  }

  return (
    <Section>
      <ClickableBox
        data={icons}
        textMargin="40px 0 24px 0"
        dataName="carType"
      />
      <ClickableBox data={cars} textMargin="20px auto" dataName="carBrand" />
      <Button
        notice={result ? `${result.length}` : ""}
        dark="true"
        margin="48px auto 0 auto"
        padding="18px 50px"
        noticeMargin="50px"
        buttonText="Visa bilar"
        onClick={showSelectedSwitch}
      />
      <SmallText>Se alla bilar i lager</SmallText>
      <Line />
      {showSelected && <ul>{result.map(car => {
        return <li>{car.brand}: {car.name}</li>
      })}</ul>}
    </Section>
  );
};

export default CarSelector;
