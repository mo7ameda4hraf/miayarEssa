import React from "react";
import "./style.scss"
import {Link} from "react-router-dom"
//Componants
import HeadContent from "./HeadContent";
import SectionAbout from "./SectionAbout";
import SliderSlick from "./SliderSlick";
import ServicesSection from "./ServicesSection"
import SectionComunicate from "./SectionComunicate"

//icons
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";





export default function HomePage() {
  return (
    <>
      <div className="container">
        <HeadContent />
      </div>
      <div className="bg-white">
        <SectionAbout />
      </div>
      <div style={{background:"rgba(248, 250, 255, 1)",padding:"50px 0 30px"}}>
        <div className="flex container mb-2.5 justify-between items-center head">
            <h1 className="font-semibold text-[40px]">استكشف العقارات المتاحه</h1>
            <Link
                to="/realEstate"
                className="flex bg-(--main-color)
                text-(--second-color) items-center
                w-[145px] text-[16px]  h-10 justify-center gap-2"
                style={{
                    fontWeight: "bold",
                    borderRadius: "5px",
                }}
                >
                <p>عرض المزيد</p>
                <ArrowBackIosNewOutlinedIcon sx={{ fontSize: "16px" }} />
            </Link>
        </div>
        <SliderSlick />
        <ServicesSection/>
        <SectionComunicate/>
      </div>
    </>
  );
}
