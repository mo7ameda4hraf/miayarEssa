
import React from "react";
import { Link } from "react-router-dom";

import LocationIcon from "../photo/locationIcon.svg";
import BedIcon from "../photo/bed.svg";
import BathroomIcon from "../photo/bathroom.svg";
import AreaIcon from "../photo/area.svg";
import PriceIcon from "../photo/priceIcon.svg";

import { DataRealState } from "../data";

export default function CardsRealState({ filterType }) {
    const filteredProducts =
        filterType === "all"
        ? DataRealState
        : DataRealState.filter((item) => item.type === filterType);

    return (
        <div className="cards pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((s) => (
            <Link
            key={s.id}
            to={`/product/${s.id}`}
            className="block"
            >
            <div className="p-3 rounded-[10px] bg-white card-realState hover:shadow-lg transition">
                {/* Image */}
                <div className="overflow-hidden">
                <img
                    className="image-realState"
                    src={s.mainimage}
                    alt={s.title}
                />
                </div>

                {/* Title */}
                <h2 className="text-[16px] font-semibold mt-6">
                {s.aboutHim.title}
                </h2>

                {/* Location */}
                <div className="flex gap-1.5 items-center mt-1.5 mb-1.5">
                <img src={LocationIcon} alt="" />
                <h3 className="text-[14px] text-gray-500">
                    {s.aboutHim.location}
                </h3>
                </div>

                {/* Features */}
                <div className="flex gap-2.5 items-center mb-1.5">
                <Feature icon={BedIcon} value={s.aboutHim.countBed} />
                <Divider />
                <Feature icon={BathroomIcon} value={s.aboutHim.countBath} />
                <Divider />
                <Feature icon={AreaIcon} value={s.aboutHim.area} />
                </div>

                {/* Price */}
                <div className="flex gap-1 items-center">
                <p className="font-semibold text-[20px]">{s.aboutHim.price}</p>
                <img src={PriceIcon} alt="" />
                </div>
            </div>
            </Link>
        ))}
        </div>
    );
}

const Feature = ({ icon, value }) => (
    <div className="flex gap-1.5 items-center">
    <img src={icon} alt="" />
    <p>{value}</p>
    </div>
);

const Divider = () => (
    <span className="w-px h-[18px] bg-[#e5e5e5]" />
);

