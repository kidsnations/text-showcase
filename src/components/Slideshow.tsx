import { useState, useEffect } from 'react';

const dialogs = [
  "Sir, I am unable to relocate due to my family responsibilities.",
  "I am a single child, taking care of my parents, my wife, and three children.",
  "My parents are over 68 and need assistance with daily tasks.",
  "I understand that costs are increasing in the Caesars project. I would be grateful if you could consider me for any DevOps project running offshore. I promise to deliver efficiently.",
  "This is a monolithic website, and the next step is to automate the infrastructure code through Terraform and migrate it into a containerized environment using Azure Kubernetes Services and Azure Container Registry: Code → Dockerfile → Docker Image → Push to ACR → Kubernetes."
];

const diagramUrl = "https://raw.githubusercontent.com/kidsnations/screenshots/main/Project.png";

const Slideshow = () => {
  const [visibleDialogs, setVisibleDialogs] = useState<number[]>([]);
  const [showDiagram, setShowDiagram] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleDialogs((prev) => {
        const nextIndex = prev.length;
        if (nextIndex < dialogs.length) {
          return [...prev, nextIndex];
        } else if (!showDiagram) {
          setShowDiagram(true);
          clearInterval(timer);
        }
        return prev;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [showDiagram]);

  return (
    <div className="dialog-container">
      <div className="dialog-content">
        {dialogs.map((dialog, index) => (
          <div
            key={index}
            className={`dialog-item ${visibleDialogs.includes(index) ? 'visible' : ''}`}
          >
            <p className="dialog-text">
              {dialog}
            </p>
          </div>
        ))}
        
        {showDiagram && (
          <div className="dialog-item visible">
            <img 
              src={diagramUrl} 
              alt="Azure DevOps Architecture Diagram showing complete deployment pipeline"
              className="architecture-image"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Slideshow;