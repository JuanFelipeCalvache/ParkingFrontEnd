// src/components/Layout.jsx

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom'; 

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <main className="flex-1 p-6 bg-base-100">
          <Outlet /> 
        </main>
      </div>
      <Footer />
    </div>
  );
}
