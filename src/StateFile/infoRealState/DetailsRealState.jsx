import React ,{useState}from "react";
import { Link, useParams } from "react-router-dom";

import SliderImage from "./SliderImgs";
import SliderSlick from "../../HomeFile/SliderSlick";
import RealEstateInfo from "./RealStateInfo";
import ServicesRealState from "./ServicesRealState";
import BoxComunication from "./BoxComunication";

import { DataRealState } from "../../data";

export default function DetailsRealState() {
  const [s, setImageZoom] = useState("");
  const [open, setOpen] = useState(false);
  const { id } = useParams();

  const realEstate = DataRealState.find(
    (item) => item.id === Number(id)
  );

  if (!realEstate) {
    return (
      <p className="text-center mt-10 text-red-500">
        العقار غير موجود
      </p>
    );
  }

  return (
    <>
      {/* Header */}
      <div className="head mb-10">
        <div className="container text-white">
          <h1 className="font-semibold text-[40px] mt-[30px] mb-5">
            {realEstate.aboutHim.title}
          </h1>

          {/* Breadcrumb */}
          <p className="text-[14px]">
            <Link to="/" className="opacity-50">
              الرئيسية
            </Link>
            {" / "}
            <Link to="/realEstate" className="opacity-50">
              العقارات
            </Link>
            {" / "}
            <span>{realEstate.aboutHim.title}</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-[rgb(248,250,255)] py-[30px]">
        <div className="container">
          <div className="content flex gap-6 mb-10">
            <div className="scroll-part w-[60%]">
              <SliderImage  data={realEstate.images} open={open} setOpen={setOpen} setImageZoom={setImageZoom}/>
              <RealEstateInfo  data={realEstate.info}/>
              <ServicesRealState data={realEstate.services}/>
            </div>

            <BoxComunication data={realEstate.aboutHim}/>
          </div>

          <div>
            <h2 className="text-[40px] font-semibold text-right mb-3.5">
              عقارات مشابهة
            </h2>
            <SliderSlick />
          </div>
        </div>
      </div>

      {/* Modal for image zoom */}
      {open && (
        <div className="overlay" onClick={() => setOpen(false)} >
          <div className="modal w-[60%] m-auto h-[50%]" onClick={e => e.stopPropagation()}>
            <img src={s} alt="" className="w-full"/>
          </div>
        </div>
      )}
    </>
  );
}
