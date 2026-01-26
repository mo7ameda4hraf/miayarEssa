import { NavLink,Link } from "react-router-dom";
import "./style.scss"
import { useState,React } from "react";


import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import iconPhone from "../photo/Frame 118.svg"
import iconWhats from "../photo/Frame 118 (1).svg"
import iconEmail from "../photo/Frame 118 (2).svg"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export default function Communication() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
    const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
  return (
    <div className="comunicateComponant">
        <div className="head mb-5">
          <div className="container text-white">
            <h1 className="font-semibold text-[40px] mt-[30px] mb-5">تواصل معنا</h1>
            <p className="text-[14px]">
              <Link to="/" className="opacity-50">الرئيسية </Link>
              /{" "}
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? "active-page" : "")}
              >
                تواصل معنا
              </NavLink>
            </p>
          </div>
        </div>
        <div className="content">
          <div className="container flex bg-white p-5">
            <div className="form">
              <h1 className="font-medium text-[32px] mb-7">مرحبا بك! كيف يمكننا مساعدتك؟</h1>
              <form action="" onSubmit={(e) => e.preventDefault()}>
              <input name="name" value={formData.name}
                  onChange={handleChange}
                  type="text" placeholder="الاسم"/>
              <input name="phone" value={formData.phone}
              onChange={handleChange}
              type="number" placeholder="رقم الهاتف"/>
              <div className="select-wrapper">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    اختر الخدمة
                  </option>
                  <option value="service1">خدمة 1</option>
                  <option value="service2">خدمة 2</option>
                  <option value="service3">خدمة 3</option>
                </select>
                <KeyboardArrowDownIcon className="arrow"/>
              </div>
              <textarea name="message" value={formData.message} onChange={handleChange} id="" placeholder="اكتب رسالتك"></textarea>
              <button type="submit">ارسال <KeyboardBackspaceIcon/></button>
              </form>
            </div>
            <hr className="w-px text-[#e5e5e5] bg-[#e5e5e5] h-auto"/>
            <div className="concate">
              <h1 className="font-medium text-[32px] mb-7">او يمكنك التواصل معنا عن طريق</h1>
              <Link to="" className="flex gap-2.5">
                <img src={iconPhone} alt="" />
                <p>0551852088</p>
              </Link>
              <Link to="" className="flex gap-2.5">
                <img src={iconWhats} alt="" />
                <p>0551852088</p>
              </Link>
              <Link to="" className="flex gap-2.5">
                <img src={iconEmail} alt="" />
                <p>username@gmail.com</p>
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}
