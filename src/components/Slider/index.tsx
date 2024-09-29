import { CardSlide } from "./components/CardSlide";
import { Slider } from "./components/SwiperSlider"
import { SwiperProps, SwiperSlide } from "swiper/react";

export function  Sliders() {
  const  settings: SwiperProps = {
    spaceBetween: 10,
    slidesPerView: 3,
    loop: false,
    draggable: true,
    autoplay: {
      delay:  300
    },
    pagination: {
      clickable: true
    },
  }
  return  (
        <>
        <Slider  settings = {settings}>
            <SwiperSlide>
                <CardSlide />
            </SwiperSlide>
            <SwiperSlide>
                <CardSlide />
            </SwiperSlide>
            <SwiperSlide>
            <CardSlide />
              </SwiperSlide>
            <SwiperSlide>
              <CardSlide />
            </SwiperSlide>
            <SwiperSlide>
              <CardSlide />
            </SwiperSlide>
          </Slider>
      </>
  )
}