import React from "react";
import { NavLink } from "react-router-dom";
import ServicesSection from "../HomeFile/ServicesSection"

export default function Services() {
  return (
    <div className="services">
      <div className="head mb-5">
        <div className="container text-white">
          <h1 className="font-semibold text-[40px] mt-[30px] mb-5">الخدمات</h1>
          <p className="text-[14px]">
            <a href="/" className="opacity-50">الرئيسية </a>
            /{" "}
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "active-page" : "")}
            >
              الخدمات
            </NavLink>
          </p>
        </div>
      </div>
      <div style={{background:"rgb(248, 250, 255)",paddingBottom:"40px"}}>
        <ServicesSection/>
      </div>
    </div>
  )
}
