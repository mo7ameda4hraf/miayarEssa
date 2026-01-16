import React from "react";
import "./style.scss"
import { NavLink } from "react-router-dom";
import { useState } from "react";

//componants:
import Filteration from "./Filteration"
import CardsRealState from "./CardsRealState"


export default function RealEstate() {
    const [filterType, setFilterType] = useState("all");
  
  return(
    <div className="realState">
      <div className="head mb-5">
        <div className="container text-white">
          <h1 className="font-semibold text-[40px] mt-[30px] mb-5">العقارات</h1>
          <p className="text-[14px]">
            <a href="/" className="opacity-50">الرئيسية </a>
            /{" "}
            <NavLink
              to="/realEstate"
              className={({ isActive }) => (isActive ? "active-page" : "")}
            >
              العقارات
            </NavLink>
          </p>
        </div>
      </div>
      <div className="content pt-9 pb-5" style={{background: "rgb(248, 250, 255)"}}>
        <div className="container">
          <Filteration filterType={filterType} setFilterType={setFilterType}/>
          <CardsRealState filterType={filterType}/>
        </div>
      </div>
    </div>
  )
}

