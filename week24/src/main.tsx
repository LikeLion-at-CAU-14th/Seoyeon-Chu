import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// [실습] QueryClient 인스턴스 생성하기

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* [실습] QueryClientProvider로 App 감싸기 */}
		<App/>
  </StrictMode>,
);