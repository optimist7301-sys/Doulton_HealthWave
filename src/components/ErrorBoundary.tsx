import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorInfo: string | null;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  public props: Props;
  public state: State;
  constructor(props: Props) {
    super(props);
    this.props = props;
    this.state = {
      hasError: false,
      errorInfo: null
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorInfo: error.message };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      let displayMessage = '죄송합니다. 앱 실행 중 오류가 발생했습니다.';
      
      try {
        const parsed = JSON.parse(this.state.errorInfo || '');
        if (parsed.error && parsed.operationType) {
          displayMessage = `데이터 처리 중 오류가 발생했습니다 (${parsed.operationType}). 관리자에게 문의해주세요.`;
        }
      } catch (e) {
        // Not a JSON error
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-paper p-4">
          <div className="max-w-md w-full bg-white p-8 rounded-[32px] shadow-xl text-center">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-serif text-brand-deep mb-4">문제가 발생했습니다</h2>
            <p className="text-brand-deep/60 mb-8">{displayMessage}</p>
            <button
              onClick={() => window.location.reload()}
              className="w-full py-4 bg-brand-deep text-white rounded-2xl font-bold hover:bg-brand-accent transition-all"
            >
              새로고침
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
