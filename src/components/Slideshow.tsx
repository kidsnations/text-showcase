import { useState, useEffect } from 'react';

const slides = [
  "Sir, I am unable to relocate due to family responsibilities.",
  "I am the only child, taking care of my parents, my wife, and three children.",
  "My parents are over 68 and unable to manage their day-to-day needs on their own.",
  "I understand the costs in the Caesars project are increasing. I sincerely request you to consider me for any DevOps project that can be managed from offshore. I promise to deliver results in minimal time.",
  "The next steps will be to automate the infrastructure code using Terraform and migrate this website into a containerized environment with Azure Kubernetes Services (AKS) and Azure Container Registry (ACR)."
];

const processFlow = "Code → Dockerfile → Docker Image → Push to ACR → Deploy to Kubernetes";
const diagramUrl = "https://raw.githubusercontent.com/kidsnations/screenshots/main/<DIAGRAM_FILENAME>.png";

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
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  if (showTechnicalNote) {
    return (
      <div className="slideshow-container">
        <div className="slide active">
          <div className="slide-content">
            <p className="process-flow">
              {processFlow}
            </p>
            <img 
              src={diagramUrl} 
              alt="DevOps Process Flow Diagram showing Code to Kubernetes deployment pipeline"
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