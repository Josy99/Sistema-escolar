import styled from "styled-components"

export const BannerContainer =  styled.div`
text-align: center;
margin-top: 2rem;

video {
  object-fit:  cover; 
  width:  100%;
  height:  46rem; 
}
`
export const Overlay =  styled.div`
position: absolute; 
width: 100%;
height: 100%; 
background-color:  rgb(0, 0, 0, .2)
`
export const TextBanner =  styled.div`
position:  absolute;
width: 100%;
height: 100%; 
display: flex;
flex-direction:  column; 
top: 0;
justify-content: center; 
align-items: center;
color: ${(props) =>  props.theme['white']};

button {
  border:  2px solid  ${(props) =>props.theme['gray-800']}; 
  border-radius:  6px; 
  background: transparent; 
  padding:  1rem; 
  color: ${(props) =>  props.theme['white']};
  margin-top: 2rem; 
  cursor: pointer;

 &:hover {
  background-color: ${(props) =>props.theme['gray-800']};
  color: ${(props) =>props.theme['white']};
  transition:  background-color  0.5s;
 }
}
`