import { useState, useEffect } from 'react';
import azureArchitecture from '@/assets/azure-architecture.png';

const slides = [
  "Sir, I am unable to relocate due to family responsibilities.",
  "I am the only child, taking care of my parents, my wife, and three children.",
  "My parents are over 68 and unable to manage day-to-day family needs on their own.",
  "If possible, please assign me to any DevOps project. I promise to deliver results in minimal time."
];

const technicalNote = "This is a monolithic website, and the next step is to migrate it to containers using Azure Kubernetes Services (AKS) and Azure Container Registry (ACR).";

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showTechnicalNote, setShowTechnicalNote] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev < slides.length - 1) {
          return prev + 1;
        } else {
          setShowTechnicalNote(true);
          clearInterval(timer);
          return prev;
        }
      });
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  if (showTechnicalNote) {
    return (
      <div className="slideshow-container">
        <div className="slide active">
          <div className="slide-content">
            <p className="technical-note">
              {technicalNote}
            </p>
            <img 
              src={azureArchitecture} 
              alt="Azure Architecture Diagram showing migration from monolithic to containerized applications using AKS and ACR"
              className="architecture-image"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          <div className="slide-content">
            <p className="slide-text">
              {slide}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;