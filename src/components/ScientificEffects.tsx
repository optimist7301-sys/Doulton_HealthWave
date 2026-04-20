import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, Moon, Zap, Brain, Heart, Activity, Flame } from 'lucide-react';

export default function ScientificEffects() {
  const effects = [
    {
      icon: Flame,
      title: "염증 및 통증 관리",
      desc: "만성 염증의 획기적인 감소 및 통증 완화"
    },
    {
      icon: Sparkles,
      title: "피부 재생 및 미용",
      desc: "피부 탄력, 톤, 광채의 눈에 띄는 향상"
    },
    {
      icon: Moon,
      title: "수면 및 호르몬",
      desc: "수면 질 개선 및 호르몬 균형 회복"
    },
    {
      icon: ShieldCheck,
      title: "면역 체계 강화",
      desc: "신체 전반의 면역력 및 방어 기전 증가"
    },
    {
      icon: Brain,
      title: "뇌 기능 지원",
      desc: "치매, 파킨슨 등 신경계 기능 회복 지원"
    },
    {
      icon: Heart,
      title: "심혈관 건강",
      desc: "심혈관 기능 향상 및 혈류 개선"
    },
    {
      icon: Zap,
      title: "활력 및 성기능",
      desc: "전반적인 에너지 레벨 및 성기능 증가"
    },
    {
      icon: Activity,
      title: "주요 장기 재생",
      desc: "간, 신장, 폐 조직의 재생 및 기능 회복"
    }
  ];

  return (
    <section className="py-24 bg-brand-deep text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-brand-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              Scientific Evidence
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              과학적으로 입증된 <br />
              <span className="text-brand-accent">MSC의 대표 효과</span>
            </h2>
            <p className="text-white/60 leading-relaxed">
              중간엽 줄기세포(MSC)는 수많은 임상 연구를 통해 그 재생 능력이 입증되었습니다. 
              단순한 증상 완화를 넘어 신체 전반의 근본적인 회복을 돕습니다.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {effects.map((effect, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-accent/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
                <effect.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-brand-accent transition-colors">{effect.title}</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                {effect.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
