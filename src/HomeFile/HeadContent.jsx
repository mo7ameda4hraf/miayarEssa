import {React,useState } from "react";
import { Stack } from "@mui/material";
import "./style.scss"
import { Link } from "react-router-dom";



// imgs
import ContantViduo from "../photo/Frame 10.svg";

// icons
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export default function HeadContent() {
    const [open, setOpen] = useState(false);

  let primaryColor = "rgba(206, 243, 128, 1)";
  let secondaryColor = "rgba(18, 83, 70, 1)";
  return (
    <>
      <Stack
      className="Head-content"
        direction="row"
        justifyContent={"space-between "}
        sx={{ color: "white", paddingBottom: "100px", paddingTop: "100px" }}
      >
        <div>
          <div className="text w-[700px]">
            <h1 className="text-[56px] font-bold leading-[79px]">
              معيار عيسى مؤسسة متخصصة في الخدمات العقارية
            </h1>
            <p className="text-[24px] font-medium">
              نساعدك في إدارة أملاكك وتأجير وبيع العقارات بكل احترافية وموثوقية.
            </p>
          </div>
          <Stack direction={"row"} gap={4} marginTop={10} className="btns">
            <Link
              to="/Communication"
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
            </Link>
            <Link
              to="/realEstate"
              className="flex items-center  bg-white w-[171px] hover:bg-(--hover-color) text-[16px] h-10 justify-center gap-2 hover:{primaryColor}"
              style={{
                color: secondaryColor,
                fontWeight: "bold",
                "--hover-color": primaryColor,
                borderRadius: "5px",
              }}
            >
              <p className="font-bold">عدد الوحدات</p>
              <KeyboardBackspaceIcon sx={{ fontSize: "23px" }} />
            </Link>
          </Stack>
        </div>
        <div className="flex box-image items-end">
            <img src={ContantViduo} className="cursor-pointer" alt="" onClick={()=>setOpen(true)}/>
            {open && (
              <div className="overlay" onClick={() => setOpen(false)} >
                <div className="modal w-[60%] m-auto mt-[150px]" onClick={e => e.stopPropagation()}>
                  <video controls autoPlay >
                    <source src="/video.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            )}
        </div>
      </Stack>
    </>
  );
}
