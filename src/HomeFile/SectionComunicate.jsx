import React from 'react'
import { useLocation } from "react-router-dom";


//image
import Overlay from "../photo/overlay.png"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import BackImage from "../photo/3073 1.png"
import BackPhoto from "../photo/3073 1.svg"


export default function SectionComunicate() {
    let primaryColor = "rgba(206, 243, 128, 1)";
    let secondaryColor = "rgba(18, 83, 70, 1)";

    const location = useLocation();

    const backgroundImage =
    location.pathname === "/AboutUs"
    ? BackPhoto
    :location.pathname === "/" 
    ? BackImage 
    : "";

    return (
        <div className="communication container text-center " style={{backgroundImage: `url(${backgroundImage})`,borderRadius:"10px"}}>
            <div className='flex gap-4 items-center justify-center text-white' style={{backgroundImage: `url(${Overlay})`,borderRadius:"10px",height:"380px",flexDirection:"column"}}>
                <h1 className='text-[40px] font-semibold'>هل لديك عقارات وتريد ادارتها؟</h1>
                <h3 className='text-[24px] font-medium'>اذا انت في المكان الصحيح. تواصل معنا الان  <br />واطلب الخدمات التي تريدها</h3>
                <a
                    href="http://localhost:5173/Communication"
                    className="btn flex items-center w-[145px] text-[16px] h-10 justify-center gap-2 hover:{primaryColor}"
                        style={{
                        color: secondaryColor,
                        fontWeight: "bold",
                        backgroundColor: primaryColor,
                        borderRadius: "5px",
                    }}
                >
                    <p>تواصل معنا</p>
                    <KeyboardBackspaceIcon sx={{ fontSize: "23px" }} />
                </a>
            </div>
        </div>
    )
}
