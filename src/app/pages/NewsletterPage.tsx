import React, { useState } from "react";
import { FileText, TrendingUp, Award, Bell, ChevronDown, ChevronUp } from "lucide-react";

export function NewsletterPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>("leadership");

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#005f83] to-[#004a68] px-[72px] py-[60px]">
        <div className="max-w-[1000px] mx-auto text-center">
          <div className="flex justify-center mb-[20px]">
            <div className="w-[80px] h-[80px] bg-[#ffe102] rounded-full flex items-center justify-center">
              <FileText className="w-[40px] h-[40px] text-[#005f83]" strokeWidth={2.5} />
            </div>
          </div>
          <h1 className="text-[54px] font-['Poppins'] font-bold text-white leading-[66px] mb-[20px]">
            Company Newsletter
          </h1>
          <p className="text-[20px] font-['Gotham'] text-white/90 leading-[32px] max-w-[800px] mx-auto">
            A monthly update covering business performance, wins, insights, and what teams should know moving forward.
          </p>
          <p className="text-[16px] font-['Poppins'] text-[#ffe102] mt-[15px]">
            No spam. No filler. Only relevant updates.
          </p>
        </div>
      </section>

      {/* Latest Newsletter */}
      <section className="px-[72px] py-[80px] bg-white">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex items-center justify-between mb-[40px]">
            <h2 className="text-[42px] font-['Poppins'] font-bold bg-gradient-to-r from-[#00bfff] to-[#56db46] bg-clip-text text-transparent leading-[54px]">
              This month at TASC
            </h2>
            <span className="text-[#005f83] text-[16px] font-['Poppins'] font-semibold bg-[#ffe102] px-[20px] py-[8px] rounded-[50px]">
              February 2026
            </span>
          </div>

          {/* Message from Leadership */}
          <div className="mb-[30px] border border-gray-200 rounded-[20px] overflow-hidden">
            <button
              onClick={() => toggleSection("leadership")}
              className="w-full bg-[#005f83] px-[30px] py-[20px] flex items-center justify-between hover:bg-[#004a68] transition-colors"
            >
              <div className="flex items-center gap-[15px]">
                <div className="w-[50px] h-[50px] bg-[#ffe102] rounded-full flex items-center justify-center">
                  <Bell className="w-[24px] h-[24px] text-[#005f83]" strokeWidth={2.5} />
                </div>
                <h3 className="text-[24px] font-['Poppins'] font-bold text-white">
                  Message from Leadership
                </h3>
              </div>
              {expandedSection === "leadership" ? (
                <ChevronUp className="w-[28px] h-[28px] text-white" />
              ) : (
                <ChevronDown className="w-[28px] h-[28px] text-white" />
              )}
            </button>
            {expandedSection === "leadership" && (
              <div className="bg-white px-[30px] py-[30px]">
                <p className="text-[#005f83] text-[18px] font-['Gotham'] leading-[30px] mb-[20px]">
                  <strong className="font-bold">Team,</strong>
                </p>
                <p className="text-gray-700 text-[16px] font-['Gotham'] leading-[28px] mb-[20px]">
                  February has been a month of strategic momentum. We've successfully renewed three major client contracts, launched our KSA mobility advisory service, and navigated new regulatory requirements that affect how we serve our clients.
                </p>
                <p className="text-gray-700 text-[16px] font-['Gotham'] leading-[28px] mb-[20px]">
                  What stands out this month is not just the wins, but how we achieved them. Cross-team collaboration has moved from aspiration to execution. Sales worked closely with delivery teams to understand client pain points. Operations partnered with compliance to ensure we stayed ahead of regulatory changes. This is how we build long-term client relationships.
                </p>
                <p className="text-gray-700 text-[16px] font-['Gotham'] leading-[28px] mb-[20px]">
                  As we move into March, our focus remains clear: deliver solutions that work in the real world, maintain compliance without compromise, and continue building the internal capabilities that make us the preferred partner in complex markets.
                </p>
                <p className="text-[#005f83] text-[16px] font-['Gotham'] leading-[28px]">
                  Thank you for your continued commitment to excellence.
                </p>
                <p className="text-[#005f83] text-[16px] font-['Poppins'] font-semibold mt-[20px]">
                  — TASC Leadership Team
                </p>
              </div>
            )}
          </div>

          {/* Business Highlights */}
          <div className="mb-[30px] border border-gray-200 rounded-[20px] overflow-hidden">
            <button
              onClick={() => toggleSection("business")}
              className="w-full bg-gradient-to-r from-[#00bfff] to-[#56db46] px-[30px] py-[20px] flex items-center justify-between hover:opacity-90 transition-opacity"
            >
              <div className="flex items-center gap-[15px]">
                <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center">
                  <TrendingUp className="w-[24px] h-[24px] text-[#005f83]" strokeWidth={2.5} />
                </div>
                <h3 className="text-[24px] font-['Poppins'] font-bold text-white">
                  Business Highlights
                </h3>
              </div>
              {expandedSection === "business" ? (
                <ChevronUp className="w-[28px] h-[28px] text-white" />
              ) : (
                <ChevronDown className="w-[28px] h-[28px] text-white" />
              )}
            </button>
            {expandedSection === "business" && (
              <div className="bg-white px-[30px] py-[30px]">
                <div className="space-y-[24px]">
                  <div className="flex gap-[20px]">
                    <div className="w-[40px] h-[40px] bg-[#00bfff]/20 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-[#00bfff] text-[20px] font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-[18px] font-['Poppins'] font-bold text-[#005f83] mb-[8px]">
                        Revenue Growth: +18% YoY
                      </h4>
                      <p className="text-gray-700 text-[15px] font-['Gotham'] leading-[24px]">
                        Strong performance across all business units, driven by contract renewals and new client acquisitions in KSA and UAE markets.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-[20px]">
                    <div className="w-[40px] h-[40px] bg-[#56db46]/20 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-[#56db46] text-[20px] font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-[18px] font-['Poppins'] font-bold text-[#005f83] mb-[8px]">
                        KSA Expansion Accelerating
                      </h4>
                      <p className="text-gray-700 text-[15px] font-['Gotham'] leading-[24px]">
                        TASC KSA secured four new enterprise clients, expanding our footprint in Riyadh and establishing operations in Jeddah.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-[20px]">
                    <div className="w-[40px] h-[40px] bg-[#ffe102]/30 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-[#005f83] text-[20px] font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-[18px] font-['Poppins'] font-bold text-[#005f83] mb-[8px]">
                        AIQU Digital Transformation Wins
                      </h4>
                      <p className="text-gray-700 text-[15px] font-['Gotham'] leading-[24px]">
                        Closed two major digital transformation projects with banking and government sector clients, positioning AIQU as a specialized tech talent partner.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Client and Project Wins */}
          <div className="mb-[30px] border border-gray-200 rounded-[20px] overflow-hidden">
            <button
              onClick={() => toggleSection("wins")}
              className="w-full bg-[#ffe102] px-[30px] py-[20px] flex items-center justify-between hover:bg-[#ffed66] transition-colors"
            >
              <div className="flex items-center gap-[15px]">
                <div className="w-[50px] h-[50px] bg-[#005f83] rounded-full flex items-center justify-center">
                  <Award className="w-[24px] h-[24px] text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-[24px] font-['Poppins'] font-bold text-[#005f83]">
                  Client and Project Wins
                </h3>
              </div>
              {expandedSection === "wins" ? (
                <ChevronUp className="w-[28px] h-[28px] text-[#005f83]" />
              ) : (
                <ChevronDown className="w-[28px] h-[28px] text-[#005f83]" />
              )}
            </button>
            {expandedSection === "wins" && (
              <div className="bg-white px-[30px] py-[30px]">
                <div className="grid grid-cols-2 gap-[20px]">
                  <div className="bg-gray-50 rounded-[16px] p-[24px] border border-gray-200">
                    <h4 className="text-[18px] font-['Poppins'] font-bold text-[#005f83] mb-[12px]">
                      Major Manufacturing Client
                    </h4>
                    <p className="text-gray-700 text-[14px] font-['Gotham'] leading-[22px] mb-[12px]">
                      3-year contract renewal for outsourced workforce management covering 500+ employees across UAE facilities.
                    </p>
                    <span className="text-[#00bfff] text-[12px] font-['Poppins'] font-semibold bg-[#00bfff]/10 px-[12px] py-[4px] rounded-[50px]">
                      TASC Outsourcing
                    </span>
                  </div>

                  <div className="bg-gray-50 rounded-[16px] p-[24px] border border-gray-200">
                    <h4 className="text-[18px] font-['Poppins'] font-bold text-[#005f83] mb-[12px]">
                      Energy Sector Mobility
                    </h4>
                    <p className="text-gray-700 text-[14px] font-['Gotham'] leading-[22px] mb-[12px]">
                      New advisory engagement for KSA mobility and Saudization compliance for international energy contractor.
                    </p>
                    <span className="text-[#56db46] text-[12px] font-['Poppins'] font-semibold bg-[#56db46]/10 px-[12px] py-[4px] rounded-[50px]">
                      TASC KSA
                    </span>
                  </div>

                  <div className="bg-gray-50 rounded-[16px] p-[24px] border border-gray-200">
                    <h4 className="text-[18px] font-['Poppins'] font-bold text-[#005f83] mb-[12px]">
                      Banking Transformation
                    </h4>
                    <p className="text-gray-700 text-[14px] font-['Gotham'] leading-[22px] mb-[12px]">
                      Digital transformation project securing specialized tech talent for core banking system modernization.
                    </p>
                    <span className="text-[#005f83] text-[12px] font-['Poppins'] font-semibold bg-[#005f83]/10 px-[12px] py-[4px] rounded-[50px]">
                      AIQU
                    </span>
                  </div>

                  <div className="bg-gray-50 rounded-[16px] p-[24px] border border-gray-200">
                    <h4 className="text-[18px] font-['Poppins'] font-bold text-[#005f83] mb-[12px]">
                      Retail Expansion Support
                    </h4>
                    <p className="text-gray-700 text-[14px] font-['Gotham'] leading-[22px] mb-[12px]">
                      Payroll and HR outsourcing for major retail chain expanding to 15 new locations across GCC.
                    </p>
                    <span className="text-[#00bfff] text-[12px] font-['Poppins'] font-semibold bg-[#00bfff]/10 px-[12px] py-[4px] rounded-[50px]">
                      TASC Outsourcing
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Market Updates */}
          <div className="mb-[30px] border border-gray-200 rounded-[20px] overflow-hidden">
            <button
              onClick={() => toggleSection("market")}
              className="w-full bg-gray-100 px-[30px] py-[20px] flex items-center justify-between hover:bg-gray-200 transition-colors"
            >
              <div className="flex items-center gap-[15px]">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-[#00bfff] to-[#56db46] rounded-full flex items-center justify-center">
                  <Bell className="w-[24px] h-[24px] text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-[24px] font-['Poppins'] font-bold text-[#005f83]">
                  Market and Regulatory Updates
                </h3>
              </div>
              {expandedSection === "market" ? (
                <ChevronUp className="w-[28px] h-[28px] text-[#005f83]" />
              ) : (
                <ChevronDown className="w-[28px] h-[28px] text-[#005f83]" />
              )}
            </button>
            {expandedSection === "market" && (
              <div className="bg-white px-[30px] py-[30px]">
                <div className="bg-[#ffe102]/20 border-l-4 border-[#ffe102] rounded-[8px] p-[24px] mb-[24px]">
                  <h4 className="text-[18px] font-['Poppins'] font-bold text-[#005f83] mb-[10px]">
                    KSA Visa Policy Changes
                  </h4>
                  <p className="text-gray-700 text-[15px] font-['Gotham'] leading-[26px]">
                    New entry requirements affecting select nationalities. Increased scrutiny on business visitor visas for hands-on technical work. All teams advising clients on KSA travel must review updated guidance.
                  </p>
                </div>

                <div className="bg-[#00bfff]/10 border-l-4 border-[#00bfff] rounded-[8px] p-[24px] mb-[24px]">
                  <h4 className="text-[18px] font-['Poppins'] font-bold text-[#005f83] mb-[10px]">
                    UAE Labor Law Updates
                  </h4>
                  <p className="text-gray-700 text-[15px] font-['Gotham'] leading-[26px]">
                    Amendments to end-of-service benefit calculations effective March 2026. Compliance team has updated payroll procedures and client communications templates.
                  </p>
                </div>

                <div className="bg-[#56db46]/10 border-l-4 border-[#56db46] rounded-[8px] p-[24px]">
                  <h4 className="text-[18px] font-['Poppins'] font-bold text-[#005f83] mb-[10px]">
                    Saudization Target Increases
                  </h4>
                  <p className="text-gray-700 text-[15px] font-['Gotham'] leading-[26px]">
                    New Nitaqat targets announced for Q2 2026. TASC KSA is proactively reaching out to existing clients to assess impact and develop compliance strategies.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Team Achievements */}
          <div className="border border-gray-200 rounded-[20px] overflow-hidden">
            <button
              onClick={() => toggleSection("team")}
              className="w-full bg-[#56db46] px-[30px] py-[20px] flex items-center justify-between hover:bg-[#4bc93d] transition-colors"
            >
              <div className="flex items-center gap-[15px]">
                <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center">
                  <Award className="w-[24px] h-[24px] text-[#005f83]" strokeWidth={2.5} />
                </div>
                <h3 className="text-[24px] font-['Poppins'] font-bold text-white">
                  Team Achievements
                </h3>
              </div>
              {expandedSection === "team" ? (
                <ChevronUp className="w-[28px] h-[28px] text-white" />
              ) : (
                <ChevronDown className="w-[28px] h-[28px] text-white" />
              )}
            </button>
            {expandedSection === "team" && (
              <div className="bg-white px-[30px] py-[30px]">
                <div className="space-y-[20px]">
                  <div className="flex items-start gap-[15px]">
                    <div className="w-[8px] h-[8px] bg-[#00bfff] rounded-full mt-[8px] shrink-0"></div>
                    <p className="text-gray-700 text-[16px] font-['Gotham'] leading-[26px]">
                      <strong className="text-[#005f83] font-semibold">Sales Team:</strong> Exceeded Q1 targets by 22%, driven by strong client retention and cross-selling initiatives.
                    </p>
                  </div>
                  <div className="flex items-start gap-[15px]">
                    <div className="w-[8px] h-[8px] bg-[#56db46] rounded-full mt-[8px] shrink-0"></div>
                    <p className="text-gray-700 text-[16px] font-['Gotham'] leading-[26px]">
                      <strong className="text-[#005f83] font-semibold">Operations:</strong> Successfully onboarded 150+ new workers across three client sites with zero compliance issues.
                    </p>
                  </div>
                  <div className="flex items-start gap-[15px]">
                    <div className="w-[8px] h-[8px] bg-[#ffe102] rounded-full mt-[8px] shrink-0"></div>
                    <p className="text-gray-700 text-[16px] font-['Gotham'] leading-[26px]">
                      <strong className="text-[#005f83] font-semibold">Compliance:</strong> Completed regulatory training for all client-facing teams ahead of new labor law implementation.
                    </p>
                  </div>
                  <div className="flex items-start gap-[15px]">
                    <div className="w-[8px] h-[8px] bg-[#005f83] rounded-full mt-[8px] shrink-0"></div>
                    <p className="text-gray-700 text-[16px] font-['Gotham'] leading-[26px]">
                      <strong className="text-[#005f83] font-semibold">AIQU Team:</strong> Delivered two projects ahead of schedule, resulting in client testimonials and referral opportunities.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Previous Editions */}
      <section className="px-[72px] py-[80px] bg-gray-50">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-[42px] font-['Poppins'] font-bold text-[#005f83] leading-[54px] mb-[40px]">
            Past newsletters
          </h2>
          
          <div className="grid grid-cols-3 gap-[24px]">
            {["January 2026", "December 2025", "November 2025", "October 2025", "September 2025", "August 2025"].map((month, index) => (
              <button
                key={index}
                className="group bg-white rounded-[16px] p-[24px] shadow-sm hover:shadow-lg transition-all hover:scale-105 border border-gray-200 text-left"
              >
                <div className="flex items-start gap-[15px]">
                  <div className="w-[45px] h-[45px] bg-gradient-to-br from-[#00bfff] to-[#56db46] rounded-[12px] flex items-center justify-center shrink-0">
                    <FileText className="w-[22px] h-[22px] text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-['Poppins'] font-bold text-[#005f83] mb-[6px]">
                      {month}
                    </h3>
                    <p className="text-[13px] font-['Gotham'] text-gray-600">
                      Monthly business update
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
