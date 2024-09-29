import { Swiper, SwiperProps} from "swiper/react"
import { ReactNode } from "react"
import {Navigation, Pagination, A11y} from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { SliderContainer } from "./style"


interface SliderProps {
  children: ReactNode;
  settings: SwiperProps
}

export function Slider({children, settings}: SliderProps) {
  return (
    <SliderContainer>
        <Swiper modules = {[Navigation, Pagination, A11y]}{...settings}>
          {children}
        </Swiper>
    </SliderContainer>
  )
}