import { motion } from 'motion/react';
import { Microscope, ShieldCheck, Zap, Activity } from 'lucide-react';

export default function StemCellInfo() {
  const features = [
    {
      icon: Microscope,
      title: "과학적 근거",
      desc: "수많은 임상 데이터를 통해 입증된 와튼젤리의 재생 능력"
    },
    {
      icon: ShieldCheck,
      title: "안전한 프로토콜",
      desc: "엄격한 품질 관리와 표준화된 시술 과정을 준수합니다"
    },
    {
      icon: Zap,
      title: "빠른 회복",
      desc: "최소 침습 시술로 일상 복귀가 빠르며 부작용을 최소화합니다"
    }
  ];

  return (
    <section id="program" className="py-24 bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-brand-deep mb-6 leading-tight"
          >
            재생의 골든 타임을 위한 <br />
            <span className="text-brand-accent text-[1.1em] font-black">와튼젤리(Wharton's Jelly)</span> 줄기세포의 힘
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-brand-deep/60 leading-relaxed mb-10"
          >
            와튼젤리(Wharton's Jelly) 유래 줄기세포는 탯줄 조직에서 추출한 가장 젊고 활성도가 높은 세포입니다. 
            This rich source of mesenchymal stem cells (MSCs) offers unparalleled regenerative potential.
            지방이나 골수 유래 줄기세포보다 수십 배 강력한 증식력과 분화 능력을 갖추고 있어, 재생 의료의 핵심으로 평가받습니다.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            <span className="px-5 py-2 bg-brand-light rounded-full border border-brand-accent/20 text-[11px] font-bold text-brand-deep shadow-sm">
              ✨ 가장 젊은 세포의 강력한 재생력
            </span>
            <span className="px-5 py-2 bg-brand-light rounded-full border border-brand-accent/20 text-[11px] font-bold text-brand-deep shadow-sm">
              🛡️ 타인 거부 반응 없는 안전성
            </span>
            <span className="px-5 py-2 bg-brand-light rounded-full border border-brand-accent/20 text-[11px] font-bold text-brand-deep shadow-sm">
              🧬 고농도 MSC 배양 기술의 정점
            </span>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[32px] shadow-sm hover:shadow-xl transition-all border border-brand-deep/5 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-light flex items-center justify-center text-brand-accent mb-8 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif text-brand-deep mb-4">{feature.title}</h3>
              <p className="text-brand-deep/50 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-12 rounded-[40px] bg-gradient-to-br from-brand-deep to-brand-accent/80 text-white relative overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h3 className="text-3xl font-serif mb-6 italic">"모든 분께 권하지 않습니다."</h3>
              <p className="text-white/80 leading-relaxed mb-8">
                Doulton Healthwave는 무분별한 시술을 지양합니다. 
                철저한 사전 검사와 상담을 통해 줄기세포 치료가 진정으로 도움이 될 수 있는 분들께만 프로그램을 제안합니다. 
                당신의 건강을 위한 가장 신중한 선택을 돕겠습니다.
              </p>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">1:1</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-60">Personalized</div>
                </div>
                <div className="w-px h-10 bg-white/20" />
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">Safety</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-60">Verified</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center">
                    <Activity className="w-5 h-5 text-brand-deep" />
                  </div>
                  <h4 className="text-xl font-bold">치료 결과 사례 (Clinical Cases)</h4>
                </div>
                
                <div className="space-y-6">
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-accent">Case 01. 만성 신부전(CKD)</span>
                      <span className="text-[10px] text-white/40">6개월 경과</span>
                    </div>
                    <p className="text-sm font-bold mb-2">사구체 여과율(eGFR) 15% → 42% 개선</p>
                    <p className="text-xs text-white/60 leading-relaxed">
                      투석 직전 단계의 환자에게 와튼젤리 MSC 투여 후 신장 기능 수치 대폭 향상 및 컨디션 회복
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-accent">Case 02. 퇴행성 관절염</span>
                      <span className="text-[10px] text-white/40">3개월 경과</span>
                    </div>
                    <p className="text-sm font-bold mb-2">통증 지수(VAS) 8 → 2 감소</p>
                    <p className="text-xs text-white/60 leading-relaxed">
                      연골 손상으로 보행이 힘들었던 환자의 연골 재생 유도 및 염증 수치 정상화
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-accent">Case 03. 항노화 및 활력</span>
                      <span className="text-[10px] text-white/40">1개월 경과</span>
                    </div>
                    <p className="text-sm font-bold mb-2">텔로미어 길이 연장 및 생체 나이 감소</p>
                    <p className="text-xs text-white/60 leading-relaxed">
                      전반적인 면역력 증강, 피부 탄력 개선 및 만성 피로도 70% 이상 감소 확인
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
