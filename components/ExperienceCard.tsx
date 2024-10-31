// components/ExperienceCard.tsx
import React from 'react';
import styles from './ExperienceCard.module.css'; // Estilos específicos para o card de experiência

interface ExperienceCardProps {
  jobTitle: string;
  company: string;
  duration: string;
  description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ jobTitle, company, duration, description }) => {
  return (
    <div className={styles.experienceCard}>
      <h3 className={styles.jobTitle}>{jobTitle}</h3>
      <h4 className={styles.company}>{company}</h4>
      <p className={styles.duration}>{duration}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ExperienceCard;
