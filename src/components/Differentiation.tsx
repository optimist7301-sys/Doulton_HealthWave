import { motion } from 'motion/react';
import { Award, Activity } from 'lucide-react';

export default function Differentiation() {
  return (
    <section className="py-24 bg-paper border-t border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="badge-sleek">Differentiation</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-deep mb-6 text-balance">
            Doulton Healthwave만의 <br className="hidden md:block" />
            <span className="text-brand-accent">특별한 차별점</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-10 rounded-[32px] bg-white border border-line shadow-sm hover:shadow-xl transition-all group"
          >
            <div className="w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center text-brand-accent mb-8 group-hover:bg-brand-accent group-hover:text-white transition-all">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-extrabold text-brand-deep mb-4">국제 인증 최고 등급 줄기세포</h3>
            <p className="text-text-sub leading-relaxed">
              Doulton Healthwave는 국제 기준을 통과한 최고 등급의 탯줄 유래 줄기세포만을 사용합니다. 
              가장 순수하고 활성도가 높은 세포만을 선별하여 시술의 결과와 안전성을 극대화합니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-10 rounded-[32px] bg-white border border-line shadow-sm hover:shadow-xl transition-all group"
          >
            <div className="w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center text-brand-accent mb-8 group-hover:bg-brand-accent group-hover:text-white transition-all">
              <Activity className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-extrabold text-brand-deep mb-4">손상된 조직의 효과적 치유 및 재생</h3>
            <p className="text-text-sub leading-relaxed">
              단순한 증상 완화를 넘어, 손상된 조직 자체의 재생을 유도합니다. 
              강력한 분화 능력을 가진 MSC가 염증을 억제하고 조직의 근본적인 회복을 돕습니다.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
