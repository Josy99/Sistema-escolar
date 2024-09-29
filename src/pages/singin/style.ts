import styled from "styled-components";

export const FormSinginContainer =  styled.div`
display:  flex;
flex-direction:  column; 
justify-content: center; 
align-items: center; 
/* height: 100vh;  */
margin-top: 8rem; 
`

export const ArrownBack =  styled.div`
 cursor: pointer;
 margin: 1rem;
`

export const FormSinginContent =  styled.form`
display:  flex;
flex-direction:  column;
width: 100%;
max-width:  30rem; 
gap:  1rem;  
margin-top: 2rem; 


input  {
  padding: 1rem;
  border-radius:  6px;
  font-weight: bold;
}
button  {
  padding: 1rem;
  border:  none; 
  border-radius:  6px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${(props) =>props.theme['gray-800']};
  color: ${(props) =>props.theme['white']};
  }
`