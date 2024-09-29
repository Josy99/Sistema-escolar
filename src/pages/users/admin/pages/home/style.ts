import styled from "styled-components";

export const HomeContainer =  styled.div`
display: flex; 
justify-content: center; 
gap: 2rem; 

div {
  background: ${(props) =>props.theme['gray-800']};
  color: white; 
  height:  4rem; 
  display:  flex; 
  align-items: center;
  gap:  2rem; 
  padding: 4.5rem 2rem;
  justify-content: space-between; 
  border-radius:  6px; 
}
`