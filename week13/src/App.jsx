import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import Layout from './components/layout/Layout';
import { UserInfoProvider } from './context/UserInfoContext';

function App() {
  return (
    <Layout>
      <UserInfoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </UserInfoProvider>
    </Layout>
  )
}

export default App