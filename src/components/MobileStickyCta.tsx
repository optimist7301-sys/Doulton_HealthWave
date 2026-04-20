import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, X, CheckCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ConcernArea } from '../types';

export default function MobileStickyCta() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'succeeded' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    concernArea: '선택' as ConcernArea,
    privacyAgreed: false
  });

  const concernAreas: ConcernArea[] = [
    '선택',
    '만성질환(당뇨병,고혈압,만성신부전,간경화,심부전)',
    '퇴행성 관절염(무릅,어깨,허리,류머티즈)',
    '자폐,ADHD',
    '뇌 및 신경질환(파킨슨,치매,알츠하이머,척수·신경손상)',
    '만성폐쇄성폐질환',
    '피부 및 기타질환(피부재생,아토피,안티에이징)',
    '성기능향상및 질환(전립선비대증,요실금)',
    '기타'
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      }
    };
    
    // Show after a short delay even without scroll for an "active" feel
    const timer = setTimeout(() => setIsVisible(true), 2000);
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAgreed) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }
    if (formData.concernArea === '선택') {
      alert('관심 부위를 선택해주세요.');
      return;
    }
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
          source: 'Mobile Sticky Bar Modal',
          device: 'Mobile',
          _subject: `[DH 모바일 퀵신청] ${formData.name || '고객'}님`,
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

  const handlePhoneClick = () => {
    // Tracking call intent in background
    fetch('https://formspree.io/f/xkokzvwk', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        event: 'Phone Call Intent Triggered',
        source: 'Mobile Sticky Bar Phone Button',
        device: 'Mobile',
        _subject: '[DH 전화상담 유입 알림]',
        user_agent: navigator.userAgent
      })
    }).catch(console.error);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden"
          >
            <div className="bg-brand-deep rounded-2xl shadow-2xl p-4 flex items-center justify-between gap-4 border border-white/10 backdrop-blur-lg bg-opacity-95">
              <div className="flex flex-col">
                <span className="text-[10px] text-white/50 uppercase font-bold tracking-widest leading-none mb-1">Doulton Healthwave</span>
                <span className="text-sm font-bold text-white tracking-tight">전문가 무료 상담</span>
              </div>
              
              <div className="flex items-center gap-2">
                <a 
                  href="tel:010-2453-6534"
                  onClick={handlePhoneClick}
                  className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white border border-white/10 active:bg-white/20"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 h-12 rounded-xl bg-brand-accent text-white font-bold flex items-center gap-2 shadow-lg shadow-brand-accent/20 active:scale-95 transition-transform"
                >
                  신청하기
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick Consultation Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsModalOpen(false);
                if (status === 'succeeded') setStatus('idle');
              }}
              className="absolute inset-0 bg-brand-deep/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-sm bg-white rounded-3xl overflow-hidden p-8 shadow-2xl"
            >
              <button 
                onClick={() => {
                  setIsModalOpen(false);
                  if (status === 'succeeded') setStatus('idle');
                }}
                className="absolute top-6 right-6 text-text-sub hover:text-brand-deep transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {status === 'succeeded' ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6 text-emerald-600">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-deep mb-2">상담 신청 완료</h3>
                  <p className="text-sm text-text-sub leading-relaxed">
                    내용이 메일로 전송되었습니다.<br />
                    곧 전문 상담원이 연락드리겠습니다.
                  </p>
                  <button 
                    onClick={() => {
                      setIsModalOpen(false);
                      setStatus('idle');
                    }}
                    className="mt-8 text-brand-accent font-bold text-sm hover:underline"
                  >
                    닫기
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-brand-deep mb-2">실시간 빠른 상담</h3>
                    <p className="text-sm text-text-sub">성함과 연락처를 남겨주시면 <br />즉시 메일로 알림이 전송됩니다.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="mobile-name" className="text-[11px] font-bold text-text-sub uppercase">성함</label>
                      <input 
                        required
                        id="mobile-name"
                        name="name"
                        type="text"
                        placeholder="성함을 입력하세요"
                        className="w-full h-12 px-4 rounded-xl border border-line focus:border-brand-accent outline-none text-sm transition-all text-brand-deep"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="mobile-contact" className="text-[11px] font-bold text-text-sub uppercase">연락처</label>
                      <input 
                        required
                        id="mobile-contact"
                        name="contact"
                        type="tel"
                        placeholder="연락처를 입력하세요"
                        className="w-full h-12 px-4 rounded-xl border border-line focus:border-brand-accent outline-none text-sm transition-all text-brand-deep"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="mobile-area" className="text-[11px] font-bold text-text-sub uppercase">관심 부위</label>
                      <select
                        id="mobile-area"
                        name="concernArea"
                        className="w-full h-12 px-4 rounded-xl border border-line focus:border-brand-accent outline-none text-sm transition-all text-brand-deep appearance-none bg-white"
                        value={formData.concernArea}
                        onChange={e => setFormData({ ...formData, concernArea: e.target.value as ConcernArea })}
                      >
                        {concernAreas.map(area => (
                          <option key={area} value={area}>{area}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex items-start gap-2 pt-2">
                      <input
                        required
                        id="privacy-mobile"
                        type="checkbox"
                        className="mt-1 w-4 h-4 rounded border-gray-300 text-brand-accent focus:ring-brand-accent cursor-pointer"
                        checked={formData.privacyAgreed}
                        onChange={e => setFormData({ ...formData, privacyAgreed: e.target.checked })}
                      />
                      <label htmlFor="privacy-mobile" className="text-[11px] text-text-sub leading-tight cursor-pointer flex-1">
                        개인정보 수집 및 이용 동의 (필수)
                      </label>
                      <button 
                        type="button"
                        onClick={() => alert('개인정보 수집 및 이용 안내\n\n1. 수집항목: 성함, 연락처, 관심부위\n2. 수집목적: 서비스 이용에 따른 본인확인 및 상담 서비스 제공\n3. 보유기간: 상담 완료 후 1년 (고객 요청 시 파기)')}
                        className="text-[10px] text-brand-deep/40 underline hover:text-brand-deep/60"
                      >
                        상세보기
                      </button>
                    </div>
                    
                    <button 
                      disabled={status === 'submitting'}
                      type="submit"
                      className="w-full h-14 bg-brand-deep text-white rounded-xl font-bold flex items-center justify-center gap-3 active:scale-95 transition-transform disabled:opacity-50"
                    >
                      {status === 'submitting' ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        "지금 바로 신청하기"
                      )}
                    </button>
                    {status === 'error' && (
                      <p className="text-[10px] text-center text-red-500 mt-2">전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.</p>
                    )}
                    <p className="text-[10px] text-center text-text-sub opacity-50">상기 정보는 상담 목적으로만 사용됩니다.</p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
