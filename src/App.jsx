import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import  page components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AchievementsPage from './pages/AchievementsPage';
import ContactPage from './pages/ContactPage';
// Import other pages as you create them

function App() {
  return (
    <>
      <ScrollToTop />
      {/* Use Flexbox column layout ensuring minimum screen height */}
      <div className="flex flex-col min-h-screen bg-slate-900"> {/* Added bg here for consistency */}
        <Navbar />

      {/* Main content area: grows to fill space, centered, padded */}
      <main className="flex-grow container mx-auto px-6 py-8">
        <Routes>
          {/* Define routes for your pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
    </>
  );
}

export default App;