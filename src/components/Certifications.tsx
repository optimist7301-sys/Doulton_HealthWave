import { motion } from 'motion/react';
import { ShieldCheck, Award, FileCheck } from 'lucide-react';

export default function Certifications() {
  const certs = [
    {
      icon: ShieldCheck,
      title: "GMP 시설 인증",
      desc: "최첨단 무균 공정 및 품질 관리 기준을 준수하는 GMP(Good Manufacturing Practice) 인증 시설에서 안전하게 제조됩니다."
    },
    {
      icon: Award,
      title: "말레이시아 NPRA 승인",
      desc: "말레이시아 식약처(National Pharmaceutical Regulatory Agency)의 엄격한 심사를 통과하여 효능과 안전성을 입증받았습니다."
    },
    {
      icon: FileCheck,
      title: "말레이시아 MOH 승인",
      desc: "말레이시아 보건부(Ministry of Health)의 공식 승인을 받은 신뢰할 수 있는 재생 의료 프로그램입니다."
    }
  ];

  return (
    <section className="py-20 bg-brand-light border-y border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-brand-accent mb-6 shadow-sm border border-line group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                <cert.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-brand-deep mb-3 uppercase tracking-tight">{cert.title}</h3>
              <p className="text-sm text-text-sub leading-relaxed max-w-[280px]">
                {cert.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
