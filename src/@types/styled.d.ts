import "styled-components"
import { defaultThemes } from "../styles/themes/defaultThmes";

type typeThemes  = typeof defaultThemes

declare module 'styled-components' {
  export interface DefaultTheme extends typeThemes {
  }
}


