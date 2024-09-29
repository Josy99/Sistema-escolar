import styled from "styled-components";

export const TableContainer =  styled.div`
width:  100%; 
max-width: 1120px;  

`

export const TableContent =  styled.table`
width:  100%; 
border-collapse: separate; 
border-spacing:  0 0.5rem; 

td {
  padding:  1.25rem 2rem;
  background-color:  ${(props) =>props.theme['gray-100']};

  &:first-child {
     border-top-left-radius:  6px; 
     border-bottom-left-radius:  6px; 
    }

  &:last-child {
    border-top-right-radius:  6px; 
    border-bottom-right-radius:  6px; 
  }
}

div {
display: flex;
gap: 1rem; 
}
`

interface ButtonColors {
  variant?:  'red' | 'green';
}

export const Button =  styled.button<ButtonColors>`
  background-color: ${props => props.variant === 'green' ?  props.theme['green-500'] : props.theme['red-300']};
  color: ${props => props.theme['white']};
  border: none; 
  padding:  0.3rem;
  cursor: pointer;
  border-radius: 6px; 

`