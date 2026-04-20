import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Loader2 } from 'lucide-react';
import { ConcernArea, PatientStatus } from '../types';

export default function ConsultationForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'succeeded' | 'error'>('idle');
  const [remainingSpots, setRemainingSpots] = useState(3);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    concernArea: '무릎' as ConcernArea,
    status: '통증 있음' as PatientStatus,
    contactMethod: 'phone' as 'phone' | 'text' | 'kakao'
  });

  const concernAreas: ConcernArea[] = ['무릎', '어깨', '허리', '피부', '항노화', '기타'];

  useEffect(() => {
    if (remainingSpots > 1) {
      const timer = setTimeout(() => {
        setRemainingSpots(prev => prev - (Math.random() > 0.7 ? 1 : 0));
      }, 15000);
      return () => clearTimeout(timer);
    }
  }, [remainingSpots]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/xkokzvwk', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          source: 'Website Main Form',
          device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
          _subject: `[DH 웹사이트 상담신청] ${formData.name || '고객'}님`,
          _screen_size: `${window.innerWidth}x${window.innerHeight}`,
          user_agent: navigator.userAgent
        })
      });

      if (response.ok) {
        setStatus('succeeded');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  if (status === 'succeeded') {
    return (
      <section id="consultation" className="py-24 bg-brand-deep text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 rounded-full bg-brand-accent flex items-center justify-center mb-8">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-serif mb-4">상담 신청이 완료되었습니다</h2>
            <p className="text-white/60 mb-8">
              빠른 시일 내에 전문 상담원이 연락드리겠습니다. <br />
              Doulton Healthwave를 믿고 찾아주셔서 감사합니다.
            </p>
            <button 
              onClick={() => setStatus('idle')}
              className="text-brand-accent font-bold hover:underline"
            >
              다시 신청하기
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="consultation" className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-start">
          <div>
            <div className="badge-sleek">Consultation</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-brand-deep">
              지금 상태, <br />
              <span className="text-brand-accent">혼자 판단하지 마세요.</span>
            </h2>
            <p className="text-text-sub text-lg mb-12 leading-relaxed max-w-md">
              통증의 원인과 회복 가능성은 개인마다 다르게 나타납니다. 
              전문적인 상담을 통해 당신에게 가장 적합한 재생 프로그램을 확인해보세요.
            </p>
            
            <div className="space-y-6">
              {[
                "현재 상태 정밀 분석",
                "맞춤 프로그램 가능 여부 확인",
                "상담 후 진행 여부 결정 (부담 제로)"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-brand-accent" />
                  </div>
                  <span className="text-sm font-semibold text-brand-deep">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-deep rounded-[24px] p-10 text-white shadow-2xl"
          >
            <h2 className="text-2xl font-bold mb-2">무료 맞춤 상담</h2>
            <p className="text-sm opacity-70 mb-8">현재 상태를 진단하고 적합한 프로그램을 제안해 드립니다.</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-[12px] font-semibold opacity-70 uppercase tracking-wider">성함</label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="홍길동"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-brand-accent outline-none transition-all text-sm"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-[12px] font-semibold opacity-70 uppercase tracking-wider">연락처</label>
                <input
                  required
                  name="contact"
                  type="tel"
                  placeholder="010-0000-0000"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-brand-accent outline-none transition-all text-sm"
                  value={formData.contact}
                  onChange={e => setFormData({ ...formData, contact: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[12px] font-semibold opacity-70 uppercase tracking-wider">관심 부위</label>
                <select
                  name="concernArea"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-brand-accent outline-none transition-all text-sm appearance-none"
                  value={formData.concernArea}
                  onChange={e => setFormData({ ...formData, concernArea: e.target.value as ConcernArea })}
                >
                  {concernAreas.map(area => (
                    <option key={area} value={area} className="bg-brand-deep">{area}</option>
                  ))}
                </select>
              </div>

              <button
                disabled={status === 'submitting'}
                type="submit"
                className="w-full py-4 rounded-lg bg-brand-accent text-white font-bold text-base hover:bg-brand-accent/90 transition-all shadow-lg shadow-brand-accent/20 flex items-center justify-center gap-3 mt-4 disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  "상담 신청하기"
                )}
              </button>
              
              {status === 'error' && (
                <p className="text-xs text-red-400 text-center mt-2">전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.</p>
              )}
              
              <p className="text-[11px] opacity-50 text-center leading-relaxed mt-6">
                개인정보는 상담 목적으로만 사용되며 안전하게 보호됩니다.<br />
                진행 여부는 전문 의료진 상담 후 최종 결정됩니다.
              </p>

              <div className="flex justify-between items-center pt-8 border-t border-white/10 mt-8">
                <div className="text-[12px] flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  오늘 상담 가능 인원 잔여 {remainingSpots}명
                </div>
                <div className="text-[12px]">1:1 집중 케어 원칙</div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
