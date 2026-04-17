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

export type ConcernArea = '무릎' | '어깨' | '허리' | '피부' | '항노화' | '기타';
export type PatientStatus = '통증 있음' | '만성' | '재발' | '예방/관리';
