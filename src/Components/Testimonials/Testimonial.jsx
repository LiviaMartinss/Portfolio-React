import './Testimonial.css';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

export const Testimonials = () => {
    const clients =[
        {
            img: profilePic1,
            review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quia maiores dolorem amet ea omnis expedita a voluptate.Voluptatem.000000",
        },
        {
            img: profilePic2,
            review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quia maiores dolorem amet ea omnis expedita a voluptate.Voluptatem.000000",
        },
        {
            img: profilePic3,
            review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quia maiores dolorem amet ea omnis expedita a voluptate.Voluptatem.000000",
        },
        {
            img: profilePic4,
            review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quia maiores dolorem amet ea omnis expedita a voluptate.Voluptatem.000000",
        }
    ]


    return(
        <div className="t-wrapper">
            <div className="t-heading">
                <span>Clients always get</span>
                <span>Exceptional Work</span>
                <span>From me...</span>
                <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
            </div>

            {/* slider */}
{/*
            <Swiper>
                    {clients.map((client, index)=>(
                        return(
                            <SwiperSlide key={index}>
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                            </SwiperSlide>
                        )
                    ))}
            </Swiper>*/}

        </div>
    )
}