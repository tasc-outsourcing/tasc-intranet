import React, { useState } from "react";
import { TrendingUp, Bell, Lightbulb, Calendar, ChevronRight, MapPin, Clock, Users2 } from "lucide-react";

export function WhatsHappeningPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Updates" },
    { id: "business", label: "Business" },
    { id: "market", label: "Market & Compliance" },
    { id: "internal", label: "Internal" },
    { id: "events", label: "Events" }
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#005f83] via-[#004a68] to-[#005f83] px-[72px] py-[60px] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#ffe102]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#00bfff]/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <h1 className="text-[54px] font-['Poppins'] font-bold text-white leading-[66px] mb-[20px]">
            What's happening
          </h1>
          <p className="text-[20px] font-['Gotham'] text-white/90 leading-[32px] max-w-[800px] mx-auto">
            A real-time view of business activity, market updates, and internal initiatives.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-gray-200 px-[72px] py-[20px] sticky top-[80px] z-40 shadow-sm">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex gap-[15px] justify-center flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-[24px] py-[10px] rounded-[50px] text-[15px] font-['Poppins'] font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-[#00bfff] to-[#56db46] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Business Updates */}
      {(selectedCategory === "all" || selectedCategory === "business") && (
        <section className="px-[72px] py-[60px] bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center gap-[15px] mb-[40px]">
              <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#00bfff] to-[#56db46] rounded-full flex items-center justify-center">
                <TrendingUp className="w-[30px] h-[30px] text-white" strokeWidth={2.5} />
              </div>
              <h2 className="text-[36px] font-['Poppins'] font-bold text-[#005f83] leading-[48px]">
                Business updates
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-[24px]">
              {/* Update Card 1 */}
              <div className="group bg-gradient-to-br from-gray-50 to-white rounded-[24px] p-[30px] border border-gray-200 hover:border-[#00bfff] hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-[15px]">
                  <span className="bg-[#00bfff]/10 text-[#00bfff] text-[12px] font-['Poppins'] font-semibold px-[12px] py-[4px] rounded-[50px]">
                    New Client
                  </span>
                  <span className="text-gray-500 text-[13px] font-['Gotham']">2 days ago</span>
                </div>
                <h3 className="text-[22px] font-['Poppins'] font-bold text-[#005f83] mb-[12px]">
                  Manufacturing Giant Signs 5-Year Deal
                </h3>
                <p className="text-gray-700 text-[15px] font-['Gotham'] leading-[24px] mb-[15px]">
                  Secured comprehensive workforce management contract with multinational manufacturing company. Scope includes payroll, outsourcing, and compliance services for 800+ employees across UAE facilities.
                </p>
                <div className="flex items-center gap-[8px] text-[#00bfff] text-[14px] font-['Poppins'] font-semibold">
                  Read more <ChevronRight className="w-[16px] h-[16px]" />
                </div>
              </div>

              {/* Update Card 2 */}
              <div className="group bg-gradient-to-br from-gray-50 to-white rounded-[24px] p-[30px] border border-gray-200 hover:border-[#56db46] hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-[15px]">
                  <span className="bg-[#56db46]/10 text-[#56db46] text-[12px] font-['Poppins'] font-semibold px-[12px] py-[4px] rounded-[50px]">
                    Market Expansion
                  </span>
                  <span className="text-gray-500 text-[13px] font-['Gotham']">5 days ago</span>
                </div>
                <h3 className="text-[22px] font-['Poppins'] font-bold text-[#005f83] mb-[12px]">
                  TASC KSA Opens Jeddah Office
                </h3>
                <p className="text-gray-700 text-[15px] font-['Gotham'] leading-[24px] mb-[15px]">
                  Strategic expansion into western Saudi market with new Jeddah operations center. Team of 12 focused on serving energy, logistics, and construction sector clients in the region.
                </p>
                <div className="flex items-center gap-[8px] text-[#56db46] text-[14px] font-['Poppins'] font-semibold">
                  Read more <ChevronRight className="w-[16px] h-[16px]" />
                </div>
              </div>

              {/* Update Card 3 */}
              <div className="group bg-gradient-to-br from-gray-50 to-white rounded-[24px] p-[30px] border border-gray-200 hover:border-[#ffe102] hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-[15px]">
                  <span className="bg-[#ffe102]/20 text-[#005f83] text-[12px] font-['Poppins'] font-semibold px-[12px] py-[4px] rounded-[50px]">
                    Service Launch
                  </span>
                  <span className="text-gray-500 text-[13px] font-['Gotham']">1 week ago</span>
                </div>
                <h3 className="text-[22px] font-['Poppins'] font-bold text-[#005f83] mb-[12px]">
                  Business Travel Advisory Now Live
                </h3>
                <p className="text-gray-700 text-[15px] font-['Gotham'] leading-[24px] mb-[15px]">
                  Launched comprehensive KSA mobility advisory service addressing visa tightening and entry requirements. Already supporting three enterprise clients with Saudi operations.
                </p>
                <div className="flex items-center gap-[8px] text-[#ffe102] text-[14px] font-['Poppins'] font-semibold">
                  Read more <ChevronRight className="w-[16px] h-[16px]" />
                </div>
              </div>

              {/* Update Card 4 */}
              <div className="group bg-gradient-to-br from-gray-50 to-white rounded-[24px] p-[30px] border border-gray-200 hover:border-[#005f83] hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-[15px]">
                  <span className="bg-[#005f83]/10 text-[#005f83] text-[12px] font-['Poppins'] font-semibold px-[12px] py-[4px] rounded-[50px]">
                    Contract Renewal
                  </span>
                  <span className="text-gray-500 text-[13px] font-['Gotham']">1 week ago</span>
                </div>
                <h3 className="text-[22px] font-['Poppins'] font-bold text-[#005f83] mb-[12px]">
                  Three Major Renewals Secured
                </h3>
                <p className="text-gray-700 text-[15px] font-['Gotham'] leading-[24px] mb-[15px]">
                  Successfully renewed contracts with three enterprise clients totaling AED 24M annual value. All renewals include expanded scope and multi-year commitments.
                </p>
                <div className="flex items-center gap-[8px] text-[#005f83] text-[14px] font-['Poppins'] font-semibold">
                  Read more <ChevronRight className="w-[16px] h-[16px]" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Market and Compliance Updates */}
      {(selectedCategory === "all" || selectedCategory === "market") && (
        <section className="px-[72px] py-[60px] bg-gray-50">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center gap-[15px] mb-[40px]">
              <div className="w-[60px] h-[60px] bg-[#ffe102] rounded-full flex items-center justify-center">
                <Bell className="w-[30px] h-[30px] text-[#005f83]" strokeWidth={2.5} />
              </div>
              <h2 className="text-[36px] font-['Poppins'] font-bold text-[#005f83] leading-[48px]">
                Market updates
              </h2>
            </div>

            <div className="space-y-[24px]">
              {/* Critical Update */}
              <div className="bg-white rounded-[24px] p-[35px] border-l-[6px] border-[#ffe102] shadow-md">
                <div className="flex items-start gap-[20px]">
                  <div className="w-[50px] h-[50px] bg-[#ffe102] rounded-full flex items-center justify-center shrink-0">
                    <Bell className="w-[26px] h-[26px] text-[#005f83]" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-[12px] mb-[12px]">
                      <span className="bg-[#ffe102] text-[#005f83] text-[11px] font-['Poppins'] font-bold px-[10px] py-[4px] rounded-[50px]">
                        CRITICAL
                      </span>
                      <span className="text-gray-500 text-[13px] font-['Gotham']">Updated 3 days ago</span>
                    </div>
                    <h3 className="text-[24px] font-['Poppins'] font-bold text-[#005f83] mb-[12px]">
                      KSA Visa Policy Changes - Immediate Action Required
                    </h3>
                    <p className="text-gray-700 text-[16px] font-['Gotham'] leading-[26px] mb-[15px]">
                      Significant changes to entry requirements for business visitors from select nationalities. Increased scrutiny on hands-on technical work under business visitor visas. New documentation requirements for client site access.
                    </p>
                    <div className="bg-[#ffe102]/10 rounded-[12px] p-[20px] mb-[15px]">
                      <h4 className="text-[16px] font-['Poppins'] font-bold text-[#005f83] mb-[10px]">
                        Action Items:
                      </h4>
                      <ul className="space-y-[8px]">
                        <li className="flex items-start gap-[10px] text-gray-700 text-[14px] font-['Gotham'] leading-[22px]">
                          <span className="text-[#00bfff] mt-[6px]">•</span>
                          All teams advising clients on Saudi travel must review updated guidance document
                        </li>
                        <li className="flex items-start gap-[10px] text-gray-700 text-[14px] font-['Gotham'] leading-[22px]">
                          <span className="text-[#00bfff] mt-[6px]">•</span>
                          Client-facing teams to proactively reach out to clients with Saudi operations
                        </li>
                        <li className="flex items-start gap-[10px] text-gray-700 text-[14px] font-['Gotham'] leading-[22px]">
                          <span className="text-[#00bfff] mt-[6px]">•</span>
                          Compliance training session scheduled for February 10th - mandatory attendance
                        </li>
                      </ul>
                    </div>
                    <button className="bg-[#005f83] text-white px-[20px] py-[10px] rounded-[50px] text-[14px] font-['Poppins'] font-semibold hover:bg-[#004a68] transition-colors">
                      View Full Guidance Document
                    </button>
                  </div>
                </div>
              </div>

              {/* Standard Updates */}
              <div className="grid grid-cols-2 gap-[24px]">
                <div className="bg-white rounded-[20px] p-[28px] border border-gray-200 shadow-sm">
                  <h4 className="text-[18px] font-['Poppins'] font-bold text-[#005f83] mb-[10px]">
                    UAE Labor Law Amendments
                  </h4>
                  <p className="text-gray-700 text-[15px] font-['Gotham'] leading-[24px] mb-[12px]">
                    Changes to end-of-service benefit calculations effective March 2026. Compliance team has updated all payroll procedures and client communication templates.
                  </p>
                  <span className="text-[#00bfff] text-[13px] font-['Poppins'] font-semibold">5 days ago</span>
                </div>

                <div className="bg-white rounded-[20px] p-[28px] border border-gray-200 shadow-sm">
                  <h4 className="text-[18px] font-['Poppins'] font-bold text-[#005f83] mb-[10px]">
                    Saudization Targets Updated
                  </h4>
                  <p className="text-gray-700 text-[15px] font-['Gotham'] leading-[24px] mb-[12px]">
                    New Nitaqat targets announced for Q2 2026. TASC KSA proactively contacting existing clients to assess impact and develop compliance strategies.
                  </p>
                  <span className="text-[#56db46] text-[13px] font-['Poppins'] font-semibold">1 week ago</span>
                </div>

                <div className="bg-white rounded-[20px] p-[28px] border border-gray-200 shadow-sm">
                  <h4 className="text-[18px] font-['Poppins'] font-bold text-[#005f83] mb-[10px]">
                    GCC Payroll Tax Developments
                  </h4>
                  <p className="text-gray-700 text-[15px] font-['Gotham'] leading-[24px] mb-[12px]">
                    Monitoring ongoing discussions around regional payroll tax frameworks. No immediate action required but keeping clients informed of developments.
                  </p>
                  <span className="text-[#005f83] text-[13px] font-['Poppins'] font-semibold">2 weeks ago</span>
                </div>

                <div className="bg-white rounded-[20px] p-[28px] border border-gray-200 shadow-sm">
                  <h4 className="text-[18px] font-['Poppins'] font-bold text-[#005f83] mb-[10px]">
                    Digital Labor Card Rollout
                  </h4>
                  <p className="text-gray-700 text-[15px] font-['Gotham'] leading-[24px] mb-[12px]">
                    UAE Ministry of Human Resources advancing digital labor card system. Operations team preparing for transition and client onboarding requirements.
                  </p>
                  <span className="text-[#00bfff] text-[13px] font-['Poppins'] font-semibold">2 weeks ago</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Internal Initiatives */}
      {(selectedCategory === "all" || selectedCategory === "internal") && (
        <section className="px-[72px] py-[60px] bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center gap-[15px] mb-[40px]">
              <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#00bfff] to-[#56db46] rounded-full flex items-center justify-center">
                <Lightbulb className="w-[30px] h-[30px] text-white" strokeWidth={2.5} />
              </div>
              <h2 className="text-[36px] font-['Poppins'] font-bold text-[#005f83] leading-[48px]">
                Internal initiatives
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-[24px]">
              <div className="bg-gradient-to-br from-[#005f83] to-[#004a68] rounded-[24px] p-[30px] text-white">
                <div className="w-[50px] h-[50px] bg-[#ffe102] rounded-full flex items-center justify-center mb-[20px]">
                  <Users2 className="w-[26px] h-[26px] text-[#005f83]" strokeWidth={2.5} />
                </div>
                <h3 className="text-[20px] font-['Poppins'] font-bold mb-[12px]">
                  Cross-Team Collaboration
                </h3>
                <p className="text-white/90 text-[14px] font-['Gotham'] leading-[22px] mb-[15px]">
                  Monthly alignment sessions between business units to share insights and identify cross-selling opportunities. Next session: February 15th.
                </p>
                <span className="text-[#ffe102] text-[12px] font-['Poppins'] font-semibold">Ongoing Initiative</span>
              </div>

              <div className="bg-white rounded-[24px] p-[30px] border border-gray-200 shadow-sm">
                <div className="w-[50px] h-[50px] bg-[#00bfff] rounded-full flex items-center justify-center mb-[20px]">
                  <Lightbulb className="w-[26px] h-[26px] text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-[20px] font-['Poppins'] font-bold text-[#005f83] mb-[12px]">
                  CRM System Upgrade
                </h3>
                <p className="text-gray-700 text-[14px] font-['Gotham'] leading-[22px] mb-[15px]">
                  Implementing enhanced CRM capabilities for better client tracking and service delivery. Rollout begins March 2026 with comprehensive training.
                </p>
                <span className="text-[#00bfff] text-[12px] font-['Poppins'] font-semibold">In Progress</span>
              </div>

              <div className="bg-white rounded-[24px] p-[30px] border border-gray-200 shadow-sm">
                <div className="w-[50px] h-[50px] bg-[#56db46] rounded-full flex items-center justify-center mb-[20px]">
                  <TrendingUp className="w-[26px] h-[26px] text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-[20px] font-['Poppins'] font-bold text-[#005f83] mb-[12px]">
                  Sales Enablement Program
                </h3>
                <p className="text-gray-700 text-[14px] font-['Gotham'] leading-[22px] mb-[15px]">
                  New training program equipping sales teams with market intelligence, compliance updates, and technical expertise for client conversations.
                </p>
                <span className="text-[#56db46] text-[12px] font-['Poppins'] font-semibold">Launching Q1</span>
              </div>

              <div className="bg-white rounded-[24px] p-[30px] border border-gray-200 shadow-sm">
                <div className="w-[50px] h-[50px] bg-[#ffe102] rounded-full flex items-center justify-center mb-[20px]">
                  <Bell className="w-[26px] h-[26px] text-[#005f83]" strokeWidth={2.5} />
                </div>
                <h3 className="text-[20px] font-['Poppins'] font-bold text-[#005f83] mb-[12px]">
                  Compliance Certification
                </h3>
                <p className="text-gray-700 text-[14px] font-['Gotham'] leading-[22px] mb-[15px]">
                  Mandatory certification program for all client-facing teams covering GCC labor law, visa regulations, and compliance best practices.
                </p>
                <span className="text-[#ffe102] text-[12px] font-['Poppins'] font-semibold">Enrollment Open</span>
              </div>

              <div className="bg-white rounded-[24px] p-[30px] border border-gray-200 shadow-sm">
                <div className="w-[50px] h-[50px] bg-[#005f83] rounded-full flex items-center justify-center mb-[20px]">
                  <Lightbulb className="w-[26px] h-[26px] text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-[20px] font-['Poppins'] font-bold text-[#005f83] mb-[12px]">
                  Digital Transformation
                </h3>
                <p className="text-gray-700 text-[14px] font-['Gotham'] leading-[22px] mb-[15px]">
                  Internal process automation and digital workflow improvements to enhance operational efficiency and reduce manual work.
                </p>
                <span className="text-[#005f83] text-[12px] font-['Poppins'] font-semibold">Planning Phase</span>
              </div>

              <div className="bg-white rounded-[24px] p-[30px] border border-gray-200 shadow-sm">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-[#00bfff] to-[#56db46] rounded-full flex items-center justify-center mb-[20px]">
                  <Users2 className="w-[26px] h-[26px] text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-[20px] font-['Poppins'] font-bold text-[#005f83] mb-[12px]">
                  Employee Development
                </h3>
                <p className="text-gray-700 text-[14px] font-['Gotham'] leading-[22px] mb-[15px]">
                  Expanded learning and development program including leadership training, technical skills workshops, and career progression pathways.
                </p>
                <span className="text-[#00bfff] text-[12px] font-['Poppins'] font-semibold">Ongoing</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Events and Key Dates */}
      {(selectedCategory === "all" || selectedCategory === "events") && (
        <section className="px-[72px] py-[60px] bg-[#005f83]">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center gap-[15px] mb-[40px]">
              <div className="w-[60px] h-[60px] bg-[#ffe102] rounded-full flex items-center justify-center">
                <Calendar className="w-[30px] h-[30px] text-[#005f83]" strokeWidth={2.5} />
              </div>
              <h2 className="text-[36px] font-['Poppins'] font-bold text-white leading-[48px]">
                Events and key dates
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-[24px]">
              {/* Upcoming Event 1 */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-[24px] p-[30px] hover:bg-white/15 transition-all">
                <div className="flex gap-[20px]">
                  <div className="shrink-0">
                    <div className="w-[70px] h-[70px] bg-[#ffe102] rounded-[16px] flex flex-col items-center justify-center">
                      <span className="text-[#005f83] text-[24px] font-['Poppins'] font-bold leading-none">10</span>
                      <span className="text-[#005f83] text-[12px] font-['Poppins'] font-semibold">FEB</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-[22px] font-['Poppins'] font-bold mb-[10px]">
                      KSA Compliance Training
                    </h3>
                    <div className="flex items-center gap-[15px] mb-[12px]">
                      <div className="flex items-center gap-[6px] text-white/80 text-[13px] font-['Gotham']">
                        <Clock className="w-[14px] h-[14px]" />
                        10:00 AM - 12:00 PM
                      </div>
                      <div className="flex items-center gap-[6px] text-white/80 text-[13px] font-['Gotham']">
                        <MapPin className="w-[14px] h-[14px]" />
                        Virtual
                      </div>
                    </div>
                    <p className="text-white/90 text-[14px] font-['Gotham'] leading-[22px]">
                      Mandatory training on new KSA visa policies and entry requirements. All client-facing teams must attend.
                    </p>
                  </div>
                </div>
              </div>

              {/* Upcoming Event 2 */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-[24px] p-[30px] hover:bg-white/15 transition-all">
                <div className="flex gap-[20px]">
                  <div className="shrink-0">
                    <div className="w-[70px] h-[70px] bg-[#00bfff] rounded-[16px] flex flex-col items-center justify-center">
                      <span className="text-white text-[24px] font-['Poppins'] font-bold leading-none">15</span>
                      <span className="text-white text-[12px] font-['Poppins'] font-semibold">FEB</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-[22px] font-['Poppins'] font-bold mb-[10px]">
                      Monthly Town Hall
                    </h3>
                    <div className="flex items-center gap-[15px] mb-[12px]">
                      <div className="flex items-center gap-[6px] text-white/80 text-[13px] font-['Gotham']">
                        <Clock className="w-[14px] h-[14px]" />
                        3:00 PM - 4:00 PM
                      </div>
                      <div className="flex items-center gap-[6px] text-white/80 text-[13px] font-['Gotham']">
                        <MapPin className="w-[14px] h-[14px]" />
                        Dubai HQ + Virtual
                      </div>
                    </div>
                    <p className="text-white/90 text-[14px] font-['Gotham'] leading-[22px]">
                      Leadership update on business performance, strategic priorities, and cross-team collaboration initiatives.
                    </p>
                  </div>
                </div>
              </div>

              {/* Upcoming Event 3 */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-[24px] p-[30px] hover:bg-white/15 transition-all">
                <div className="flex gap-[20px]">
                  <div className="shrink-0">
                    <div className="w-[70px] h-[70px] bg-[#56db46] rounded-[16px] flex flex-col items-center justify-center">
                      <span className="text-white text-[24px] font-['Poppins'] font-bold leading-none">22</span>
                      <span className="text-white text-[12px] font-['Poppins'] font-semibold">FEB</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-[22px] font-['Poppins'] font-bold mb-[10px]">
                      GCC HR Tech Summit
                    </h3>
                    <div className="flex items-center gap-[15px] mb-[12px]">
                      <div className="flex items-center gap-[6px] text-white/80 text-[13px] font-['Gotham']">
                        <Clock className="w-[14px] h-[14px]" />
                        9:00 AM - 5:00 PM
                      </div>
                      <div className="flex items-center gap-[6px] text-white/80 text-[13px] font-['Gotham']">
                        <MapPin className="w-[14px] h-[14px]" />
                        Dubai World Trade Centre
                      </div>
                    </div>
                    <p className="text-white/90 text-[14px] font-['Gotham'] leading-[22px]">
                      Industry conference focused on workforce technology and digital transformation. TASC sponsoring and presenting.
                    </p>
                  </div>
                </div>
              </div>

              {/* Upcoming Event 4 */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-[24px] p-[30px] hover:bg-white/15 transition-all">
                <div className="flex gap-[20px]">
                  <div className="shrink-0">
                    <div className="w-[70px] h-[70px] bg-white/20 rounded-[16px] flex flex-col items-center justify-center border border-white/30">
                      <span className="text-white text-[24px] font-['Poppins'] font-bold leading-none">28</span>
                      <span className="text-white text-[12px] font-['Poppins'] font-semibold">FEB</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-[22px] font-['Poppins'] font-bold mb-[10px]">
                      Q1 Business Review
                    </h3>
                    <div className="flex items-center gap-[15px] mb-[12px]">
                      <div className="flex items-center gap-[6px] text-white/80 text-[13px] font-['Gotham']">
                        <Clock className="w-[14px] h-[14px]" />
                        2:00 PM - 4:00 PM
                      </div>
                      <div className="flex items-center gap-[6px] text-white/80 text-[13px] font-['Gotham']">
                        <MapPin className="w-[14px] h-[14px]" />
                        All Offices + Virtual
                      </div>
                    </div>
                    <p className="text-white/90 text-[14px] font-['Gotham'] leading-[22px]">
                      Quarterly performance review covering financial results, wins, challenges, and strategic focus for Q2.
                    </p>
                  </div>
                </div>
              </div>

              {/* Upcoming Event 5 */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-[24px] p-[30px] hover:bg-white/15 transition-all">
                <div className="flex gap-[20px]">
                  <div className="shrink-0">
                    <div className="w-[70px] h-[70px] bg-[#ffe102] rounded-[16px] flex flex-col items-center justify-center">
                      <span className="text-[#005f83] text-[24px] font-['Poppins'] font-bold leading-none">05</span>
                      <span className="text-[#005f83] text-[12px] font-['Poppins'] font-semibold">MAR</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-[22px] font-['Poppins'] font-bold mb-[10px]">
                      Riyadh Client Networking Event
                    </h3>
                    <div className="flex items-center gap-[15px] mb-[12px]">
                      <div className="flex items-center gap-[6px] text-white/80 text-[13px] font-['Gotham']">
                        <Clock className="w-[14px] h-[14px]" />
                        6:00 PM - 9:00 PM
                      </div>
                      <div className="flex items-center gap-[6px] text-white/80 text-[13px] font-['Gotham']">
                        <MapPin className="w-[14px] h-[14px]" />
                        Riyadh, KSA
                      </div>
                    </div>
                    <p className="text-white/90 text-[14px] font-['Gotham'] leading-[22px]">
                      Exclusive client appreciation event for Saudi market. Opportunity to strengthen relationships and discuss market trends.
                    </p>
                  </div>
                </div>
              </div>

              {/* Important Deadline */}
              <div className="bg-gradient-to-br from-[#ffe102] to-[#ffed66] rounded-[24px] p-[30px]">
                <div className="flex gap-[20px]">
                  <div className="shrink-0">
                    <div className="w-[70px] h-[70px] bg-[#005f83] rounded-[16px] flex flex-col items-center justify-center">
                      <span className="text-white text-[24px] font-['Poppins'] font-bold leading-none">15</span>
                      <span className="text-white text-[12px] font-['Poppins'] font-semibold">MAR</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="inline-block bg-[#005f83] text-white text-[11px] font-['Poppins'] font-bold px-[10px] py-[4px] rounded-[50px] mb-[10px]">
                      DEADLINE
                    </div>
                    <h3 className="text-[#005f83] text-[22px] font-['Poppins'] font-bold mb-[10px]">
                      Compliance Certification Due
                    </h3>
                    <p className="text-[#005f83]/90 text-[14px] font-['Gotham'] leading-[22px]">
                      All client-facing team members must complete mandatory GCC compliance certification by this date.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
