export default function RealEstateInfo({data}) {
  const dataCard = [
    { label: "نوع العقار", value: data.kindState },
    { label: "المساحة", value: data.area },
    { label: "الواجهة", value: data.interface },
    { label: "حالة البناء", value: data.construction },

    { label: "نوع العرض", value: data.offerType },
    { label: "التأثيث", value: data.furnishing },
    { label: "تاريخ الانشاء", value: data.dateCreation },
    { label: "نوع السكن", value: data.kindLiving },
  ];

  return (
    <div className="bg-white rounded-xl p-4 mt-4">
  <h3 className="text-[24px] font-medium mb-4">معلومات العقار</h3>

  <div className="grid grid-cols-2">
    {dataCard.map((item, index) => (
      <div
        key={index}
        className={`p-3 ${
              index < dataCard.length - 2
                ? "border-b border-[rgba(230,230,230,1)]"
                : ""
            }`}
      >
        <div className="flex justify-between w-[60%]">
          <p className="text-[16px] text-[rgba(44,44,44,1)] mb-1 font-normal">{item.label}</p>
          <p className="text-[16px] font-semibold text-[rgba(1,1,1,1)]">{item.value}</p>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}
