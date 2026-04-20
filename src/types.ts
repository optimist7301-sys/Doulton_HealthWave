export interface ConsultationRequest {
  id?: string;
  name: string;
  contact: string;
  concernArea: string;
  status: string;
  contactMethod: 'phone' | 'text' | 'kakao';
  createdAt: any;
  userId?: string;
}

export type ConcernArea = 
  | '선택'
  | '만성질환(당뇨병,고혈압,만성신부전,간경화,심부전)' 
  | '퇴행성 관절염(무릅,어깨,허리,류머티즈)' 
  | '자폐,ADHD'
  | '뇌 및 신경질환(파킨슨,치매,알츠하이머,척수·신경손상)' 
  | '만성폐쇄성폐질환' 
  | '피부 및 기타질환(피부재생,아토피,안티에이징)' 
  | '성기능향상및 질환(전립선비대증,요실금)'
  | '기타';
export type PatientStatus = '통증 있음' | '만성' | '재발' | '예방/관리';
