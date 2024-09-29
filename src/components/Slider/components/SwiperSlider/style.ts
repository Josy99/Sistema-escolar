import styled from "styled-components"

export const SliderContainer =  styled.div`
  margin: 10rem auto;
  max-width: 1120px;
  width: 100%;
`;

export const CardSlideContainer =  styled.div`
background: ${(props) =>props.theme['gray-800']};
height: 15rem; 
border-radius:  6px; 
color: ${(props) =>props.theme['white']};
display: flex;
justify-content: center;
align-items: center; 
margin-bottom: 2rem;
`;


