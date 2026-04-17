import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    {
      title: "상담 및 예약",
      desc: "온라인 또는 전화를 통해 현재 상태를 간단히 확인하고 상담 일정을 예약합니다.",
      tag: "Step 01"
    },
    {
      title: "정밀 진단 및 설계",
      desc: "의료진과의 심층 상담 및 검사를 통해 맞춤형 재생 프로그램을 설계합니다.",
      tag: "Step 02"
    },
    {
      title: "맞춤 시술 진행",
      desc: "표준화된 프로토콜에 따라 안전하고 정밀하게 줄기세포 시술을 진행합니다.",
      tag: "Step 03"
    },
    {
      title: "사후 관리 및 추적",
      desc: "회복 상태를 모니터링하고 장기적인 건강 유지를 위한 가이드를 제공합니다.",
      tag: "Step 04"
    }
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
            >
              Patient Journey
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-deep">
              당신의 회복을 위한 <br />
              <span className="italic">체계적인 여정</span>
            </h2>
          </div>
          <p className="text-brand-deep/50 max-w-sm text-sm leading-relaxed">
            Doulton Healthwave는 시술 그 이상의 가치를 제공합니다. 
            진단부터 사후 관리까지 모든 과정이 당신의 건강에 맞춰져 있습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group p-8 rounded-[32px] bg-brand-light/20 border border-transparent hover:border-brand-accent/20 hover:bg-white hover:shadow-xl transition-all"
            >
              <div className="text-[10px] font-bold tracking-[0.2em] text-brand-accent uppercase mb-6">
                {step.tag}
              </div>
              <h3 className="text-xl font-serif text-brand-deep mb-4">{step.title}</h3>
              <p className="text-brand-deep/50 text-sm leading-relaxed">{step.desc}</p>
              
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-brand-deep/10 z-0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
