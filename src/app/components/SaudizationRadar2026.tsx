import React, { useState } from "react";
import imgTascLogo from "figma:asset/0399c2ba8c161094279ce73755571815f5821b3f.png";
import imgHeroBackground from "figma:asset/9962e53636cd98d4becf3c807167abc6855c6f7f.png";
import { Counter } from "@/app/components/Counter";
import { WhyTASC } from "@/app/components/WhyTASC";

interface FormData {
  firstName: string;
  lastName: string;
  workEmail: string;
  company: string;
  jobTitle: string;
  sector: string;
  teamSize: string;
  affectedFunction: string;
}

export function SaudizationRadar2026() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    workEmail: "",
    company: "",
    jobTitle: "",
    sector: "",
    teamSize: "",
    affectedFunction: "",
  });

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We will send the report to your inbox.");
  };

  return (
    <div className="w-full bg-white">
      {/* Header / Navigation */}
      <nav className="bg-white px-[72px] py-[25px] flex items-center justify-between shadow-sm">
        <div className="h-[40px] w-auto">
          <img alt="TASC Logo" className="h-full w-auto object-contain" src={imgTascLogo} />
        </div>
        <div className="flex gap-[20px] items-center text-[#005f83] text-[16px] font-['Poppins']">
          <p className="cursor-pointer hover:text-[#00bfff] transition-colors">Candidates</p>
          <p className="cursor-pointer hover:text-[#00bfff] transition-colors">Employers</p>
          <p className="cursor-pointer hover:text-[#00bfff] transition-colors">About Us</p>
          <p className="cursor-pointer hover:text-[#00bfff] transition-colors">Insights</p>
        </div>
        <div className="flex gap-[10px]">
          <button className="border border-[#005f83] rounded-[50px] px-[24px] py-[14px] text-[#005f83] text-[16px] font-['Poppins'] hover:bg-[#005f83] hover:text-white transition-colors">
            Register CV
          </button>
          <button className="bg-[#005f83] rounded-[50px] px-[24px] py-[14px] text-white text-[16px] font-['Poppins'] hover:bg-[#004a68] transition-colors">
            Request Proposal
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#005f83] px-[72px] py-[70px] text-center relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img alt="Riyadh Skyline" className="w-full h-full object-cover" src={imgHeroBackground} />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-[1062px] mx-auto relative z-10">
          <h1 className="text-[63px] font-['Poppins'] font-medium text-white leading-[88px] tracking-[-1.89px] mb-[15px] drop-shadow-lg">
            Saudization Radar 2026
          </h1>
          <p className="text-[18px] font-['Gotham'] text-white leading-[24px] tracking-[-0.18px] max-w-[748px] mx-auto mb-[30px] drop-shadow-md">
            A practical report for HR leaders and executives. What changed, what is next, and how to stay compliant without slowing the business.
          </p>
          <div className="flex gap-[20px] justify-center">
            <button className="bg-gradient-to-r from-[#00bfff] to-[#56db46] rounded-[50px] px-[24px] py-[14px] text-white text-[16px] font-['Poppins'] shadow-lg hover:shadow-xl transition-shadow">
              Download the report
            </button>
            <button className="border-2 border-white rounded-[50px] px-[24px] py-[14px] text-white text-[16px] font-['Poppins'] hover:bg-white/20 transition-colors backdrop-blur-sm">
              Book a readiness diagnostic
            </button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-[#ffe102] px-[80px] py-[30px]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center">
            <p className="text-[#005f83] text-[18px] font-['Poppins'] font-semibold leading-[28px]">
              Built by TASC, a premium workforce partner for government, semi government, and private sector employers.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="px-[72px] py-[60px] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-[54px] font-['Poppins'] font-semibold bg-gradient-to-r from-[#00bfff] to-[#56db46] bg-clip-text text-transparent leading-[66px] tracking-[-1.62px] mb-[15px] text-center">
            The problem
          </h2>
          <p className="text-[#005f83] text-[20px] font-['Gotham'] text-center max-w-[900px] mx-auto mb-[35px] leading-[32px]">
            Saudization is now an operating priority, not a last minute hiring task. It impacts revenue roles, procurement, and service delivery.
          </p>
          
          <div className="bg-gradient-to-br from-[#005f83] via-[#004a68] to-[#005f83] rounded-[32px] p-[45px] shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#00bfff]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-[#56db46]/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-[15px] mb-[30px]">
                <div className="w-[50px] h-[50px] bg-[#ffe102] rounded-full flex items-center justify-center">
                  <svg className="w-[25px] h-[25px]" fill="none" viewBox="0 0 24 24" stroke="#005f83" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-[#ffe102] text-[24px] font-['Poppins'] font-bold">
                  This report helps you avoid:
                </h3>
              </div>
              
              <div className="grid grid-cols-1 gap-[20px]">
                <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-[20px] p-[30px] border border-white/10 hover:border-[#ffe102]/50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <div className="flex gap-[25px] items-start">
                    <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#ffe102] to-[#ffed66] rounded-[16px] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-[30px] h-[30px]" fill="none" viewBox="0 0 24 24" stroke="#005f83" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white text-[22px] font-['Poppins'] font-bold mb-[8px]">
                        Starting too late
                      </h4>
                      <p className="text-white/90 text-[18px] font-['Gotham'] leading-[28px]">
                        Last-minute scrambling leads to premium costs, rushed decisions, and compliance shortcuts that create future risk.
                      </p>
                      <div className="mt-[12px] flex items-center gap-[10px]">
                        <div className="h-[2px] w-[30px] bg-gradient-to-r from-[#ffe102] to-transparent"></div>
                        <span className="text-[#ffe102] text-[16px] font-['Poppins'] font-semibold">Leads to cost spikes</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-[20px] p-[30px] border border-white/10 hover:border-[#ffe102]/50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <div className="flex gap-[25px] items-start">
                    <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#ffe102] to-[#ffed66] rounded-[16px] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-[30px] h-[30px]" fill="none" viewBox="0 0 24 24" stroke="#005f83" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white text-[22px] font-['Poppins'] font-bold mb-[8px]">
                        Hiring without retention
                      </h4>
                      <p className="text-white/90 text-[18px] font-['Gotham'] leading-[28px]">
                        Recruiting without onboarding support creates a revolving door. High turnover doubles your hiring burden.
                      </p>
                      <div className="mt-[12px] flex items-center gap-[10px]">
                        <div className="h-[2px] w-[30px] bg-gradient-to-r from-[#ffe102] to-transparent"></div>
                        <span className="text-[#ffe102] text-[16px] font-['Poppins'] font-semibold">Leads to churn rates</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-[20px] p-[30px] border border-white/10 hover:border-[#ffe102]/50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <div className="flex gap-[25px] items-start">
                    <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#ffe102] to-[#ffed66] rounded-[16px] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-[30px] h-[30px]" fill="none" viewBox="0 0 24 24" stroke="#005f83" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white text-[22px] font-['Poppins'] font-bold mb-[8px]">
                        Reporting gaps during audits or bids
                      </h4>
                      <p className="text-white/90 text-[18px] font-['Gotham'] leading-[28px]">
                        Missing documentation during procurement reviews or ministry audits can disqualify you from opportunities.
                      </p>
                      <div className="mt-[12px] flex items-center gap-[10px]">
                        <div className="h-[2px] w-[30px] bg-gradient-to-r from-[#ffe102] to-transparent"></div>
                        <span className="text-[#ffe102] text-[16px] font-['Poppins'] font-semibold">Leads to compliance risk</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What you will get */}
      <section className="px-[72px] py-[60px] bg-gradient-to-br from-[#005f83] via-[#004a68] to-[#003855] relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#00bfff]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#56db46]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-[1280px] mx-auto relative z-10">
          <h2 className="text-[54px] font-['Poppins'] font-semibold bg-gradient-to-r from-[#00bfff] to-[#56db46] bg-clip-text text-transparent leading-[66px] tracking-[-1.62px] mb-[15px] text-center">
            What you will get in this report
          </h2>
          <p className="text-white text-[20px] font-['Gotham'] text-center max-w-[800px] mx-auto mb-[40px] leading-[32px]">
            Inside Saudization Radar 2026 - actionable insights and practical frameworks to keep you ahead of compliance requirements.
          </p>
          <div className="grid grid-cols-2 gap-[30px]">
            {/* Item 1 */}
            <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-[20px] p-[35px] border border-white/10 hover:border-[#00bfff]/50 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]">
              <div className="flex gap-[20px] items-start">
                <div className="w-[56px] h-[56px] bg-gradient-to-br from-[#00bfff] to-[#56db46] rounded-[14px] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-[28px] h-[28px]" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-white text-[19px] font-['Poppins'] font-bold mb-[10px] leading-[26px]">
                    Clear timeline of key localization decisions
                  </h4>
                  <p className="text-white/80 text-[16px] font-['Gotham'] leading-[24px]">
                    Know exactly when new requirements take effect and plan your hiring calendar accordingly.
                  </p>
                </div>
              </div>
            </div>
            {/* Item 2 */}
            <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-[20px] p-[35px] border border-white/10 hover:border-[#00bfff]/50 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]">
              <div className="flex gap-[20px] items-start">
                <div className="w-[56px] h-[56px] bg-gradient-to-br from-[#00bfff] to-[#56db46] rounded-[14px] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-[28px] h-[28px]" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-white text-[19px] font-['Poppins'] font-bold mb-[10px] leading-[26px]">
                    Role-specific impact analysis
                  </h4>
                  <p className="text-white/80 text-[16px] font-['Gotham'] leading-[24px]">
                    Understand what changes mean for commercial, procurement, engineering, and sector-specific roles.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-[20px] p-[35px] border border-white/10 hover:border-[#00bfff]/50 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]">
              <div className="flex gap-[20px] items-start">
                <div className="w-[56px] h-[56px] bg-gradient-to-br from-[#00bfff] to-[#56db46] rounded-[14px] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-[28px] h-[28px]" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-white text-[19px] font-['Poppins'] font-bold mb-[10px] leading-[26px]">
                    Salary threshold blind spots
                  </h4>
                  <p className="text-white/80 text-[16px] font-['Gotham'] leading-[24px]">
                    Identify the compensation details that can break your compliance counting before they become issues.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-[20px] p-[35px] border border-white/10 hover:border-[#00bfff]/50 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]">
              <div className="flex gap-[20px] items-start">
                <div className="w-[56px] h-[56px] bg-gradient-to-br from-[#00bfff] to-[#56db46] rounded-[14px] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-[28px] h-[28px]" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-white text-[19px] font-['Poppins'] font-bold mb-[10px] leading-[26px]">
                    90-day execution plan
                  </h4>
                  <p className="text-white/80 text-[16px] font-['Gotham'] leading-[24px]">
                    A ready-to-run plan HR can implement immediately without disrupting day-to-day operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 5 */}
            <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-[20px] p-[35px] border border-white/10 hover:border-[#00bfff]/50 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]">
              <div className="flex gap-[20px] items-start">
                <div className="w-[56px] h-[56px] bg-gradient-to-br from-[#00bfff] to-[#56db46] rounded-[14px] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-[28px] h-[28px]" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-white text-[19px] font-['Poppins'] font-bold mb-[10px] leading-[26px]">
                    180-day talent pipeline strategy
                  </h4>
                  <p className="text-white/80 text-[16px] font-['Gotham'] leading-[24px]">
                    Build sustainable hiring practices that reduce churn and eliminate costly rehiring cycles.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 6 */}
            <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-[20px] p-[35px] border border-white/10 hover:border-[#00bfff]/50 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]">
              <div className="flex gap-[20px] items-start">
                <div className="w-[56px] h-[56px] bg-gradient-to-br from-[#00bfff] to-[#56db46] rounded-[14px] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-[28px] h-[28px]" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-white text-[19px] font-['Poppins'] font-bold mb-[10px] leading-[26px]">
                    Partner selection scorecard
                  </h4>
                  <p className="text-white/80 text-[16px] font-['Gotham'] leading-[24px]">
                    Evaluate workforce delivery partners with criteria that matter for compliance and scale.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA at bottom */}
          <div className="mt-[40px] text-center">
            <button className="bg-gradient-to-r from-[#ffe102] to-[#ffed66] hover:from-[#ffed66] hover:to-[#ffe102] rounded-[50px] px-[32px] py-[16px] text-[#005f83] text-[18px] font-['Poppins'] font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Download the full report
            </button>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-[72px] py-[60px] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-[54px] font-['Poppins'] font-semibold bg-gradient-to-r from-[#00bfff] to-[#56db46] bg-clip-text text-transparent leading-[66px] tracking-[-1.62px] mb-[20px] text-center">
            Who it is for
          </h2>
          <p className="text-[#005f83] text-[20px] font-['Gotham'] font-semibold leading-[32px] mb-[30px] text-center">
            This report is for you if you are:
          </p>
          <div className="grid grid-cols-3 gap-[30px] mb-[30px]">
            <div className="bg-gradient-to-br from-[#00bfff]/10 to-[#56db46]/10 border-2 border-[#00bfff]/30 rounded-[20px] p-[30px] text-center">
              <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#00bfff] to-[#56db46] rounded-full flex items-center justify-center mx-auto mb-[20px]">
                <svg className="w-[30px] h-[30px]" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="text-[#005f83] text-[16px] font-['Poppins'] font-semibold leading-[24px]">
                CHRO, HR Director, Head of Talent, Head of People
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#00bfff]/10 to-[#56db46]/10 border-2 border-[#00bfff]/30 rounded-[20px] p-[30px] text-center">
              <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#00bfff] to-[#56db46] rounded-full flex items-center justify-center mx-auto mb-[20px]">
                <svg className="w-[30px] h-[30px]" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-[#005f83] text-[16px] font-['Poppins'] font-semibold leading-[24px]">
                CEO, COO, CFO, business unit leader
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#00bfff]/10 to-[#56db46]/10 border-2 border-[#00bfff]/30 rounded-[20px] p-[30px] text-center">
              <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#00bfff] to-[#56db46] rounded-full flex items-center justify-center mx-auto mb-[20px]">
                <svg className="w-[30px] h-[30px]" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="text-[#005f83] text-[16px] font-['Poppins'] font-semibold leading-[24px]">
                Head of Procurement, commercial leader, operations leader
              </p>
            </div>
          </div>
          <div className="bg-[#ffe102]/20 border-l-4 border-[#ffe102] rounded-[12px] p-[25px]">
            <p className="text-[#005f83] text-[18px] font-['Poppins'] font-semibold leading-[28px]">
              And you employ Saudi nationals, or need to scale Saudi hiring in 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Why TASC */}
      <WhyTASC />

      {/* Proof Section */}
      <section className="px-[72px] py-[60px] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-[54px] font-['Poppins'] font-semibold bg-gradient-to-r from-[#00bfff] to-[#56db46] bg-clip-text text-transparent leading-[66px] tracking-[-1.62px] mb-[20px] text-center">
            Proof from a national retail rollout
          </h2>
          <div className="bg-gradient-to-br from-[#005f83]/5 to-[#00bfff]/10 rounded-[24px] p-[30px] mb-[35px] border-2 border-[#00bfff]/20">
            <p className="text-[#005f83] text-[26px] font-['Poppins'] font-bold leading-[38px] text-center">
              PIF backed retail startup needed 200+ Saudi nationals in 6 weeks, with no room for Saudization violations.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-[40px] mb-[35px]">
            <div className="text-center group">
              <Counter
                end={205}
                className="text-[56px] font-['Poppins'] font-bold bg-gradient-to-r from-[#00bfff] to-[#56db46] bg-clip-text text-transparent mb-[10px] group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-[16px] font-['Poppins'] text-[#005f83]">Saudi nationals onboarded</p>
            </div>
            <div className="text-center">
              <p className="text-[56px] font-['Poppins'] font-bold bg-gradient-to-r from-[#00bfff] to-[#56db46] bg-clip-text text-transparent mb-[10px] hover:scale-110 transition-transform duration-300">6 weeks</p>
              <p className="text-[16px] font-['Poppins'] text-[#005f83]">delivery</p>
            </div>
            <div className="text-center">
              <p className="text-[56px] font-['Poppins'] font-bold bg-gradient-to-r from-[#00bfff] to-[#56db46] bg-clip-text text-transparent mb-[10px] hover:scale-110 transition-transform duration-300">12+ cities</p>
              <p className="text-[16px] font-['Poppins'] text-[#005f83]">covered</p>
            </div>
            <div className="text-center group">
              <Counter
                end={100}
                suffix="%"
                className="text-[56px] font-['Poppins'] font-bold bg-gradient-to-r from-[#00bfff] to-[#56db46] bg-clip-text text-transparent mb-[10px] group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-[16px] font-['Poppins'] text-[#005f83]">compliant on Qiwa, Mudad, Nitaqat</p>
            </div>
            <div className="text-center group">
              <Counter
                end={0}
                className="text-[56px] font-['Poppins'] font-bold bg-gradient-to-r from-[#00bfff] to-[#56db46] bg-clip-text text-transparent mb-[10px] group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-[16px] font-['Poppins'] text-[#005f83]">launch delays</p>
            </div>
            <div className="text-center">
              <p className="text-[56px] font-['Poppins'] font-bold bg-gradient-to-r from-[#00bfff] to-[#56db46] bg-clip-text text-transparent mb-[10px] hover:scale-110 transition-transform duration-300">&lt;3%</p>
              <p className="text-[16px] font-['Poppins'] text-[#005f83]">dropout rate</p>
            </div>
          </div>
          <div className="flex gap-[20px] justify-center">
            <button className="border border-[#005f83] rounded-[50px] px-[24px] py-[14px] text-[#005f83] text-[16px] font-['Poppins'] hover:bg-[#005f83] hover:text-white transition-colors">
              Read the retail case study
            </button>
            <button className="bg-gradient-to-r from-[#00bfff] to-[#56db46] rounded-[50px] px-[24px] py-[14px] text-white text-[16px] font-['Poppins'] hover:shadow-xl transition-shadow">
              Book a readiness diagnostic
            </button>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-[72px] py-[50px] bg-[#ffe102]">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-2 gap-[50px] items-center">
            {/* Left Column - Text */}
            <div>
              <h2 className="text-[38px] font-['Poppins'] font-semibold text-[#005f83] leading-[46px] tracking-[-1.14px] mb-[15px]">
                Get the report
              </h2>
              <p className="text-[#005f83] text-[16px] font-['Gotham'] leading-[24px] mb-[20px]">
                Fill in your details and we will send the PDF to your inbox.
              </p>
              <div className="space-y-[10px]">
                <div className="flex items-center gap-[10px]">
                  <div className="w-[20px] h-[20px] bg-[#005f83] rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-[12px] h-[12px]" fill="none" viewBox="0 0 24 24" stroke="#ffe102" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#005f83] text-[14px] font-['Poppins']">
                    Instant PDF delivery to your inbox
                  </p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <div className="w-[20px] h-[20px] bg-[#005f83] rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-[12px] h-[12px]" fill="none" viewBox="0 0 24 24" stroke="#ffe102" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#005f83] text-[14px] font-['Poppins']">
                    No spam, just relevant updates
                  </p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <div className="w-[20px] h-[20px] bg-[#005f83] rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-[12px] h-[12px]" fill="none" viewBox="0 0 24 24" stroke="#ffe102" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#005f83] text-[14px] font-['Poppins']">
                    Ready-to-use frameworks and timelines
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-[16px] p-[30px] shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-[12px]">
                <div className="grid grid-cols-2 gap-[12px]">
                  <div>
                    <label className="block text-[#005f83] text-[12px] font-['Poppins'] mb-[6px]">
                      First name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-[12px] py-[8px] text-[14px] rounded-[6px] border border-[#005f83] focus:outline-none focus:ring-2 focus:ring-[#00bfff]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#005f83] text-[12px] font-['Poppins'] mb-[6px]">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-[12px] py-[8px] text-[14px] rounded-[6px] border border-[#005f83] focus:outline-none focus:ring-2 focus:ring-[#00bfff]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[#005f83] text-[12px] font-['Poppins'] mb-[6px]">
                    Work email
                  </label>
                  <input
                    type="email"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleInputChange}
                    required
                    className="w-full px-[12px] py-[8px] text-[14px] rounded-[6px] border border-[#005f83] focus:outline-none focus:ring-2 focus:ring-[#00bfff]"
                  />
                </div>
                <div>
                  <label className="block text-[#005f83] text-[12px] font-['Poppins'] mb-[6px]">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-[12px] py-[8px] text-[14px] rounded-[6px] border border-[#005f83] focus:outline-none focus:ring-2 focus:ring-[#00bfff]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-[12px]">
                  <div>
                    <label className="block text-[#005f83] text-[12px] font-['Poppins'] mb-[6px]">
                      Job title
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      required
                      className="w-full px-[12px] py-[8px] text-[14px] rounded-[6px] border border-[#005f83] focus:outline-none focus:ring-2 focus:ring-[#00bfff]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#005f83] text-[12px] font-['Poppins'] mb-[6px]">
                      Sector
                    </label>
                    <input
                      type="text"
                      name="sector"
                      value={formData.sector}
                      onChange={handleInputChange}
                      required
                      className="w-full px-[12px] py-[8px] text-[14px] rounded-[6px] border border-[#005f83] focus:outline-none focus:ring-2 focus:ring-[#00bfff]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-[12px]">
                  <div>
                    <label className="block text-[#005f83] text-[12px] font-['Poppins'] mb-[6px]">
                      Team size in KSA
                    </label>
                    <select
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleInputChange}
                      required
                      className="w-full px-[12px] py-[8px] text-[14px] rounded-[6px] border border-[#005f83] focus:outline-none focus:ring-2 focus:ring-[#00bfff]"
                    >
                      <option value="">Select</option>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-500">201-500</option>
                      <option value="500+">500+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#005f83] text-[12px] font-['Poppins'] mb-[6px]">
                      Most affected function
                    </label>
                    <select
                      name="affectedFunction"
                      value={formData.affectedFunction}
                      onChange={handleInputChange}
                      required
                      className="w-full px-[12px] py-[8px] text-[14px] rounded-[6px] border border-[#005f83] focus:outline-none focus:ring-2 focus:ring-[#00bfff]"
                    >
                      <option value="">Select</option>
                      <option value="HR">HR</option>
                      <option value="Sales">Sales</option>
                      <option value="Procurement">Procurement</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Operations">Operations</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00bfff] to-[#56db46] rounded-[50px] px-[20px] py-[12px] text-white text-[15px] font-['Poppins'] hover:shadow-lg transition-shadow mt-[4px]"
                >
                  Download the report
                </button>
                <p className="text-[#005f83] text-[11px] font-['Poppins'] text-center leading-[16px]">
                  We will only use your details to share the report and relevant updates. No spam.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-[72px] py-[60px] bg-[#005f83]">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-[54px] font-['Poppins'] font-semibold bg-gradient-to-r from-[#00bfff] to-[#56db46] bg-clip-text text-transparent leading-[66px] tracking-[-1.62px] mb-[35px] text-center">
            FAQ
          </h2>
          <div className="space-y-[20px]">
            {/* FAQ 1 */}
            <div className="border-b border-[rgba(255,255,255,0.2)] pb-[20px]">
              <button
                onClick={() => setExpandedFaq(expandedFaq === 1 ? null : 1)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-white text-[18px] font-['Poppins'] font-semibold">
                  Is this report focused on policy or execution?
                </h3>
                <span className="text-white text-[24px]">{expandedFaq === 1 ? "−" : "+"}</span>
              </button>
              {expandedFaq === 1 && (
                <p className="text-white text-[16px] font-['Gotham'] mt-[15px] leading-[24px]">
                  Execution. It turns updates into actions and planning steps.
                </p>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="border-b border-[rgba(255,255,255,0.2)] pb-[20px]">
              <button
                onClick={() => setExpandedFaq(expandedFaq === 2 ? null : 2)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-white text-[18px] font-['Poppins'] font-semibold">
                  Does TASC only work with large companies?
                </h3>
                <span className="text-white text-[24px]">{expandedFaq === 2 ? "−" : "+"}</span>
              </button>
              {expandedFaq === 2 && (
                <p className="text-white text-[16px] font-['Gotham'] mt-[15px] leading-[24px]">
                  No. The best fit is any employer with real hiring volume or compliance exposure.
                </p>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="border-b border-[rgba(255,255,255,0.2)] pb-[20px]">
              <button
                onClick={() => setExpandedFaq(expandedFaq === 3 ? null : 3)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-white text-[18px] font-['Poppins'] font-semibold">
                  Can you support government and semi government projects?
                </h3>
                <span className="text-white text-[24px]">{expandedFaq === 3 ? "−" : "+"}</span>
              </button>
              {expandedFaq === 3 && (
                <p className="text-white text-[16px] font-['Gotham'] mt-[15px] leading-[24px]">
                  Yes, this is a core part of our delivery model.
                </p>
              )}
            </div>

            {/* FAQ 4 */}
            <div className="border-b border-[rgba(255,255,255,0.2)] pb-[20px]">
              <button
                onClick={() => setExpandedFaq(expandedFaq === 4 ? null : 4)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-white text-[18px] font-['Poppins'] font-semibold">
                  Is this report legal or regulatory advice
                </h3>
                <span className="text-white text-[24px]">{expandedFaq === 4 ? "−" : "+"}</span>
              </button>
              {expandedFaq === 4 && (
                <p className="text-white text-[16px] font-['Gotham'] mt-[15px] leading-[24px]">
                  No. It is an execution guide. Use it to align HR, business leaders, and finance on actions, owners, and timelines.
                </p>
              )}
            </div>

            {/* FAQ 5 */}
            <div className="border-b border-[rgba(255,255,255,0.2)] pb-[20px]">
              <button
                onClick={() => setExpandedFaq(expandedFaq === 5 ? null : 5)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-white text-[18px] font-['Poppins'] font-semibold">
                  What makes TASC different from a typical recruitment agency
                </h3>
                <span className="text-white text-[24px]">{expandedFaq === 5 ? "−" : "+"}</span>
              </button>
              {expandedFaq === 5 && (
                <p className="text-white text-[16px] font-['Gotham'] mt-[15px] leading-[24px]">
                  If you only need CVs, you do not need this page. TASC is built for structured delivery at scale, with process, reporting, and documentation support to reduce compliance and rollout risk.
                </p>
              )}
            </div>

            {/* FAQ 6 */}
            <div className="border-b border-[rgba(255,255,255,0.2)] pb-[20px]">
              <button
                onClick={() => setExpandedFaq(expandedFaq === 6 ? null : 6)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-white text-[18px] font-['Poppins'] font-semibold">
                  Can you support urgent multi city hiring across KSA
                </h3>
                <span className="text-white text-[24px]">{expandedFaq === 6 ? "−" : "+"}</span>
              </button>
              {expandedFaq === 6 && (
                <p className="text-white text-[16px] font-['Gotham'] mt-[15px] leading-[24px]">
                  Yes. That is one of the hard parts we are set up for. In a recent retail rollout, TASC onboarded 205 Saudi nationals in 6 weeks across 12 plus cities, with full compliance across Qiwa, Mudad, and Nitaqat.
                </p>
              )}
            </div>

            {/* FAQ 7 */}
            <div className="border-b border-[rgba(255,255,255,0.2)] pb-[20px]">
              <button
                onClick={() => setExpandedFaq(expandedFaq === 7 ? null : 7)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-white text-[18px] font-['Poppins'] font-semibold">
                  Do you help with compliance steps like Qiwa and Mudad submissions
                </h3>
                <span className="text-white text-[24px]">{expandedFaq === 7 ? "−" : "+"}</span>
              </button>
              {expandedFaq === 7 && (
                <p className="text-white text-[16px] font-['Gotham'] mt-[15px] leading-[24px]">
                  Yes. We support the documentation and onboarding steps needed to keep hiring audit ready, not just candidate selection.
                </p>
              )}
            </div>

            {/* FAQ 8 */}
            <div className="border-b border-[rgba(255,255,255,0.2)] pb-[20px]">
              <button
                onClick={() => setExpandedFaq(expandedFaq === 8 ? null : 8)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-white text-[18px] font-['Poppins'] font-semibold">
                  Can you keep the client name confidential
                </h3>
                <span className="text-white text-[24px]">{expandedFaq === 8 ? "−" : "+"}</span>
              </button>
              {expandedFaq === 8 && (
                <p className="text-white text-[16px] font-['Gotham'] mt-[15px] leading-[24px]">
                  Yes. Most employers prefer confidentiality, especially in regulated sectors and high profile rollouts. We can share proof points and outcomes without disclosing names, and share named references only when there is mutual agreement.
                </p>
              )}
            </div>

            {/* FAQ 9 */}
            <div className="border-b border-[rgba(255,255,255,0.2)] pb-[20px]">
              <button
                onClick={() => setExpandedFaq(expandedFaq === 9 ? null : 9)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-white text-[18px] font-['Poppins'] font-semibold">
                  Do you replace our HR team
                </h3>
                <span className="text-white text-[24px]">{expandedFaq === 9 ? "−" : "+"}</span>
              </button>
              {expandedFaq === 9 && (
                <p className="text-white text-[16px] font-['Gotham'] mt-[15px] leading-[24px]">
                  No. We strengthen your delivery. You keep ownership of hiring decisions and culture. We bring capacity, structure, sourcing reach, and reporting so your team is not stuck firefighting.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}