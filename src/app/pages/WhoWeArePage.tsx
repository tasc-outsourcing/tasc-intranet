import React from "react";
import { Target, Zap, Shield, Users, CheckCircle2 } from "lucide-react";

export function WhoWeArePage() {
  const leadershipTeam = [
    {
      name: "Sarah Al-Mansouri",
      role: "Chief Executive Officer",
      responsibility: "Overall business direction and growth strategy across UAE and KSA markets.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    },
    {
      name: "James Mitchell",
      role: "Chief Operating Officer",
      responsibility: "Service delivery, operations excellence, and client satisfaction across all business units.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
    },
    {
      name: "Fatima Al-Rashid",
      role: "Managing Director, TASC KSA",
      responsibility: "Saudi market expansion, Saudization services, and KSA mobility solutions.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
    },
    {
      name: "David Chen",
      role: "Managing Director, AIQU",
      responsibility: "Digital transformation services and technology talent solutions.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "Layla Hassan",
      role: "Chief Compliance Officer",
      responsibility: "Regulatory compliance, risk management, and labor law adherence across markets.",
      image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=400&h=400&fit=crop"
    },
    {
      name: "Michael O'Brien",
      role: "Chief Commercial Officer",
      responsibility: "Sales strategy, business development, and client relationship management.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#005f83] via-[#004a68] to-[#005f83] px-[72px] py-[60px] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#00bfff]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#ffe102]/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <h1 className="text-[54px] font-['Poppins'] font-bold text-white leading-[66px] mb-[20px]">
            Who we are
          </h1>
          <p className="text-[20px] font-['Gotham'] text-white/90 leading-[32px] max-w-[800px] mx-auto">
            This page explains who we are as an organization, how we think, and how we work together.
          </p>
        </div>
      </section>

      {/* Our Purpose */}
      <section className="px-[72px] py-[80px] bg-white">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex items-center justify-center gap-[15px] mb-[30px]">
            <div className="w-[70px] h-[70px] bg-gradient-to-br from-[#00bfff] to-[#56db46] rounded-full flex items-center justify-center">
              <Target className="w-[35px] h-[35px] text-white" strokeWidth={2.5} />
            </div>
            <h2 className="text-[42px] font-['Poppins'] font-bold text-[#005f83] leading-[54px]">
              Why we exist
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-[#005f83] to-[#004a68] rounded-[32px] p-[50px] text-center shadow-xl">
            <p className="text-white text-[24px] font-['Gotham'] leading-[40px] mb-[20px]">
              We exist to make workforce solutions simpler, compliant, and effective for organizations operating in complex markets.
            </p>
            <div className="w-[60px] h-[2px] bg-[#ffe102] mx-auto my-[25px]"></div>
            <p className="text-white/90 text-[20px] font-['Gotham'] leading-[34px]">
              We solve real business problems related to people, scale, and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="px-[72px] py-[80px] bg-gray-50">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center justify-center gap-[15px] mb-[50px]">
            <div className="w-[70px] h-[70px] bg-[#ffe102] rounded-full flex items-center justify-center">
              <Zap className="w-[35px] h-[35px] text-[#005f83]" strokeWidth={2.5} />
            </div>
            <h2 className="text-[42px] font-['Poppins'] font-bold text-[#005f83] leading-[54px]">
              How we work
            </h2>
          </div>
          
          <div className="grid grid-cols-2 gap-[24px]">
            <div className="bg-white rounded-[24px] p-[35px] shadow-md border border-gray-200">
              <div className="flex items-start gap-[20px]">
                <div className="w-[50px] h-[50px] bg-[#00bfff] rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-[26px] h-[26px] text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-[22px] font-['Poppins'] font-bold text-[#005f83] mb-[10px]">
                    Client first, always
                  </h3>
                  <p className="text-gray-700 text-[16px] font-['Gotham'] leading-[26px]">
                    Every decision is filtered through the lens of client impact. If it doesn't serve the client, we don't do it.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[24px] p-[35px] shadow-md border border-gray-200">
              <div className="flex items-start gap-[20px]">
                <div className="w-[50px] h-[50px] bg-[#56db46] rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-[26px] h-[26px] text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-[22px] font-['Poppins'] font-bold text-[#005f83] mb-[10px]">
                    Practical solutions over theory
                  </h3>
                  <p className="text-gray-700 text-[16px] font-['Gotham'] leading-[26px]">
                    We value what works in the real world. Theory is useful, but execution is what matters.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[24px] p-[35px] shadow-md border border-gray-200">
              <div className="flex items-start gap-[20px]">
                <div className="w-[50px] h-[50px] bg-[#ffe102] rounded-full flex items-center justify-center shrink-0">
                  <Shield className="w-[26px] h-[26px] text-[#005f83]" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-[22px] font-['Poppins'] font-bold text-[#005f83] mb-[10px]">
                    Compliance is non-negotiable
                  </h3>
                  <p className="text-gray-700 text-[16px] font-['Gotham'] leading-[26px]">
                    We operate in regulated markets. Cutting corners on compliance is not an option, ever.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[24px] p-[35px] shadow-md border border-gray-200">
              <div className="flex items-start gap-[20px]">
                <div className="w-[50px] h-[50px] bg-[#005f83] rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-[26px] h-[26px] text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-[22px] font-['Poppins'] font-bold text-[#005f83] mb-[10px]">
                    Accountability over activity
                  </h3>
                  <p className="text-gray-700 text-[16px] font-['Gotham'] leading-[26px]">
                    Being busy doesn't mean being effective. We measure outcomes, not hours worked.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[24px] p-[35px] shadow-md border border-gray-200 col-span-2">
              <div className="flex items-start gap-[20px]">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-[#00bfff] to-[#56db46] rounded-full flex items-center justify-center shrink-0">
                  <Zap className="w-[26px] h-[26px] text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-[22px] font-['Poppins'] font-bold text-[#005f83] mb-[10px]">
                    Speed with responsibility
                  </h3>
                  <p className="text-gray-700 text-[16px] font-['Gotham'] leading-[26px]">
                    We move fast in dynamic markets, but speed without diligence creates risk. We balance both.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[40px] bg-[#ffe102]/20 border-l-4 border-[#ffe102] rounded-[12px] p-[30px]">
            <p className="text-[#005f83] text-[16px] font-['Gotham'] leading-[28px] italic">
              <strong className="font-bold not-italic">Note:</strong> These are not values walls. These should guide daily decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="px-[72px] py-[80px] bg-white">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex items-center justify-center gap-[15px] mb-[40px]">
            <div className="w-[70px] h-[70px] bg-gradient-to-br from-[#56db46] to-[#4bc93d] rounded-full flex items-center justify-center">
              <Users className="w-[35px] h-[35px] text-white" strokeWidth={2.5} />
            </div>
            <h2 className="text-[42px] font-['Poppins'] font-bold text-[#005f83] leading-[54px]">
              Our culture
            </h2>
          </div>
          
          <div className="space-y-[30px]">
            <div className="bg-gradient-to-r from-[#00bfff]/10 to-[#56db46]/10 rounded-[24px] p-[40px] border border-[#00bfff]/30">
              <p className="text-[#005f83] text-[20px] font-['Gotham'] leading-[34px] mb-[20px]">
                We operate in fast-moving markets with high expectations. That means ownership, clarity, and respect for execution.
              </p>
              <div className="w-[50px] h-[2px] bg-[#00bfff] mb-[20px]"></div>
              <p className="text-gray-700 text-[18px] font-['Gotham'] leading-[30px]">
                We value people who take responsibility, communicate clearly, and focus on outcomes.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-[20px]">
              <div className="bg-[#005f83] rounded-[20px] p-[30px] text-center">
                <h3 className="text-white text-[18px] font-['Poppins'] font-bold mb-[10px]">
                  Ownership
                </h3>
                <p className="text-white/80 text-[14px] font-['Gotham'] leading-[22px]">
                  Take responsibility for your work and its impact
                </p>
              </div>

              <div className="bg-[#00bfff] rounded-[20px] p-[30px] text-center">
                <h3 className="text-white text-[18px] font-['Poppins'] font-bold mb-[10px]">
                  Clarity
                </h3>
                <p className="text-white/90 text-[14px] font-['Gotham'] leading-[22px]">
                  Communicate directly and transparently
                </p>
              </div>

              <div className="bg-[#56db46] rounded-[20px] p-[30px] text-center">
                <h3 className="text-white text-[18px] font-['Poppins'] font-bold mb-[10px]">
                  Execution
                </h3>
                <p className="text-white/90 text-[14px] font-['Gotham'] leading-[22px]">
                  Deliver on commitments consistently
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="px-[72px] py-[80px] bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[42px] font-['Poppins'] font-bold text-[#005f83] leading-[54px] mb-[20px] text-center">
            Leadership team
          </h2>
          <p className="text-gray-600 text-[16px] font-['Gotham'] text-center mb-[50px]">
            The team responsible for business direction and organizational success
          </p>
          
          <div className="grid grid-cols-3 gap-[30px]">
            {leadershipTeam.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-[24px] overflow-hidden shadow-md hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="h-[280px] overflow-hidden bg-gray-200">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-[25px]">
                  <h3 className="text-[20px] font-['Poppins'] font-bold text-[#005f83] mb-[6px]">
                    {leader.name}
                  </h3>
                  <p className="text-[14px] font-['Poppins'] font-semibold text-[#00bfff] mb-[12px]">
                    {leader.role}
                  </p>
                  <p className="text-[14px] font-['Gotham'] text-gray-700 leading-[22px]">
                    {leader.responsibility}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
