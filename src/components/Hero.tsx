import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="badge-sleek">Regenerative Medical Solution</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.15] text-brand-deep mb-8 tracking-tighter">
              회복의 깊이가 다른 <br />
              <span className="text-brand-accent">맞춤형 재생 관리</span>
            </h1>
            <p className="text-lg md:text-xl text-text-sub max-w-xl mb-12 leading-relaxed">
              반복되는 통증과 노화, 이제 근본적인 변화가 필요합니다. 
              와튼젤리 줄기세포 기반의 정밀 프로그램으로 당신의 건강 파동을 다시 설계하세요.
            </p>
            
            <div className="grid grid-cols-2 gap-5">
              {[
                { title: "Scientific Purity", desc: "영국 돌튼의 여과 기술로 완성된 가장 깨끗한 환경에서의 케어 (국가기관 인증된 시설과 종합병원)" },
                { title: "Evidence-based", desc: "임상 데이터 기반의 개인별 맞춤 재생 프로세스 설계" },
                { title: "Professional Care", desc: "의료 전문가의 정밀 진단과 전담 매니저의 사후 관리" },
                { title: "Safety Protocol", desc: "국제 기준을 준수하는 표준화된 안전 시술 프로토콜" }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl bg-white border border-line">
                  <h3 className="text-base font-bold text-brand-deep mb-2">{item.title}</h3>
                  <p className="text-xs text-text-sub leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="hidden lg:block">
            {/* The ConsultationForm will be placed here in the layout if we follow the design HTML exactly, 
                but for now I'll just keep the Hero content and let the ConsultationForm component handle its own placement 
                or I can move it here if the user wants a split layout. 
                The design HTML shows the booking card in an <aside> inside <main>.
            */}
            <div className="aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000"
                alt="Modern Medical Facility"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { HeartPulse } from 'lucide-react';
