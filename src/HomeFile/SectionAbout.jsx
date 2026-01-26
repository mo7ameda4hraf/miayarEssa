import React from "react";
import { Stack } from "@mui/material";
import "./style.scss"
import { Link } from "react-router-dom";

// imgs
import img1 from "../photo/Frame 26.svg";
import img2 from "../photo/Frame 27.svg";
import img3 from "../photo/Frame 28.svg";
import img4 from "../photo/Frame 29.svg";

// icons
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

export default function SectionAbout() {
  let primaryColor = "rgba(206, 243, 128, 1)";
  let secondaryColor = "rgba(18, 83, 70, 1)";
  return ( 
    <div className="pt-20 pb-20 section-about">
      <Stack
      className="container"
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <div className="text w-[600px]">
          <h3
            className="text-[24px] font-medium"
            style={{ color: secondaryColor }}
          >
            نبذة عن الشركة
          </h3>
          <h2 className="text-[32px] font-medium">
            "معيار عيسى" مؤسسة متخصصة في إدارة الأملاك وتقديم الحلول العقارية
            المتكاملة، نعمل بخبرة ومعرفة عميقة بالسوق لنكون شريكك الموثوق في
            الاستثمار العقاري.
          </h2>
          <p
            className="text-[14px] font-medium "
            style={{ color: "rgba(108, 108, 108, 1)", marginTop: "30px" }}
          >
            نحرص على تقديم خدماتنا بأعلى معايير الجودة والشفافية، بدءًا من إدارة
            وصيانة الأملاك، مرورًا بعمليات البيع والشراء، وصولًا إلى تقديم
            الاستشارات العقارية التي تضمن لك أفضل القرارات الاستثمارية.
          </p>
          <Link
            to="/AboutUs"
            className="btn-about flex items-center w-[145px] text-[16px] hover:bg-(--hover-color) h-10 justify-center gap-2 hover:{primaryColor}"
            style={{
              marginTop: "23px",
              color: secondaryColor,
              "--hover-color": primaryColor,
              border: "1px solid rgba(18, 83, 70, 1)",
              fontWeight: "bold",
              borderRadius: "5px",
            }}
          >
            <p>عرض المزيد</p>
            <ArrowBackIosNewOutlinedIcon sx={{ fontSize: "16px" }} />
          </Link>
        </div>
        <Stack direction={"row"} gap={2}>
          <div>
            <img src={img2} alt="img2" className=" mb-4" />
            <img src={img1} alt="img1" />
          </div>
          <div>
            <img src={img3} alt="img3" className=" mb-4" />
            <img src={img4} alt="img4" />
          </div>
        </Stack>
      </Stack>
    </div>
  );
}
