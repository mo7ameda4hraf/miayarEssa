import React from 'react'


//photo:
import LocationIcon from "../../photo/locationIcon.svg"
import BedIcon from "../../photo/bed.svg"
import BathroomIcon from "../../photo/bathroom.svg"
import AreaIcon from "../../photo/area.svg"
import PriceIcon from "../../photo/priceIcon.svg"
import WhatsappIcon from "../../photo/Frame 66.svg"
import ShareIcon from "../../photo/Frame 65.svg"

export default function BoxComunication({data}) {
  return (
    <div className='p-6 rounded-[10px] box-comunicate bg-white' style={{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.08)"}}>
      {/* Title RealState */}
      <h2 className="text-[32px] font-medium  mt-6 title">{data.title}</h2>
      {/* location RealState */}
      <div className="flex gap-1.5 items-center mt-1.5 mb-1.5">
        <img src={LocationIcon} alt="LocationIcon" />
        <h3 className=" text-[16px] font-normal" style={{color:"rgba(108, 108, 108, 1)"}}>{data.location}</h3>
      </div>
      {/* Features RealState*/}
      <div className="flex gap-2.5 items-center mb-1.5 features-realState">
        <div className="flex gap-1.5 items-center ">
          <img src={BedIcon} alt="BedIcon" />
          <p className='text-[20px]'>{data.countBed}</p>
        </div>
        <hr className="bg-[#e5e5e5] w-px h-[18px]  text-[#e5e5e5]"/>
        <div className="flex gap-1.5 items-center ">
          <img src={BathroomIcon} alt="BathroomIcon" />
          <p className='text-[20px]'>{data.countBath}</p>
        </div>
        <hr className="bg-[#e5e5e5] w-px h-[18px]  text-[#e5e5e5]" />
        <div className="flex gap-1.5 items-center ">
          <img src={AreaIcon} alt="AreaIcon" />
          <p className='text-[20px]'>{data.area}</p>
        </div>
      </div>
      {/* الترخيص */}
      <div className="flex gap-1 mb-7">
        <p className="font-semibold text-[16px]">الترخيص لاعلاني:</p>
        <p className="font-semibold text-[16px]">7100120631</p>
      </div>
      {/* Price RealState */}
      <div className="flex gap-1">
        <p className="font-medium text-[32px]">{data.price}</p>
        <img src={PriceIcon} alt="PriceIcon" />
      </div>
      <div className="flex justify-between">
        <a className='comunicate-btn w-[73%] bg-(--main-color) rounded-sm' href="">تواصل للاستفسار</a>
        <a href="">
          <img src={WhatsappIcon} alt="whatsapp" />
        </a>
        <button>
          <img src={ShareIcon} alt="share" />
        </button>
      </div>
  </div>
  )
}
