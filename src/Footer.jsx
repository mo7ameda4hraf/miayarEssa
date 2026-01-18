import React from 'react'

//image
import LogoFooter from "./photo/Frame.png"
import FacebookIcon from "./photo/Icon.svg"
import TictokIcon from "./photo/tiktok.svg"
import InstagramIcon from "./photo/instagram (1).svg"
import LinkedInIcon from "./photo/linkedin-02.svg"
import MailIcon from "./photo/mail-02.svg"
import PhoneIcon from "./photo/phoneicon.svg"
export default function Footer() {
  return (
    <div className="footer">
      <div className='content'>
          <img src={LogoFooter} alt="LogoFooter" />
        <ul className="flex gap-[25px]">
          <li>
            <a href="http://localhost:5173/">الرئيسية</a>
          </li>
          <li>
            <a href="http://localhost:5173/realEstate">العقارات</a>
          </li>
          <li>
            <a href="http://localhost:5173/services">الخدمات</a>
          </li>
          <li>
            <a href="http://localhost:5173/AboutUs">من نحن</a>
          </li>
          <li>
            <a href="http://localhost:5173/Communication">تواصل معنا</a>
          </li>
        </ul>
        <div className='flex gap-3 comunicate-in-footer'>
            <div className="flex gap-2.5 items-center">
                <img src={PhoneIcon} alt="" />
                <p className='text-[14px]'>0551852088</p>
            </div>
            <hr className='bg-gray-400 w-px h-5'/>
            <div className="flex gap-2.5 items-center">
                <img src={MailIcon} alt="" />
                <p className='text-[14px]'>username@gmail.com</p>
            </div>
            <hr className='bg-gray-400 w-px h-5'/>
            <div className="flex gap-2.5 items-center">
                <img src={TictokIcon} alt="TictokIcon" />
                <img src={InstagramIcon} alt="InstagramIcon" />
                <img src={LinkedInIcon} alt="LinkedInIcon" />
                <img src={FacebookIcon} alt="FacebookIcon" />
            </div>
        </div>
        <hr className='w-full h-px text-gray-400'/>
        <div className="flex gap-3">
            <p>رقم السجل الموحد 7030755339</p>
            <hr className='bg-gray-400 w-px h-5'/>
            <p>رخصة رقم 2200004688</p>
            <hr className='bg-gray-400 w-px h-5'/>
            <p>رخصة رقم 12000041563</p>
        </div>
      </div>

    </div>
  )
}
