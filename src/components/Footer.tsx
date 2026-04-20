import { HeartPulse, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-20 border-t border-brand-deep/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <HeartPulse className="w-8 h-8 text-brand-accent" />
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold tracking-tight text-brand-deep leading-none">
                  Doulton <span className="text-brand-accent italic">Healthwave</span>
                </span>
                <span className="text-[11px] font-bold text-brand-accent tracking-[0.15em] mt-1">
                  와튼젤리줄기세포 치료
                </span>
              </div>
            </div>
            <p className="text-brand-deep/50 max-w-sm leading-relaxed mb-8">
              건강을 흐르게 하는 프리미엄 라이프 솔루션. 
              와튼젤리 줄기세포를 통한 개인 맞춤 재생 프로그램을 제안합니다.
            </p>
            <div className="flex gap-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-deep hover:bg-brand-accent hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-deep hover:bg-brand-accent hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-deep hover:bg-brand-accent hover:text-white transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            <div className="bg-brand-light/50 border border-brand-accent/20 rounded-2xl p-4 max-w-sm mb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-6 bg-[#FAE100] rounded flex items-center justify-center text-[#3C1E1E]">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.557 1.707 4.8 4.27 6.054-.188.702-.682 2.545-.78 2.926-.124.481.178.476.37.351.15-.098 2.39-1.62 3.357-2.267.575.082 1.17.126 1.783.126 4.97 0 9-3.186 9-7.115S16.97 3 12 3z"/></svg>
                </div>
                <span className="text-[10px] font-bold text-brand-deep uppercase tracking-wider">KakaoTalk Consultation</span>
              </div>
              <p className="text-xs text-brand-deep/70 mb-2">상담연결 지연시 카톡으로 문의주세요</p>
              <a 
                href="https://open.kakao.com/o/sMu6Ru7h" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-extrabold text-brand-deep hover:text-brand-accent transition-colors"
              >
                카카오톡으로 문의하기
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </a>
            </div>

            <div className="bg-brand-light/50 border border-brand-accent/20 rounded-2xl p-4 max-w-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-6 bg-[#03C75A] rounded flex items-center justify-center text-white text-[10px] font-black">N</div>
                <span className="text-[10px] font-bold text-brand-deep uppercase tracking-wider">Naver Blog Search</span>
              </div>
              <p className="text-xs text-brand-deep/70 mb-1">네이버에서 아래 문구를 검색해보세요</p>
              <div className="bg-white border border-brand-accent/30 rounded-lg px-3 py-2 flex items-center justify-between">
                <span className="text-sm font-extrabold text-brand-deep">회복을설명하다</span>
                <div className="text-[#03C75A]">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-brand-deep mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4 text-sm text-brand-deep/60">
              <li><a href="#program" className="hover:text-brand-accent transition-colors">프로그램 소개</a></li>
              <li><a href="#areas" className="hover:text-brand-accent transition-colors">치료 가능 영역</a></li>
              <li><a href="#process" className="hover:text-brand-accent transition-colors">치료 프로세스</a></li>
              <li><a href="#consultation" className="hover:text-brand-accent transition-colors">상담 예약</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-deep mb-6 uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-4 text-sm text-brand-deep/60">
              <li>경기도 화성시 동탄지성로 11, <br />동탄에스알골드프라자 714호</li>
              <li>Tel: 010-2453-6534</li>
              <li>Email: optimist374220@naver.com</li>
              <li>
                평일: 09:00 - 19:00 <br />
                토요일: 09:00 - 13:00
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-brand-deep/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-brand-deep/30 uppercase tracking-[0.2em]">
          <p>© 2026 Doulton Healthwave. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-deep transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-deep transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
