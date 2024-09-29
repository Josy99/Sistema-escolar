import styled from "styled-components";

export const CardSlideContainer =  styled.div`
border-radius:  6px; 
overflow:  hidden; 
margin-bottom: 2rem;
width: 20rem;
box-shadow:  1px 1px 6px #555;

img {
  width: 100%; 
}

div {
  padding:  1rem;
  text-justify:  center; 
  
  button  {
    margin-top: 1rem;
    border:  none; 
    border-radius: 6px;
    padding: 0.75rem;
    background-color: ${(props) =>props.theme['gray-800']};
    color: ${(props) =>props.theme['white']};
    cursor: pointer;
  }
}
`;
