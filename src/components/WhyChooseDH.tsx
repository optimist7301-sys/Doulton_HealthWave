import { motion } from 'motion/react';
import { CheckCircle2, Globe2, ShieldCheck, Scale } from 'lucide-react';

export default function WhyChooseDH() {
  const reasons = [
    {
      icon: Scale,
      title: "합법적 치료 환경",
      desc: "말레이시아는 탯줄 유래 줄기세포 치료가 법적으로 허용되어 있으며, 정부 차원의 엄격한 가이드라인을 준수합니다."
    },
    {
      icon: Globe2,
      title: "글로벌 의료 시스템",
      desc: "선진화된 의료 시스템과 체계적인 관리 인프라를 갖추고 있어 전 세계 환자들이 믿고 찾는 재생 의료의 중심지입니다."
    },
    {
      icon: ShieldCheck,
      title: "정부 승인 프로세스",
      desc: "보건부(MOH)와 식약처(NPRA)의 이중 승인 시스템을 통해 시술의 안전성과 투명성을 보장합니다."
    },
    {
      icon: CheckCircle2,
      title: "최고의 MSC 치료 경험",
      desc: "말레이시아의 선진 의료 인프라와 DH만의 정밀 프로토콜이 만나, 환자분께 가장 효과적이고 편안한 치료 경험을 선사합니다."
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="badge-sleek">Why Choose Us</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-deep mb-8 leading-tight">
              왜 Doulton Healthwave(DH)를 <br />
              <span className="text-brand-accent">선택해야 하는가</span>
            </h2>
            <p className="text-text-sub text-lg mb-10 leading-relaxed">
              말레이시아는 탯줄 유래 줄기세포 치료가 합법적이며, 
              관련 시스템이 세계적으로 가장 잘 갖춰진 국가 중 하나입니다. 
              <span className="text-brand-deep font-bold">Doulton Healthwave는 이러한 선진 의료 인프라를 기반으로 당신에게 최고의 MSC 치료 경험을 제공합니다.</span>
            </p>
            
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-5 rounded-xl bg-brand-light border border-line group hover:border-brand-accent transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-brand-accent shrink-0 shadow-sm border border-line group-hover:bg-brand-accent group-hover:text-white transition-all">
                    <reason.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-deep mb-1 text-base">{reason.title}</h4>
                    <p className="text-text-sub text-xs leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000"
                alt="Modern Hospital Interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/60 to-transparent" />
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-brand-accent p-8 rounded-3xl shadow-2xl text-white max-w-xs">
              <div className="text-3xl font-extrabold mb-2">Legal & Safe</div>
              <p className="text-sm opacity-90 leading-relaxed">
                말레이시아 보건부 가이드라인을 준수하는 합법적이고 안전한 재생 의료 환경을 제공합니다.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
