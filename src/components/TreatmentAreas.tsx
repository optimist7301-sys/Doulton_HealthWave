import { motion } from 'motion/react';
import { Brain, Heart, Activity, Bone, Sparkles } from 'lucide-react';

export default function TreatmentAreas() {
  const areas = [
    {
      icon: Brain,
      title: "뇌 및 신경 질환",
      diseases: ["파킨슨병", "알츠하이머", "뇌졸중 후유증", "척수 손상"],
      desc: "신경 세포의 보호 및 재생을 돕고 염증 반응을 조절하여 신경계 기능을 회복시킵니다."
    },
    {
      icon: Heart,
      title: "심혈관 질환",
      diseases: ["심부전", "허혈성 심장 질환", "동맥경화"],
      desc: "새로운 혈관 형성을 촉진하고 손상된 심장 근육의 회복을 지원합니다."
    },
    {
      icon: Activity,
      title: "만성 질환 및 장기 재생",
      diseases: ["당뇨병", "당뇨 합병증", "만성 신부전(CKD)", "간경변"],
      desc: "장기 내 섬유화를 억제하고 세포 수준에서의 기능 정상화를 유도합니다."
    },
    {
      icon: Bone,
      title: "근골격계 및 관절 질환",
      diseases: ["퇴행성 관절염", "류마티스 관절염", "연골 손상"],
      desc: "연골 재생을 촉진하고 관절 내 염증을 획기적으로 감소시켜 통증을 근본적으로 해결합니다."
    },
    {
      icon: Sparkles,
      title: "피부 및 기타 질환",
      diseases: ["아토피 피부염", "항노화(Anti-aging)", "자가면역 질환"],
      desc: "면역 체계를 정상화하고 피부 조직의 콜라겐 생성을 도와 재생을 촉진합니다."
    }
  ];

  return (
    <section id="areas" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="badge-sleek">Treatment Areas</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-deep mb-6 leading-tight">
              MSC 치료로 효과를 볼 수 있는 <br />
              <span className="text-brand-accent">대표 질환들</span>
            </h2>
            <p className="text-text-sub leading-relaxed">
              중간엽 줄기세포(MSC)는 강력한 분화 능력과 면역 조절 기능을 통해 
              다양한 난치성 질환 및 만성 질환의 새로운 대안이 되고 있습니다.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[32px] bg-brand-light border border-line hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-brand-accent mb-6 shadow-sm group-hover:bg-brand-accent group-hover:text-white transition-all">
                <area.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-brand-deep mb-4">{area.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {area.diseases.map((disease, i) => (
                  <span key={i} className="px-3 py-1 bg-white border border-line rounded-full text-[11px] font-bold text-brand-deep/70">
                    {disease}
                  </span>
                ))}
              </div>
              <p className="text-sm text-text-sub leading-relaxed">
                {area.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
