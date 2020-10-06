import React from 'react'
import styled from 'styled-components'

const StyledContentBox = styled.div`
  .buttonImgBox {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
  background-color: var(--color-grey);
  /* background-image: url(${(props) => props.bgImage}); */
  background-image: ${(props) => props.bgImage};
  background-position: center;
  background-size: cover;
  border-radius: 25px;
  padding: ${(props) => props.padding};
`;

const ContentBox = (props) => {
  return(
    <StyledContentBox {...props}>
      {props.children}
    </StyledContentBox>
  )
}

export default ContentBox