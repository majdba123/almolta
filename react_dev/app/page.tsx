// app/page.tsx أو app/index.tsx
import React from 'react';
import Header from './component/header/header'; // استيراد مكون الهيدر

const Home: React.FC = () => {
  return (
    <div>
      <Header /> {/* استخدام مكون الهيدر */}
      <main>
        <h1>مرحبًا بك في الصفحة الرئيسية!</h1>
        {/* محتوى الصفحة الرئيسية هنا */}
      </main>
    </div>
  );
};

export default Home;