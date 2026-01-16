
import TrueIcon from "../../photo/tick-02.svg"
export default function ServicesRealState({data}) {
    

    return (
        <div className="bg-white rounded-xl p-4 mt-4">
            <h3 className="text-[24px] font-medium mb-4">المزايا والخدمات</h3>
            <div className="grid grid-cols-2">
                {data.map((item, index) => (
                <div
                    className={`p-3 ${
                        index < data.length - 2
                            ? "border-b border-[rgba(230,230,230,1)]"
                            : ""
                        }`}
                >
                    <div className="flex gap-2.5 items-center ">
                        <img src={TrueIcon} alt="TrueIcon" />
                        <p className="text-[16px] text-[rgba(44,44,44,1)] mb-1 font-normal">{item}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}
