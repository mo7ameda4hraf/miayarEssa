import React, { useState } from "react";

//icons:
import SearchIcon from "../photo/search-01.svg"
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

//components:
import BoxSearch from "./BoxSearch";


export default function Filteration({filterType,setFilterType}) {
    

    const [showSearchFilter,setShowSearchFilter]=useState(false)
    
    const handleShowSearchFilter = () => {
        setShowSearchFilter(prev => !prev);
    };
    
    return(
        <>
            {showSearchFilter && (
            <div
                className="overlay"
                onClick={() => setShowSearchFilter(false)}
                ></div>
            )} 
            {/* --- */}
            <div className="filteration bg-white p-2.5 rounded-[5px]">
                <div className="flex container-filter justify-between items-center">

                    <div className="filter-box flex gap-3">

                        <div className="search-filter flex" onClick={handleShowSearchFilter}>
                            <ManageSearchIcon/>
                            <p>فلترة البحث</p>
                        </div>

                        <hr/>

                        <div className="flex gap-2.5">
                            <label className={filterType === "all"?"active-check-filter":""}>
                                <input
                                className="hidden"
                                    type="radio"
                                    name="filter"
                                    value="all"
                                    checked={filterType === "all"}
                                    onChange={(e) => setFilterType(e.target.value)}
                                />
                                    الكل
                            </label>
                        {/*-------------------------------- */}
                            <label className={filterType === "sale"?"active-check-filter":""}>
                                <input
                                className="hidden"
                                    type="radio"
                                    name="filter"
                                    value="sale"
                                    checked={filterType === "sale"}
                                    onChange={(e) => setFilterType(e.target.value)}
                                />
                                    للبيع
                            </label>
                        {/*-------------------------------- */}
                            <label className={filterType === "rent"?"active-check-filter":""}>
                                <input
                                className="hidden"
                                    type="radio"
                                    name="filter"
                                    value="rent"
                                    checked={filterType === "rent"}
                                    onChange={(e) => setFilterType(e.target.value)}
                                />
                                    للايجار
                            </label>
                        </div>
                    </div>

                    <div className="p-2 search flex rounded-[5px]">
                        <img src={SearchIcon} alt="SearchIcon" />
                        <input type="text" placeholder="البحث"/>
                    </div>
                </div>
            </div>
            {/* --- */}
            <BoxSearch showSearchFilter={showSearchFilter} setShowSearchFilter={setShowSearchFilter}/>
        </>
    )
}

