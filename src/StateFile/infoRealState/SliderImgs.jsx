// SliderSlick.jsx
import React from "react";
import Slider from "react-slick";
import "./style.scss"

//icons
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import zoom from "../../photo/zoooom.svg"

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

const SliderSlick = ({data,setOpen,setImageZoom}) => {

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
    <div className="container silder slider-big-img">
        <Slider {...settings} >
            {data.map((s, i) => (
                <div key={i}>
                    <div className="relative"  >
                        <img className="img-slider" src={s} alt="" style={{width:"867px",height:"478px",borderRadius:"8px"}}/>
                        <img src={zoom} alt="" className="absolute right-4 bottom-4 cursor-pointer" onClick={()=>{setOpen(true),setImageZoom(s)}}/>
                    </div>
                </div>
            ))
            }
        </Slider>
    </div>
    );
};

export default SliderSlick;
