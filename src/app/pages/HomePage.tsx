import React from "react";
import { Link } from "react-router";
import { ArrowRight, FileText, Calendar, Building2, Users, Briefcase } from "lucide-react";
import { SplineViewer } from "@/app/components/SplineViewer";

export function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#005f83] via-[#004a68] to-[#005f83] px-[72px] py-[100px] relative overflow-hidden min-h-screen flex items-center">
        {/* Spline 3D Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <SplineViewer url="https://prod.spline.design/QjXhS9RSPg7tzqko/scene.splinecode"></SplineViewer>
        </div>
        
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-[#005f83]/60 z-10"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00bfff]/20 rounded-full blur-3xl z-20"></div>
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#56db46]/20 rounded-full blur-3xl z-20"></div>
        
        <div className="max-w-[1000px] mx-auto relative z-30 text-center w-full">
          <h1 className="text-[60px] font-['Poppins'] font-bold text-white leading-[72px] mb-[20px]">
            Welcome to TASC Intranet
          </h1>
          <p className="text-[20px] font-['Gotham'] text-white/90 leading-[32px] max-w-[800px] mx-auto mb-[40px]">
            Everything you need to know about what we do, how we operate, and what matters right now.
          </p>
          
          {/* Primary Actions */}
          <div className="flex gap-[20px] justify-center flex-wrap">
            <Link
              to="/newsletter"
              className="bg-gradient-to-r from-[#00bfff] to-[#56db46] rounded-[50px] px-[28px] py-[14px] text-white text-[16px] font-['Poppins'] font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-[10px]"
            >
              <FileText className="w-[20px] h-[20px]" />
              Read the latest update
            </Link>
            <Link
              to="/newsletter"
              className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-[50px] px-[28px] py-[14px] text-white text-[16px] font-['Poppins'] font-medium hover:bg-white/20 transition-all flex items-center gap-[10px]"
            >
              View company newsletter
            </Link>
            <Link
              to="/whats-happening"
              className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-[50px] px-[28px] py-[14px] text-white text-[16px] font-['Poppins'] font-medium hover:bg-white/20 transition-all flex items-center gap-[10px]"
            >
              <Calendar className="w-[20px] h-[20px]" />
              See what's happening this month
            </Link>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-[40px] left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-[8px]">
              <span className="text-white/60 text-[13px] font-['Poppins']">Scroll to explore</span>
              <svg className="w-[24px] h-[24px] text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* What TASC Does */}
      <section className="px-[72px] py-[80px] bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[48px] font-['Poppins'] font-bold bg-gradient-to-r from-[#00bfff] to-[#56db46] bg-clip-text text-transparent leading-[60px] mb-[30px] text-center">
            What we do at TASC
          </h2>
          
          <div className="max-w-[900px] mx-auto space-y-[24px]">
            <p className="text-[#005f83] text-[20px] font-['Gotham'] leading-[32px] text-center">
              TASC is a workforce and business services group operating across the UAE, KSA, and international markets.
            </p>
            <p className="text-[#005f83] text-[18px] font-['Gotham'] leading-[30px] text-center">
              We help organizations build, manage, and scale compliant workforces across staffing, outsourcing, payroll, mobility, and workforce advisory.
            </p>
            <div className="bg-[#ffe102]/20 border-l-4 border-[#ffe102] rounded-[8px] p-[24px] mt-[30px]">
              <p className="text-[#005f83] text-[18px] font-['Poppins'] font-semibold leading-[30px]">
                Our work spans multiple industries and business units, but our focus is always the same:<br />
                <span className="text-[20px]">Deliver people solutions that work in the real world, not just on paper.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Business Units */}
      <section className="px-[72px] py-[80px] bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[48px] font-['Poppins'] font-bold text-[#005f83] leading-[60px] mb-[50px] text-center">
            Our businesses
          </h2>
          
          <div className="grid grid-cols-3 gap-[30px]">
            {/* TASC Outsourcing */}
            <div className="group bg-white rounded-[24px] p-[35px] shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="w-[70px] h-[70px] bg-gradient-to-br from-[#00bfff] to-[#56db46] rounded-[20px] flex items-center justify-center mb-[20px] group-hover:scale-110 transition-transform">
                <Building2 className="w-[35px] h-[35px] text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-[24px] font-['Poppins'] font-bold text-[#005f83] mb-[12px]">
                TASC Outsourcing
              </h3>
              <p className="text-[16px] font-['Gotham'] text-gray-700 leading-[26px]">
                Staffing, outsourcing, payroll, and workforce solutions across the GCC.
              </p>
            </div>

            {/* TASC KSA */}
            <div className="group bg-white rounded-[24px] p-[35px] shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="w-[70px] h-[70px] bg-gradient-to-br from-[#ffe102] to-[#ffed66] rounded-[20px] flex items-center justify-center mb-[20px] group-hover:scale-110 transition-transform">
                <Users className="w-[35px] h-[35px] text-[#005f83]" strokeWidth={2.5} />
              </div>
              <h3 className="text-[24px] font-['Poppins'] font-bold text-[#005f83] mb-[12px]">
                TASC KSA
              </h3>
              <p className="text-[16px] font-['Gotham'] text-gray-700 leading-[26px]">
                Saudi-focused workforce, Saudization, mobility, and localization services.
              </p>
            </div>

            {/* AIQU */}
            <div className="group bg-white rounded-[24px] p-[35px] shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="w-[70px] h-[70px] bg-gradient-to-br from-[#005f83] to-[#004a68] rounded-[20px] flex items-center justify-center mb-[20px] group-hover:scale-110 transition-transform">
                <Briefcase className="w-[35px] h-[35px] text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-[24px] font-['Poppins'] font-bold text-[#005f83] mb-[12px]">
                AIQU
              </h3>
              <p className="text-[16px] font-['Gotham'] text-gray-700 leading-[26px]">
                Technology and digital talent solutions for complex transformation projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Matters Right Now */}
      <section className="px-[72px] py-[80px] bg-[#005f83]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[48px] font-['Poppins'] font-bold bg-gradient-to-r from-[#00bfff] to-[#56db46] bg-clip-text text-transparent leading-[60px] mb-[20px] text-center">
            What matters this month
          </h2>
          <p className="text-white/80 text-[16px] font-['Gotham'] text-center mb-[40px]">
            Top priorities leadership wants teams to be aware of
          </p>
          
          <div className="grid grid-cols-2 gap-[24px]">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-[20px] p-[30px] hover:bg-white/15 transition-all">
              <div className="flex items-start gap-[15px]">
                <div className="w-[50px] h-[50px] bg-[#ffe102] rounded-full flex items-center justify-center shrink-0">
                  <span className="text-[#005f83] text-[24px] font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-white text-[20px] font-['Poppins'] font-bold mb-[8px]">
                    Q1 2026 Client Renewals
                  </h3>
                  <p className="text-white/90 text-[16px] font-['Gotham'] leading-[26px]">
                    Three major client contracts up for renewal - focusing on value delivery and relationship strengthening across all touchpoints.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-[20px] p-[30px] hover:bg-white/15 transition-all">
              <div className="flex items-start gap-[15px]">
                <div className="w-[50px] h-[50px] bg-[#00bfff] rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white text-[24px] font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-white text-[20px] font-['Poppins'] font-bold mb-[8px]">
                    KSA Mobility Service Launch
                  </h3>
                  <p className="text-white/90 text-[16px] font-['Gotham'] leading-[26px]">
                    New business travel advisory service addressing tightening visa requirements - targeting enterprise clients with Saudi operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-[20px] p-[30px] hover:bg-white/15 transition-all">
              <div className="flex items-start gap-[15px]">
                <div className="w-[50px] h-[50px] bg-[#56db46] rounded-full flex items-center justify-center shrink-0">
                  <span className="text-[#005f83] text-[24px] font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-white text-[20px] font-['Poppins'] font-bold mb-[8px]">
                    Updated Labor Regulations
                  </h3>
                  <p className="text-white/90 text-[16px] font-['Gotham'] leading-[26px]">
                    New compliance requirements affecting payroll and outsourcing services - internal training sessions scheduled for all client-facing teams.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-[20px] p-[30px] hover:bg-white/15 transition-all">
              <div className="flex items-start gap-[15px]">
                <div className="w-[50px] h-[50px] bg-[#ffe102] rounded-full flex items-center justify-center shrink-0">
                  <span className="text-[#005f83] text-[24px] font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-white text-[20px] font-['Poppins'] font-bold mb-[8px]">
                    Cross-Team Collaboration Initiative
                  </h3>
                  <p className="text-white/90 text-[16px] font-['Gotham'] leading-[26px]">
                    Monthly alignment sessions between business units to share insights and identify cross-selling opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="px-[72px] py-[80px] bg-[#ffe102]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[48px] font-['Poppins'] font-bold text-[#005f83] leading-[60px] mb-[50px] text-center">
            Quick access
          </h2>
          
          <div className="grid grid-cols-3 gap-[24px]">
            <Link
              to="/newsletter"
              className="group bg-white rounded-[20px] p-[30px] shadow-md hover:shadow-xl transition-all hover:scale-105 border border-gray-100"
            >
              <div className="flex items-center gap-[15px] mb-[10px]">
                <FileText className="w-[30px] h-[30px] text-[#00bfff]" strokeWidth={2.5} />
                <h3 className="text-[20px] font-['Poppins'] font-bold text-[#005f83]">
                  Company Newsletter
                </h3>
              </div>
              <p className="text-[14px] font-['Gotham'] text-gray-600 leading-[22px]">
                Monthly updates and business insights
              </p>
              <div className="mt-[15px] flex items-center gap-[8px] text-[#00bfff] text-[14px] font-['Poppins'] font-semibold">
                View newsletters <ArrowRight className="w-[16px] h-[16px]" />
              </div>
            </Link>

            <a
              href="#"
              className="group bg-white rounded-[20px] p-[30px] shadow-md hover:shadow-xl transition-all hover:scale-105 border border-gray-100"
            >
              <div className="flex items-center gap-[15px] mb-[10px]">
                <Users className="w-[30px] h-[30px] text-[#56db46]" strokeWidth={2.5} />
                <h3 className="text-[20px] font-['Poppins'] font-bold text-[#005f83]">
                  HR Policies & Forms
                </h3>
              </div>
              <p className="text-[14px] font-['Gotham'] text-gray-600 leading-[22px]">
                Employee resources and documentation
              </p>
              <div className="mt-[15px] flex items-center gap-[8px] text-[#56db46] text-[14px] font-['Poppins'] font-semibold">
                Access resources <ArrowRight className="w-[16px] h-[16px]" />
              </div>
            </a>

            <a
              href="#"
              className="group bg-white rounded-[20px] p-[30px] shadow-md hover:shadow-xl transition-all hover:scale-105 border border-gray-100"
            >
              <div className="flex items-center gap-[15px] mb-[10px]">
                <Building2 className="w-[30px] h-[30px] text-[#005f83]" strokeWidth={2.5} />
                <h3 className="text-[20px] font-['Poppins'] font-bold text-[#005f83]">
                  Brand Assets
                </h3>
              </div>
              <p className="text-[14px] font-['Gotham'] text-gray-600 leading-[22px]">
                Logos, templates, and guidelines
              </p>
              <div className="mt-[15px] flex items-center gap-[8px] text-[#005f83] text-[14px] font-['Poppins'] font-semibold">
                View assets <ArrowRight className="w-[16px] h-[16px]" />
              </div>
            </a>

            <a
              href="#"
              className="group bg-white rounded-[20px] p-[30px] shadow-md hover:shadow-xl transition-all hover:scale-105 border border-gray-100"
            >
              <div className="flex items-center gap-[15px] mb-[10px]">
                <Briefcase className="w-[30px] h-[30px] text-[#ffe102]" strokeWidth={2.5} />
                <h3 className="text-[20px] font-['Poppins'] font-bold text-[#005f83]">
                  Sales & Marketing
                </h3>
              </div>
              <p className="text-[14px] font-['Gotham'] text-gray-600 leading-[22px]">
                Client-facing materials and resources
              </p>
              <div className="mt-[15px] flex items-center gap-[8px] text-[#ffe102] text-[14px] font-['Poppins'] font-semibold">
                Explore resources <ArrowRight className="w-[16px] h-[16px]" />
              </div>
            </a>

            <a
              href="#"
              className="group bg-white rounded-[20px] p-[30px] shadow-md hover:shadow-xl transition-all hover:scale-105 border border-gray-100"
            >
              <div className="flex items-center gap-[15px] mb-[10px]">
                <Users className="w-[30px] h-[30px] text-[#00bfff]" strokeWidth={2.5} />
                <h3 className="text-[20px] font-['Poppins'] font-bold text-[#005f83]">
                  Contact Directory
                </h3>
              </div>
              <p className="text-[14px] font-['Gotham'] text-gray-600 leading-[22px]">
                Team contacts and organizational chart
              </p>
              <div className="mt-[15px] flex items-center gap-[8px] text-[#00bfff] text-[14px] font-['Poppins'] font-semibold">
                View directory <ArrowRight className="w-[16px] h-[16px]" />
              </div>
            </a>

            <Link
              to="/whats-happening"
              className="group bg-white rounded-[20px] p-[30px] shadow-md hover:shadow-xl transition-all hover:scale-105 border border-gray-100"
            >
              <div className="flex items-center gap-[15px] mb-[10px]">
                <Calendar className="w-[30px] h-[30px] text-[#56db46]" strokeWidth={2.5} />
                <h3 className="text-[20px] font-['Poppins'] font-bold text-[#005f83]">
                  Events Calendar
                </h3>
              </div>
              <p className="text-[14px] font-['Gotham'] text-gray-600 leading-[22px]">
                Upcoming events and important dates
              </p>
              <div className="mt-[15px] flex items-center gap-[8px] text-[#56db46] text-[14px] font-['Poppins'] font-semibold">
                View calendar <ArrowRight className="w-[16px] h-[16px]" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}