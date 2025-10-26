import React, { useState, useEffect, useRef } from 'react';
import { CERTIFICATIONS } from '../constants';
import type { Certificate } from '../types';

const SectionTitle: React.FC<{ number: string; title: string; }> = ({ number, title }) => (
    <div className="flex items-center gap-4 mb-12 animate-fade-in-up w-full">
        <h2 className="text-2xl md:text-3xl font-sans font-bold text-slate-light whitespace-nowrap">
            <span className="text-accent font-mono text-xl md:text-2xl mr-2">{number}.</span>
            {title}
        </h2>
        <div className="w-full h-px bg-slate-700/50"></div>
    </div>
);

const CertificateCard: React.FC<{ certificate: Certificate; onCardClick: (cert: Certificate) => void; }> = ({ certificate, onCardClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Start loading the image when the card is about to enter the viewport
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '100px 0px', // Trigger when the element is 100px away from the viewport
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="group relative aspect-video rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-accent/20 hover:scale-105 bg-light-bg"
      onClick={() => onCardClick(certificate)}
    >
      {/* Placeholder with pulse animation */}
      <div className={`absolute inset-0 bg-light-bg transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100 animate-pulse'}`}></div>
      
      {/* Lazy-loaded image */}
      <img 
        src={isInView ? certificate.imageUrl : ''} 
        alt={certificate.title} 
        className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
        loading="lazy" // Native lazy loading for fallback
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

const Certifications = React.forwardRef<HTMLElement>((_, ref) => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <>
      <section ref={ref} id="certifications" className="page-container certifications-bg">
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionTitle number="06" title="My Certifications" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <div key={index} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CertificateCard certificate={cert} onCardClick={setSelectedCert} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Lightbox */}
      {selectedCert && (
        <div 
          className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 animate-fade-in-up"
          onClick={() => setSelectedCert(null)}
          style={{ animationDuration: '0.3s' }}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] bg-light-bg p-4 rounded-lg shadow-2xl shadow-black/50"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedCert.imageUrl.replace('/800/600', '/1200/800')} alt={selectedCert.title} className="w-full h-full object-contain max-h-[calc(90vh-80px)]" />
            <div className="text-center mt-2">
              <h3 className="text-xl font-bold text-slate-light">{selectedCert.title}</h3>
              <p className="text-slate">{selectedCert.issuer} - {selectedCert.year}</p>
            </div>
            <button 
              onClick={() => setSelectedCert(null)} 
              className="absolute -top-4 -right-4 bg-accent text-dark-bg rounded-full w-10 h-10 flex items-center justify-center font-bold text-2xl hover:scale-110 transition-transform"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
});

Certifications.displayName = "Certifications";
export default Certifications;