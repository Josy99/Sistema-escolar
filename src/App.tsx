import { ThemeProvider } from "styled-components";
import { defaultThemes } from "./styles/themes/defaultThmes";
import { GlobalStyle } from "./styles/global";
// import { Home } from "./pages/home";
import { BrowserRouter } from "react-router-dom";
import { Routers } from "./routers/Routers";
import { StudentProvider } from "./context";

export function App() {
 
  return (
    <ThemeProvider theme={defaultThemes}>
        <BrowserRouter>
              <StudentProvider>
                  <Routers />
              </StudentProvider>
        </BrowserRouter>
     
      <GlobalStyle/>
    </ThemeProvider>
  )
}


