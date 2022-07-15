import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from "../../img/sidebar.svg"
import 'swiper/css';
import Javascript from "../../img/javascript.png"
import Css from "../../img/css.png"
import Html from "../../img/html-5.png"

export const Portfolio = () => {
    return(
        <div className="portfolio">

            {/* heading */ }

            <span>Recents Projects</span>
            <span>Portfolio</span>

            {/* slider */}

            <Swiper 
            spaceBetween={-800}
            slidesPerView={3}
            grabCursor={true}
            className='portfolio-slider'
            >
                <SwiperSlide>
                    <img src={Sidebar} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Sidebar} alt="" />
                </SwiperSlide>{""}

                <SwiperSlide>
                    <img src={Sidebar} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Sidebar} alt="" />
                </SwiperSlide>
                
            </Swiper>
        </div>
    )
}