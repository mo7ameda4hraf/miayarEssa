// SliderSlick.jsx
import React from "react";
import Slider from "react-slick";
import "./style.scss"

//icons
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
    const {  onClick } = props;
    return (
        <div onClick={onClick}
            className={`arrow-slider next`}
            aria-label="Previous" style={{ transform: "rotate(180deg)"}}>       
            <KeyboardBackspaceIcon/>
        </div>
        
    );
}

function PrevArrow(props) {
    const {  onClick } = props;
    return (
        <div onClick={onClick}
            className={` arrow-slider prev `}
            aria-label="Previous" >       
            <KeyboardBackspaceIcon/>
        </div>
    );
}

const SliderSlick = ({data}) => {

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,       
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            },
        },
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 1,
            },
        },
        ],
        accessibility: true,
    };

    return (
    <div className="container silder">
        <Slider {...settings} >
            {data.map((s, i) => (
                <div key={i} className=""  >
                <img src={s} alt="" style={{width:"867px",height:"478px",borderRadius:"8px"}}/>
                </div>
            ))
            }
        </Slider>
    </div>
    );
};

export default SliderSlick;
