// SliderSlick.jsx
import React from "react";
import Slider from "react-slick";
import "./style.scss"
import { Link } from "react-router-dom";
import {DataRealState} from "../data";

//icons
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// photos
import LocationIcon from "../photo/locationIcon.svg"
import BedIcon from "../photo/bed.svg"
import BathroomIcon from "../photo/bathroom.svg"
import AreaIcon from "../photo/area.svg"
import PriceIcon from "../photo/priceIcon.svg"




function NextArrow(props) {
  const {  onClick } = props;
  return (
    <div onClick={onClick}
        className={`arrow-slider slick-next`}
        aria-label="Previous" style={{ transform: "rotate(180deg)"}}>       
        <KeyboardBackspaceIcon/>
    </div>
    
  );
}

function PrevArrow(props) {
  const {  onClick } = props;
  return (
    <div onClick={onClick}
        className={` arrow-slider slick-prev `}
        aria-label="Previous" >       
        <KeyboardBackspaceIcon/>
    </div>
  );
}
const SliderSlick = () => {

    // let primaryColor = "rgba(206, 243, 128, 1)";


    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,       
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
            slidesToShow: 2,
            },
        },
        ],
        accessibility: true,
    };

    return (
    <div className="container silder">
        <Slider {...settings} >
            {DataRealState.map((s, i) => (
                <Link
                    key={s.id}
                    to={`/product/${s.id}`}
                    className="block"
                >
                <div className="parent-card p-2.5 pb-7"  >
                {/* Card */}
                <div className="p-3 rounded-[10px] bg-white card-realState">
                    {/* Image RealState */}
                    <div style={{overflow:"hidden"}}>
                        <img
                        className="image-realState"
                            src={s.mainimage}
                            alt={s.aboutHim.title || `slide-${i}`}
                            style={{ width: "100%", height: "auto", borderRadius: 2, display: "block" }}
                        />
                    </div>
                    {/* Title RealState */}
                    <h2 className="text-[16px] font-semibold text-[rgba(44, 44, 44, 1)] mt-6 title"> {s.aboutHim.title}</h2>
                    {/* location RealState */}
                    <div className="flex gap-1.5 items-center mt-1.5 mb-1.5">
                        <img src={LocationIcon} alt="" />
                        <h3 className="text-[rgba(108, 108, 108, 1)] text-[14px] font-normal"> {s.aboutHim.location}</h3>
                    </div>
                    {/* Features RealState*/}
                    <div className="flex gap-2.5 items-center mb-1.5 features-realState">
                        <div className="flex gap-1.5 items-center">
                            <img src={BedIcon} alt="" />
                            <p>{s.aboutHim.countBed}</p>
                        </div>
                        <hr className="bg-[#e5e5e5] w-px h-[18px] text-[#e5e5e5]"/>
                        <div className="flex gap-1.5 items-center">
                            <img src={BathroomIcon} alt="" />
                            <p>{s.aboutHim.countBath}</p>
                        </div>
                        <hr className="bg-[#e5e5e5] w-px h-[18px] text-[#e5e5e5]" />
                        <div className="flex gap-1.5 items-center">
                            <img src={AreaIcon} alt="" />
                            <p>{s.aboutHim.area}</p>
                        </div>
                    </div>
                    {/* Price RealState */}
                    <div className="flex gap-1">
                        <p className="font-semibold text-[20px]">{s.aboutHim.price}</p>
                        <img src={PriceIcon} alt="" />
                    </div>
                </div>
                </div>
                </Link>
            ))
            }
        </Slider>
    </div>
    );
};

export default SliderSlick;
