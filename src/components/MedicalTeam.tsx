import { motion } from 'motion/react';
import { Award, GraduationCap, Stethoscope, CheckCircle2, ChevronRight } from 'lucide-react';

export default function MedicalTeam() {
  const doctors = [
    {
      name: "아룰카네쉬 데바타탄 (Dr. Arulkanesh Devatathan)",
      role: "Orthopedic & Trauma Surgeon",
      specialty: "관절 재생, 복합 외상 수술 및 스포츠 의학",
      image: "https://www.pantai.com.my/images/default-source/doctor-image/arulkanesh-devatathan.webp?sfvrsn=44edfe5e_4?status=Master",
      education: [
        "University of Malaya 의학사 (MBBS)",
        "University of Malaya 정형외과 석사 (MS Orth)",
        "말레이시아 국립의료인명부(NSR) 전문의 등록"
      ],
      experience: [
        "현) Pantai Hospital Ampang 정형외과 전문의",
        "복잡 외상 및 관절 재건 수술 분야의 권위자",
        "스포츠 손상 및 비수술적 줄기세포 재생 치료 다수 집도",
        "말레이시아 정형외과 학회(MOA) 정회원 및 학술 활동"
      ]
    },
    {
      name: "세아 진 유안 (Dr. Seah Jin Yuan)",
      role: "Wellness & Regenerative Specialist",
      specialty: "첨단 생체·세포 치료 및 기능의학",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800",
      education: [
        "Russian National Research Medical University 의학박사 (MD)",
        "Institute for Functional Medicine (AFMCP) 수료",
        "American Academy of Anti-Aging Medicine (A4M) 회원"
      ],
      experience: [
        "현) 말레이시아 웰니스 클리닉 전문의 (2017-현재)",
        "말레이시아 보건부(MMC 81791) 정식 등록 전문의",
        "생체 동일 호르몬 대체 치료(BHRT) 인증 전문의",
        "신장질환(CKD) 및 만성 난치성 질환 줄기세포 임상 사례 다수"
      ]
    },
    {
      name: "데이비드 돌튼 (Dr. David Doulton)",
      role: "Chief Scientist & Founder",
      specialty: "재생 생명공학 및 세포 배양 프로토콜",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800",
      education: [
        "영국 임페리얼 칼리지 런던(Imperial College London) 재생의학 박사",
        "옥스퍼드 대학교 생명공학 석사"
      ],
      experience: [
        "와튼젤리 유래 중간엽 줄기세포(MSC) 추출 및 정밀 배양 프로토콜 개발",
        "영국 돌튼 의료용 여과 기술(Filtration Technology) 총괄 설계",
        "국제 줄기세포 학회(ISSCR) 정회원 및 기술 자문",
        "글로벌 재생 의료 표준화 및 안전 가이드라인 수립 참여"
      ]
    },
    {
      name: "아미라 빈티 알리 (Dr. Amirah Binti Ali)",
      role: "Internal Medicine Specialist",
      specialty: "내과 질환, 당뇨 및 만성 질환 관리",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800",
      education: [
        "University of Malaya 의학사 (MBBS)",
        "말레이시아 국립의료인명부(NSR) 내과 전문의 등록"
      ],
      experience: [
        "현) Pantai Hospital Ampang 내과 전문의",
        "만성 질환(당뇨, 고혈압) 및 대사 증후군 관리 전문가",
        "줄기세포 치료를 병행한 만성 질환 케어 임상 경험",
        "말레이시아 내과학회 정회원"
      ]
    }
  ];

  return (
    <section id="team" className="py-24 bg-white border-t border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="badge-sleek">Medical Experts</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-deep mb-6 leading-tight">
              신뢰할 수 있는 <br />
              <span className="text-brand-accent">글로벌 전문 의료진</span>
            </h2>
            <p className="text-text-sub leading-relaxed">
              Doulton Healthwave는 검증된 실력과 풍부한 임상 경험을 갖춘 
              분야별 전문가들이 당신의 재생 프로그램을 직접 설계하고 집도합니다.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <div className="flex items-center gap-4 p-6 bg-brand-light rounded-2xl border border-line">
              <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-brand-deep">검증된 전문성</div>
                <div className="text-xs text-text-sub">말레이시아 보건부(MMC) 정식 등록</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col h-full"
            >
              <div className="bg-white rounded-[40px] p-6 border border-line hover:border-brand-accent/30 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-all duration-500 flex-1 flex flex-col">
                <div className="relative mb-6">
                  <div className="aspect-[4/5] rounded-[32px] overflow-hidden shadow-lg">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-xl shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <Stethoscope className="w-5 h-5 text-brand-accent" />
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-brand-accent font-bold text-[10px] uppercase tracking-[0.2em] mb-2">{doc.role}</div>
                  <h3 className="text-xl font-extrabold text-brand-deep mb-2 group-hover:text-brand-accent transition-colors">{doc.name}</h3>
                  <p className="text-xs text-text-sub font-medium leading-relaxed">{doc.specialty}</p>
                </div>

                <div className="space-y-6 flex-1">
                  <div className="pt-6 border-t border-line/50">
                    <div className="flex items-center gap-2 text-brand-deep font-bold text-[10px] uppercase tracking-wider mb-3">
                      <GraduationCap className="w-3.5 h-3.5 text-brand-accent" />
                      Education
                    </div>
                    <ul className="text-[11px] text-text-sub space-y-2">
                      {doc.education.map((edu, i) => (
                        <li key={i} className="leading-relaxed flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-brand-accent/40 mt-1.5 shrink-0" />
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 text-brand-deep font-bold text-[10px] uppercase tracking-wider mb-3">
                      <Award className="w-3.5 h-3.5 text-brand-accent" />
                      Experience
                    </div>
                    <ul className="text-[11px] text-text-sub space-y-2">
                      {doc.experience.map((exp, i) => (
                        <li key={i} className="flex gap-2 leading-relaxed">
                          <ChevronRight className="w-3 h-3 text-brand-accent shrink-0 mt-0.5" />
                          {exp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
