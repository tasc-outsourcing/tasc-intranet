import React from "react";

export function WhyTASC() {
  return (
    <section className="px-[72px] py-[60px] bg-gradient-to-br from-[#005f83] via-[#004a68] to-[#003855] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00bfff]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ffe102]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-[1280px] mx-auto relative z-10">
        <h2 className="text-[54px] font-['Poppins'] font-semibold bg-gradient-to-r from-[#00bfff] to-[#56db46] bg-clip-text text-transparent leading-[66px] tracking-[-1.62px] mb-[15px] text-center">
          Why TASC?
        </h2>
        <p className="text-[#ffe102] text-[24px] font-['Poppins'] font-bold leading-[32px] mb-[12px] text-center">
          We are built for Saudi national hiring at scale.
        </p>
        <p className="text-white text-[18px] font-['Gotham'] leading-[28px] mb-[40px] text-center max-w-[800px] mx-auto">
          TASC supports employers with end to end delivery, not just CVs.
        </p>
        
        {/* Featured capabilities in cards */}
        <div className="grid grid-cols-3 gap-[30px] mb-[40px]">
          {/* Card 1 */}
          <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-[20px] p-[35px] border border-white/10 hover:border-[#ffe102]/50 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]">
            <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#ffe102] to-[#ffed66] rounded-[16px] flex items-center justify-center mb-[20px] shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-[30px] h-[30px]" fill="none" viewBox="0 0 24 24" stroke="#005f83" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-white text-[20px] font-['Poppins'] font-bold mb-[12px] leading-[28px]">
              Saudi talent sourcing and hiring support
            </h3>
            <p className="text-white/80 text-[15px] font-['Gotham'] leading-[22px]">
              Access to qualified Saudi candidates across all sectors and cities.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-[20px] p-[35px] border border-white/10 hover:border-[#ffe102]/50 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]">
            <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#ffe102] to-[#ffed66] rounded-[16px] flex items-center justify-center mb-[20px] shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-[30px] h-[30px]" fill="none" viewBox="0 0 24 24" stroke="#005f83" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-white text-[20px] font-['Poppins'] font-bold mb-[12px] leading-[28px]">
              Audit ready documentation and process discipline
            </h3>
            <p className="text-white/80 text-[15px] font-['Gotham'] leading-[22px]">
              Complete compliance tracking for Qiwa, Mudad, and Nitaqat.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-[20px] p-[35px] border border-white/10 hover:border-[#ffe102]/50 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]">
            <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#ffe102] to-[#ffed66] rounded-[16px] flex items-center justify-center mb-[20px] shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-[30px] h-[30px]" fill="none" viewBox="0 0 24 24" stroke="#005f83" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <h3 className="text-white text-[20px] font-['Poppins'] font-bold mb-[12px] leading-[28px]">
              Onboarding support that reduces early attrition
            </h3>
            <p className="text-white/80 text-[15px] font-['Gotham'] leading-[22px]">
              Structured programs to help new hires succeed and stay.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-[20px] p-[35px] border border-white/10 hover:border-[#ffe102]/50 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]">
            <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#ffe102] to-[#ffed66] rounded-[16px] flex items-center justify-center mb-[20px] shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-[30px] h-[30px]" fill="none" viewBox="0 0 24 24" stroke="#005f83" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-white text-[20px] font-['Poppins'] font-bold mb-[12px] leading-[28px]">
              Reporting cadence leadership teams can use
            </h3>
            <p className="text-white/80 text-[15px] font-['Gotham'] leading-[22px]">
              Real-time dashboards and insights for decision making.
            </p>
          </div>

          {/* Card 5 */}
          <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-[20px] p-[35px] border border-white/10 hover:border-[#ffe102]/50 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]">
            <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#ffe102] to-[#ffed66] rounded-[16px] flex items-center justify-center mb-[20px] shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-[30px] h-[30px]" fill="none" viewBox="0 0 24 24" stroke="#005f83" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-white text-[20px] font-['Poppins'] font-bold mb-[12px] leading-[28px]">
              Experience across regulated and complex sectors
            </h3>
            <p className="text-white/80 text-[15px] font-['Gotham'] leading-[22px]">
              Proven delivery in government, semi-government, and private sector.
            </p>
          </div>

          {/* Card 6 - LCGPA Badge */}
          <div className="group bg-gradient-to-br from-[#ffe102]/20 to-[#ffed66]/10 backdrop-blur-sm rounded-[20px] p-[35px] border-2 border-[#ffe102] transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]">
            <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#ffe102] to-[#ffed66] rounded-[16px] flex items-center justify-center mb-[20px] shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-[30px] h-[30px]" fill="none" viewBox="0 0 24 24" stroke="#005f83" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-[#ffe102] text-[20px] font-['Poppins'] font-bold mb-[12px] leading-[28px]">
              LCGPA approved
            </h3>
            <p className="text-white/90 text-[15px] font-['Gotham'] leading-[22px]">
              Certified partner with a strong focus on hiring Saudi nationals.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-white text-[18px] font-['Poppins'] mb-[20px]">
            Ready to build a compliant, scalable Saudi hiring program?
          </p>
          <button className="bg-gradient-to-r from-[#ffe102] to-[#ffed66] hover:from-[#ffed66] hover:to-[#ffe102] rounded-[50px] px-[32px] py-[16px] text-[#005f83] text-[18px] font-['Poppins'] font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            Book a readiness diagnostic
          </button>
        </div>
      </div>
    </section>
  );
}