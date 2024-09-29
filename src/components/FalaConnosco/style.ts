import styled from "styled-components";

export  const  FalaConnoscoCantainer  = styled.div`
 width:  100%; 
 /* max-width:  50rem;  */
 /* margin:  4rem  auto;  */
 h2  {
  text-align:  center; 
  margin-bottom:  2rem; 
 }

 div {
   display:  flex; 
   align-items:  center; 
   justify-content: center; 
   gap: 10rem; 
   background-color:   ${(props) => props.theme[""]}; 
   padding:  2rem; 

  img  {
    height: 30rem;
    width: 40rem; 
  }
  input  {
  flex: 1; 
  }
 }
`
