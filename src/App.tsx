import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/Loading';
import ScrollToTop from './components/ui/ScrollToTop';

const Home = React.lazy(() => import('./pages/Home'));
const Medical = React.lazy(() => import('./pages/Medical'));
const Office = React.lazy(() => import('./pages/Office'));
const Retail = React.lazy(() => import('./pages/Retail'));
const Industrial = React.lazy(() => import('./pages/Industrial'));

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <Suspense fallback={<Loading />}>
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/medical" element={<Medical />} />
                  <Route path="/office" element={<Office />} />
                  <Route path="/retail" element={<Retail />} />
                  <Route path="/industrial" element={<Industrial />} />
                </Routes>
              </AnimatePresence>
            </Suspense>
            <Footer />
          </div>
        </BrowserRouter>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;