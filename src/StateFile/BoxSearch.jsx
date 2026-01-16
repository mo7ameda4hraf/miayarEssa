import React, { useState } from "react";


import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';


export default function BoxSearch({showSearchFilter,setShowSearchFilter}) {

const [countRoom, setCountRoom] = useState("one");



const [formData, setFormData] = useState({
    divide: "",
    town: "",
    neighborhood: "",
    watch: "",
});

const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
};

    return(
        <div className={`search-box ${showSearchFilter?"block":"hidden"}`}>
            <div className="flex justify-between items-center">
                <h2 className="font-medium text-[24px]">فلترة البحث</h2>
                <CloseIcon className="closeIcon" onClick={() => setShowSearchFilter(false)}/>
            </div>
            <div className="mt-7">
                <label htmlFor="" className="text-[16px] font-semibold">قسم العقار</label>
                <div className="select-wrapper">
                    <select
                        name="divide"
                        value={formData.divide}
                                    onChange={handleChange}
                        >
                        
                        <option value="divide1">شقة </option>
                        <option value="divide2">منزل </option>
                        <option value="divide3">فيلا </option>
                    </select>
                    <KeyboardArrowDownIcon className="arrow"/>
                </div>
            </div>
            <div>
                <label htmlFor="" className="text-[16px] font-semibold">المدينه</label>
                <div className="select-wrapper">
                    <select
                        style={{color:"black"}}
                        name="town"
                        value={formData.town}
                        onChange={handleChange}
                        >
                        
                        <option value="town1">الخبر </option>
                        <option value="town2">الكويت </option>
                        <option value="town3">الجهراء </option>
                    </select>
                    <KeyboardArrowDownIcon className="arrow"/>
                </div>
            </div>
            <div>
                <label htmlFor="" className="text-[16px] font-semibold">الحي</label>
                <div className="select-wrapper">
                    <select
                        name="neighborhood"
                        value={formData.neighborhood}
                        onChange={handleChange}
                        >
                        
                        <option value="neighborhood1">غير محدد </option>
                        <option value="neighborhood2">غير محدد </option>
                        <option value="neighborhood3">غير محدد </option>
                    </select>
                    <KeyboardArrowDownIcon className="arrow"/>
                </div>
            </div>
            <div>
                <label className="text-[16px] font-semibold">عدد الغرف</label>
                <div className="flex justify-between count-room">
                    <div onClick={()=>{setCountRoom("one")}} className={countRoom === "one"?"check-count-room":""}>
                        <h3>1</h3>
                        <input type="radio"
                            name="rooms"
                            value="one"
                            checked={countRoom === "one"}
                            onChange={(e) => setCountRoom(e.target.value)}
                        />
                    </div>
                    <div onClick={()=>{setCountRoom("two")}} className={countRoom === "two"?"check-count-room":""}>
                        <h3>2</h3>
                        <input type="radio" value="two"
                            name="rooms"
                            checked={countRoom === "two"}
                            onChange={(e) => setCountRoom(e.target.value)}
                        />
                    </div>
                    <div onClick={()=>{setCountRoom("three")}} className={countRoom === "three"?"check-count-room":""}>
                        <h3>3</h3>
                        <input name="rooms" type="radio" value="three"
                            checked={countRoom === "three"}
                            onChange={(e) => setCountRoom(e.target.value)}/>
                    </div>
                    <div onClick={()=>{setCountRoom("four")}} className={countRoom === "four"?"check-count-room":""}>
                        <h3>4</h3>
                        <input name="rooms" type="radio" value="four"
                            checked={countRoom === "four"}
                            onChange={(e) => setCountRoom(e.target.value)}/>
                    </div>
                    <div onClick={()=>{setCountRoom("five")}} className={countRoom === "five"?"check-count-room":""}>
                        <h3>5</h3>
                        <input name="rooms" type="radio" value="five"
                            checked={countRoom === "five"}
                            onChange={(e) => setCountRoom(e.target.value)}/>
                    </div>
                    <div onClick={()=>{setCountRoom("+six")}} className={countRoom === "+six"?"check-count-room":""}>
                        <h3>6+</h3>
                        <input name="rooms" type="radio" value="+six"
                            checked={countRoom === "+six"}
                            onChange={(e) => setCountRoom(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div className=" w-full range-price">
                <label className="mt-2.5 text-[16px] font-semibold">السعر</label>
                <div className="flex justify-between mt-2.5">
                    <input type="text" placeholder="من"/>
                    <input type="text"  placeholder="الي"/>
                </div>
            </div>
            <div className=" w-full range-size">
                <label className="mt-2.5 text-[16px] font-semibold">المساحة</label>
                <div className="flex justify-between mt-2.5">
                    <input type="text" placeholder="من"/>
                    <input type="text"  placeholder="الي"/>
                </div>
            </div>
            <div className="mt-7">
                <label htmlFor="" className="text-[16px] font-semibold">الترتيب حسب</label>
                <div className="select-wrapper">
                    <select
                        style={{color:"black"}}
                        name="watch"
                        value={formData.watch}
                        onChange={handleChange}
                        >
                        
                        <option value="town1">الاكثر مشاهدة </option>
                        <option value="town2">---- </option>
                        <option value="town3">--- </option>
                    </select>
                    <KeyboardArrowDownIcon className="arrow"/>
                </div>
            </div>
            <button className="btn">بحث</button>
        </div>
    )
}