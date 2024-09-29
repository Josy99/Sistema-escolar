import styled from "styled-components";

export const FormContainer =  styled.div`
width:  100%; 
max-width: 50%;  
margin:  4rem auto; 
text-align:  center; 
`

export const FormContent =  styled.form`
margin-top:  1rem; 
width: 100%; 
display:  flex;
flex-direction: column; 
gap: 1rem; 

input {
  padding:  1rem; 
  border-radius:  6px; 
}
button {
  padding:  1rem; 
  border-radius:  6px; 
  border: none; 
  cursor: pointer;
  font-weight:  bold; 
}
`

