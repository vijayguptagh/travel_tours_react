import React from 'react';
import { Destinations, DownloadApp, Footer, Home, Navbar, Offer, ScrollToTop, Services, Testimonial, Tours } from './components';

const App = () => (
  <main>
    <ScrollToTop />
    <Navbar />
    <section>
      <Home />
      <Services />
      <Destinations />
      <Offer />
      <Tours />
      <Testimonial />
      <DownloadApp />
    </section>
    <Footer />
  </main>
);

export default App;
