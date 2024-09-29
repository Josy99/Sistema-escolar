import styled from "styled-components";

export const HeaderPerfilContainer  = styled.div`
background-color: ${(props) => props.theme['white'] };
border-bottom: 2px  solid ${(props) => props.theme['gray-100'] };
padding: 1rem; 
grid-area: HeaderContent;

display:  flex; 
justify-content: right; 
`
export const Form  = styled.form`
   input {
    padding:  0.60rem; 
    border-radius:  6px;
   }
`