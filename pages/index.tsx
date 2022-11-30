import React from 'react';
import dynamic from 'next/dynamic';

const Home = dynamic(() => import('pages/Home'), { ssr: false });

const pages: React.FC = () => {
  return <Home />;
};

export default pages;
