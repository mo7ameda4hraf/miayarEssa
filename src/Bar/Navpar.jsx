import React, { useState } from "react";
import { Stack, Button } from "@mui/material";
import { NavLink, Link } from "react-router-dom";



//icons:
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmojiTransportationOutlinedIcon from '@mui/icons-material/EmojiTransportationOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';



//images:
import logo from "../photo/logo (1).svg";
import translate from "../photo/translate.svg";
import LogoSidepar from "../photo/Frame.png"


export default function Navpar() {

  const [showSidepar,setShowSidepar]=useState(false)

 const handleShowSidepar = () => {
    setShowSidepar(prev => !prev);
  };

  let primaryColor = "rgba(206, 243, 128, 1)";
  let secondaryColor = "rgba(18, 83, 70, 1)";
  return (
    <>
      {showSidepar && (
        <div
          className="overlay"
          onClick={() => setShowSidepar(false)}
        ></div>
      )}
      <div
        className="container navbar p-[15px] backdrop-blur-[2px]"
        style={{
          background: "rgba(177, 177, 177, 0.2)",
          border: "1px solid rgba(166, 166, 166, 0.3)",
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <MenuOutlinedIcon
            onClick={handleShowSidepar}
          className="menu-icon"
            sx={{ fontSize: 25, cursor: "pointer", display: "none",color:"white" }}
          />
          <img src={logo} alt="logo" style={{ width: 170, cursor: "pointer" }} />
          <ul className="list-nave flex gap-[25px] text-white">
            <li>
              <Link to="/">الرئيسية</Link>
            </li>
            <li>
              <Link to="/realEstate">العقارات</Link>
            </li>
            <li>
              <Link to="/services">الخدمات</Link>
            </li>
            <li>
              <Link to="/AboutUs">من نحن</Link>
            </li>
            <li>
              <Link to="/Communication">تواصل معنا</Link>
            </li>
          </ul>
          <Stack direction={"row"} gap={5}>
            <button className="flex items-center gap-2 cursor-pointer">
              <p className="text-white text-[14px]">English</p>
              <img src={translate} alt="" />
            </button>
            <Link
              to="/Communication"
              className="btn-comunicate flex items-center bg-white w-[131px] hover:bg-(--hover-color) text-[16px] h-10 justify-center gap-2 hover:{primaryColor}"
              style={{
                color: secondaryColor,
                fontWeight: "bold",
                "--hover-color": primaryColor,
                borderRadius: "5px",
              }}
            >
              <p>تواصل معنا</p>
              <ArrowBackIosNewOutlinedIcon sx={{ fontSize: "16px" }} />
            </Link>
          </Stack>
        </Stack>
      </div>
      {/* ----- */}
      <div className={`sidepar  ${showSidepar?"block":"hidden"}`} onClick={() => setShowSidepar(false)}>
        <img src={LogoSidepar} alt="" />
        <ul className="list-side">

            <NavLink
                to="/"
                className={({ isActive }) =>`link ${isActive ? "active-Side-check" : ""}`}
                >
                    <HomeOutlinedIcon/>
                    <p>الرئيسية</p>
            </NavLink>

            <NavLink
                to="/realEstate"
                className={({ isActive }) =>`link ${isActive ? "active-Side-check" : ""}`}
                >
                    <EmojiTransportationOutlinedIcon/>
                    <p>العقارات</p>
            </NavLink>

            <NavLink
                to="/services"
                className={({ isActive }) =>`link ${isActive ? "active-Side-check" : ""}`}
                >
                    <DesignServicesOutlinedIcon/>
                    <p>الخدمات</p>
            </NavLink>

            <NavLink
                to="/AboutUs"
                className={({ isActive }) => `link ${isActive ? "active-Side-check" : ""}`}
                >
                    <InfoOutlinedIcon/>
                    <p>من نحن</p>
            </NavLink>

            <NavLink
                to="/Communication"
                className={({ isActive }) =>`link ${isActive ? "active-Side-check" : ""}`}
                >
                    <EmailOutlinedIcon/>
                    <p>تواصل معنا</p>
            </NavLink>

        
        </ul>
      </div>
    </>
  );
}
