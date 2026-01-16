import React from 'react'
import "./style.scss"


//images:
import PhotoCard1 from "../photo/Frame 51.svg"
import PhotoCard2 from "../photo/Frame 51 (1).svg"
import PhotoCard3 from "../photo/Frame 51 (2).svg"


export default function ServicesSection() {
  return (
    <div className="container section-services pt-[100px]">
        <h1 className="font-semibold text-[40px] text-center mb-7">ما هي خدماتنا؟</h1>
        <div className="flex card-services">
            <div>
                <img src= {PhotoCard1} alt="PhotoCard1" />
                <h2>وساطة وتسويق عقاري</h2>
                <p>نوفر لك الدعم الكامل في عمليات البيع والشراء، ابتداءً من التسويق والوصول للمشترين المناسبين وحتى إتمام الإجراءات القانونية بكل سهولة وشفافية.</p>
            </div>
            <div>
                <img src= {PhotoCard2} alt="PhotoCard2" />
                <h2>ادارة املاك عقارية</h2>
                <p>نقوم بإدارة عقارك بكل احترافية، من متابعة المستأجرين وتحصيل الإيجارات إلى العناية بالصيانة الدورية، لضمان راحة بالك وزيادة قيمة استثمارك.</p>
            </div>
            <div>
                <img src= {PhotoCard3} alt="PhotoCard3" />
                <h2>صيانة العقارات</h2>
                <p>فريقنا المتخصص يهتم بجميع أعمال الصيانة والإصلاحات لضمان بقاء عقارك في أفضل حالة، مع إشراف دوري يحافظ على جودة وأمان العقار.</p>
            </div>
        </div>
    </div>
  )
}
