import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss"

// imgs
import photo from "../photo/Frame 90-about.png"
import iconGreen from "../photo/Frame 51 (1)-about.svg"
import iconGreen2 from "../photo/Frame 51-about.svg"
import eleTrue from "../photo/elements-true.svg"

//component:
import SectionComunicate from "../HomeFile/SectionComunicate"


export default function AboutUs() {
  return( 
  <div className="about-us">
    <div className="head mb-5">
      <div className="container text-white">
              <h1 className="font-semibold text-[40px] mt-[30px] mb-5">من نحن</h1>
              <p className="text-[14px]">
                <a href="/" className="opacity-50">الرئيسية </a>
                /{" "}
                <NavLink
                  to="/AboutUs"
                  className={({ isActive }) => (isActive ? "active-page" : "")}
                >
                  من نحن
                </NavLink>
              </p>
      </div>
    </div>
    <div className="content pt-9 pb-5" style={{background: "rgb(248, 250, 255)"}}>
      <div className="container">
        <div className="flex miayar-eissa gap-[50px] items-center">
          <div className="text">
            <h1 className=" text-[32px] font-medium">معيار عيسى – مؤسسة متخصصة في الخدمات العقارية</h1>
            <p className="text-[16px] p-head">نحن في مكتب معيار عيسى نقدم حلولًا متكاملة لإدارة العقارات في السوق العقاري. نعمل بخبرة وكفاءة لضمان راحة الملاك والمستأجرين على حد سواء، من خلال خدماتنا في إدارة الأملاك، البيع، الإيجار، والتسويق العقاري. هدفنا هو أن نوفر لك تجربة سلسة واحترافية تجعل من استثمارك العقاري مصدر راحة وأمان.</p>
            <div className="flex items-center mt-10 gap-4">
              <img src={iconGreen2} alt="" />
              <div>
                <h2 className="text-[24px] font-medium">رسالتنا:</h2>
                <p>تقديم خدمات عقارية موثوقة، مبنية على الشفافية والالتزام، لنكون الجسر الذي يربط بين الملاك والمستأجرين بأفضل صورة.</p>
              </div>
            </div>
            <div className="flex items-center mt-4 gap-4">
              <img src={iconGreen} alt="" />
              <div>
                <h2 className="text-[24px] font-medium">رؤيتنا:</h2>
                <p>أن نكون الخيار الأول لإدارة وتسويق العقارات، من خلال بناء علاقات طويلة الأمد قائمة على الثقة والجودة.</p>
              </div>
            </div>
          </div>
          <img src={photo} alt="pigPhoto" />
        </div>
        <div className="why-choose-eissa">
          <h1 className="text-[32px] font-medium">لماذا تختار مكتب معيار عيسى؟</h1>
          <div className="features-eissa">
            <div>
              <img src={eleTrue} alt="" />
              <p>خبرة في إدارة وتأجير وبيع العقارات.</p>
            </div>
            <div>
              <img src={eleTrue} alt="" />
              <p>فريق عمل متخصص على دراية تامة بالسوق العقاري.</p>
            </div>
            <div>
              <img src={eleTrue} alt="" />
              <p>خدمات شاملة توفر عليك الوقت والجهد.</p>
            </div>
            <div>
              <img src={eleTrue} alt="" />
              <p>التزام كامل بخدمة عملائنا وتحقيق رضاهم.</p>
            </div>
          </div>
        </div>
        <SectionComunicate/>
      </div>
    </div>
  </div>
  )
}
