import { motion } from 'motion/react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function ProblemSolution() {
  const problems = [
    "반복되는 관절 통증으로 일상이 불편하신 분",
    "기존 치료로 충분한 변화를 느끼지 못한 분",
    "수술 없이 근본적인 재생 치료를 원하시는 분",
    "노화로 인한 신체 기능 저하가 고민이신 분"
  ];

  return (
    <section className="py-24 bg-white overflow-hidden border-t border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="badge-sleek">Challenges</div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-brand-deep">
              이런 고민, <br />
              <span className="text-brand-accent">계속 미루고 있지 않나요?</span>
            </h2>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-5 rounded-xl bg-brand-light border border-line"
                >
                  <AlertCircle className="w-5 h-5 text-brand-accent shrink-0" />
                  <span className="text-text-main font-medium text-sm">{problem}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-12 rounded-[32px] bg-brand-deep text-white shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-8">
              Doulton Healthwave의 <br />
              <span className="text-brand-accent">재생 솔루션</span>
            </h3>
            <div className="space-y-8 relative z-10">
              {[
                { title: "개인 상태 기반 맞춤 설계", desc: "단순 시술이 아닌 환자의 증상과 조직 손상 정도를 정밀 분석하여 프로그램을 설계합니다." },
                { title: "와튼젤리 줄기세포 활용", desc: "가장 강력한 재생 능력을 가진 탯줄 유래 와튼젤리 줄기세포를 사용하여 효과를 극대화합니다." },
                { title: "체계적인 사후 관리", desc: "시술 후 회복 모니터링과 운동 가이드를 통해 장기적인 건강을 유지하도록 돕습니다." }
              ].map((item, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                    <span className="font-bold text-brand-accent text-sm">0{i+1}</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-base">{item.title}</h4>
                    <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
