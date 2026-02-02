import React, { useState } from "react";
import { SplineViewer } from "@/app/components/SplineViewer";
import imgTascLogo from "figma:asset/0399c2ba8c161094279ce73755571815f5821b3f.png";

export function KSABusinessTravel() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="w-full bg-white">
      {/* Logo Only Header */}
      <div className="bg-white px-[72px] py-[25px]">
        <div className="h-[40px] w-auto">
          <img alt="TASC Logo" className="h-full w-auto object-contain" src={imgTascLogo} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-[#005f83] px-[72px] py-[70px] text-center relative overflow-hidden">
        {/* Background with Spline 3D */}
        <div className="absolute inset-0 z-0">
          <SplineViewer url="https://prod.spline.design/QjXhS9RSPg7tzqko/scene.splinecode" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-[1062px] mx-auto relative z-10">
          <h1 className="text-[48px] font-['Poppins'] font-medium text-white leading-[60px] tracking-[-1.44px] mb-[15px] drop-shadow-lg">
            Saudi Visa Enforcement Is Reshaping Project Delivery
          </h1>
          <p className="text-[18px] font-['Gotham'] text-white leading-[24px] tracking-[-0.18px] max-w-[748px] mx-auto mb-[30px] drop-shadow-md">
            Keep your projects moving with compliant mobility solutions.
          </p>
          <div className="flex gap-[20px] justify-center">
            <button className="bg-gradient-to-r from-[#00bfff] to-[#56db46] rounded-[50px] px-[24px] py-[14px] text-white text-[16px] font-['Poppins'] shadow-lg hover:shadow-xl transition-shadow">
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-[#ffe102] px-[80px] py-[30px]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center">
            <p className="text-[#005f83] text-[18px] font-['Poppins'] font-semibold leading-[28px]">
              Expert KSA mobility guidance from consultants who understand local compliance and business delivery pressures.
            </p>
          </div>
        </div>
      </section>

      {/* What we are seeing */}
      <section className="px-[72px] py-[60px] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-[54px] font-['Poppins'] font-semibold bg-gradient-to-r from-[#00bfff] to-[#56db46] bg-clip-text text-transparent leading-[66px] tracking-[-1.62px] mb-[15px] text-center">
            What we are seeing
          </h2>
          <p className="text-[#005f83] text-[20px] font-['Gotham'] text-center max-w-[900px] mx-auto mb-[35px] leading-[32px]">
            Visa issuance is tightening for select nationalities and entry checks are increasing, especially when travel involves customer sites or hands-on activity.
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
                  What it breaks
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-[20px]">
                <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-[20px] p-[30px] border border-white/10 hover:border-[#ffe102]/50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <div className="flex gap-[25px] items-start">
                    <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#ffe102] to-[#ffed66] rounded-[16px] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-[30px] h-[30px]" fill="none" viewBox="0 0 24 24" stroke="#005f83" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white text-[22px] font-['Poppins'] font-bold mb-[8px]">
                        Project timelines
                      </h4>
                      <p className="text-white/90 text-[18px] font-['Gotham'] leading-[28px]">
                        Delayed or denied entry can push back critical project milestones and delivery commitments.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-[20px] p-[30px] border border-white/10 hover:border-[#ffe102]/50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <div className="flex gap-[25px] items-start">
                    <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#ffe102] to-[#ffed66] rounded-[16px] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-[30px] h-[30px]" fill="none" viewBox="0 0 24 24" stroke="#005f83" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white text-[22px] font-['Poppins'] font-bold mb-[8px]">
                        Customer commitments
                      </h4>
                      <p className="text-white/90 text-[18px] font-['Gotham'] leading-[28px]">
                        Missed site visits and client meetings damage trust and slow commercial progress.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-[20px] p-[30px] border border-white/10 hover:border-[#ffe102]/50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <div className="flex gap-[25px] items-start">
                    <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#ffe102] to-[#ffed66] rounded-[16px] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-[30px] h-[30px]" fill="none" viewBox="0 0 24 24" stroke="#005f83" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white text-[22px] font-['Poppins'] font-bold mb-[8px]">
                        Onsite support
                      </h4>
                      <p className="text-white/90 text-[18px] font-['Gotham'] leading-[28px]">
                        Technical work, installations, and hands-on troubleshooting require physical presence at customer locations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-[20px] p-[30px] border border-white/10 hover:border-[#ffe102]/50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <div className="flex gap-[25px] items-start">
                    <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#ffe102] to-[#ffed66] rounded-[16px] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-[30px] h-[30px]" fill="none" viewBox="0 0 24 24" stroke="#005f83" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white text-[22px] font-['Poppins'] font-bold mb-[8px]">
                        Revenue delivery
                      </h4>
                      <p className="text-white/90 text-[18px] font-['Gotham'] leading-[28px]">
                        Stalled projects mean delayed invoicing, missed payment milestones, and revenue recognition issues.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-[72px] py-[35px] bg-[#ffe102]">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-2 gap-[40px] items-start">
            {/* Left Column - Text */}
            <div>
              <h2 className="text-[32px] font-['Poppins'] font-semibold text-[#005f83] leading-[40px] tracking-[-0.96px] mb-[12px]">
                Businss Impact Advisory
              </h2>
              <p className="text-[#005f83] text-[15px] font-['Gotham'] leading-[22px] mb-[16px]">
                Leading organisations are transitioning to Saudi-based, compliant workforce models that ensure predictable site
access, reduce regulatory exposure, and protect revenue continuity.
              </p>
              <div className="space-y-[8px] mb-[20px]">
                <div className="flex items-center gap-[10px]">
                  <div className="w-[18px] h-[18px] bg-[#005f83] rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-[10px] h-[10px]" fill="none" viewBox="0 0 24 24" stroke="#ffe102" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#005f83] text-[13px] font-['Poppins']">
                    Quick risk assessment of your travel plan
                  </p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <div className="w-[18px] h-[18px] bg-[#005f83] rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-[10px] h-[10px]" fill="none" viewBox="0 0 24 24" stroke="#ffe102" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#005f83] text-[13px] font-['Poppins']">
                    Compliant mobility route recommendations
                  </p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <div className="w-[18px] h-[18px] bg-[#005f83] rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-[10px] h-[10px]" fill="none" viewBox="0 0 24 24" stroke="#ffe102" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#005f83] text-[13px] font-['Poppins']">
                    Document and approval guidance
                  </p>
                </div>
              </div>

              <div className="bg-[#005f83]/10 border-l-4 border-[#005f83] rounded-[8px] p-[14px]">
                <p className="text-[#005f83] text-[12px] font-['Gotham'] leading-[18px]">
                  <strong className="font-semibold">Note:</strong> Rules and issuance practices can change quickly and vary by mission. We provide mobility guidance based on current market practice and established advisory updates, and we work with your legal and immigration providers where needed.
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-[16px] p-[24px] shadow-lg" id="hubspot-form-container">
              {/* Fallback form while HubSpot loads */}
              <form className="space-y-[10px] hubspot-fallback-form">
                <div>
                  <label className="block text-[#005f83] text-[11px] font-['Poppins'] mb-[4px] font-medium">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    required
                    className="w-full px-[10px] py-[7px] text-[13px] rounded-[6px] border border-[#005f83] focus:outline-none focus:ring-2 focus:ring-[#00bfff] font-['Gotham']"
                  />
                </div>
                <div>
                  <label className="block text-[#005f83] text-[11px] font-['Poppins'] mb-[4px] font-medium">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    required
                    className="w-full px-[10px] py-[7px] text-[13px] rounded-[6px] border border-[#005f83] focus:outline-none focus:ring-2 focus:ring-[#00bfff] font-['Gotham']"
                  />
                </div>
                <div>
                  <label className="block text-[#005f83] text-[11px] font-['Poppins'] mb-[4px] font-medium">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-[10px] py-[7px] text-[13px] rounded-[6px] border border-[#005f83] focus:outline-none focus:ring-2 focus:ring-[#00bfff] font-['Gotham']"
                  />
                </div>
                <div>
                  <label className="block text-[#005f83] text-[11px] font-['Poppins'] mb-[4px] font-medium">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    className="w-full px-[10px] py-[7px] text-[13px] rounded-[6px] border border-[#005f83] focus:outline-none focus:ring-2 focus:ring-[#00bfff] font-['Gotham']"
                  />
                </div>
                <div>
                  <label className="block text-[#005f83] text-[11px] font-['Poppins'] mb-[4px] font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-[10px] py-[7px] text-[13px] rounded-[6px] border border-[#005f83] focus:outline-none focus:ring-2 focus:ring-[#00bfff] font-['Gotham']"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00bfff] to-[#56db46] rounded-[50px] px-[18px] py-[10px] text-white text-[14px] font-['Poppins'] hover:shadow-lg transition-shadow mt-[4px]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-[72px] py-[60px] bg-[#005f83]">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-[54px] font-['Poppins'] font-semibold bg-gradient-to-r from-[#00bfff] to-[#56db46] bg-clip-text text-transparent leading-[66px] tracking-[-1.62px] mb-[35px] text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-[20px]">
            {/* FAQ 1 */}
            <div className="border-b border-[rgba(255,255,255,0.2)] pb-[20px]">
              <button
                onClick={() => setExpandedFaq(expandedFaq === 1 ? null : 1)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-white text-[18px] font-['Poppins'] font-semibold">
                  What nationalities are currently facing tighter entry requirements?
                </h3>
                <span className="text-white text-[24px]">{expandedFaq === 1 ? "−" : "+"}</span>
              </button>
              {expandedFaq === 1 && (
                <p className="text-white text-[16px] font-['Gotham'] mt-[15px] leading-[24px]">
                  Entry requirements vary and change frequently. We assess each case individually based on current practices and provide specific guidance for your scenario.
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
                  How quickly can I get a response after submitting my scenario?
                </h3>
                <span className="text-white text-[24px]">{expandedFaq === 2 ? "−" : "+"}</span>
              </button>
              {expandedFaq === 2 && (
                <p className="text-white text-[16px] font-['Gotham'] mt-[15px] leading-[24px]">
                  We typically respond within 24 hours with an initial assessment and will schedule a 15-minute triage call within 48 hours.
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
                  Do you replace our immigration legal team?
                </h3>
                <span className="text-white text-[24px]">{expandedFaq === 3 ? "−" : "+"}</span>
              </button>
              {expandedFaq === 3 && (
                <p className="text-white text-[16px] font-['Gotham'] mt-[15px] leading-[24px]">
                  No, we complement your legal and immigration providers. We provide practical mobility guidance based on current market practice and work alongside your existing advisors.
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
                  What if my traveler is already denied entry?
                </h3>
                <span className="text-white text-[24px]">{expandedFaq === 4 ? "−" : "+"}</span>
              </button>
              {expandedFaq === 4 && (
                <p className="text-white text-[16px] font-['Gotham'] mt-[15px] leading-[24px]">
                  We can provide guidance on next steps and alternative approaches, but prevention is always better. Contact us before travel for best results.
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
                  Is there a charge for the 15-minute triage call?
                </h3>
                <span className="text-white text-[24px]">{expandedFaq === 5 ? "−" : "+"}</span>
              </button>
              {expandedFaq === 5 && (
                <p className="text-white text-[16px] font-['Gotham'] mt-[15px] leading-[24px]">
                  The initial 15-minute triage call is complimentary. Extended support and documentation assistance are available on a project basis.
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
                  Can you help with visa applications?
                </h3>
                <span className="text-white text-[24px]">{expandedFaq === 6 ? "−" : "+"}</span>
              </button>
              {expandedFaq === 6 && (
                <p className="text-white text-[16px] font-['Gotham'] mt-[15px] leading-[24px]">
                  We provide strategic guidance on visa category selection and documentation requirements. For visa processing, we work with your immigration partners or can recommend trusted providers.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-[#00bfff] to-[#56db46] px-[72px] py-[50px] text-center">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-white text-[42px] font-['Poppins'] font-bold leading-[54px] mb-[20px]">
            Do not let travel uncertainty stall delivery in KSA
          </h2>
          <p className="text-white text-[20px] font-['Gotham'] leading-[32px] mb-[30px]">
            Get expert mobility guidance and keep your projects moving forward.
          </p>
          <button className="bg-white hover:bg-[#ffe102] rounded-[50px] px-[32px] py-[16px] text-[#005f83] text-[18px] font-['Poppins'] font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            Book your 15 minute triage call
          </button>
        </div>
      </section>
    </div>
  );
}