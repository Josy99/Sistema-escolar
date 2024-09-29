import styled from "styled-components"

export  const  FooterContainer =  styled.div`
   background-color:  ${(props) =>props.theme['gray-100']};
   width:  100%; 
   padding: 4rem 0; 

   div  {
   max-width:  70rem; 
   margin: 0 auto; 
   display: flex; 
   justify-content:  space-between; 
   }
`