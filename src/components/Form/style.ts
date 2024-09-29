import styled from "styled-components";

export const FormContainer =  styled.form`
display:  flex;
flex-direction:  column;
gap:  1rem;  
width: 100%;
max-width: 30rem; 
input  {
  padding: 1rem;
  border-radius:  6px;
  font-weight: bold; 
  width: 100%;
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