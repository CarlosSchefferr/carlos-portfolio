// components/ExperienceSection.tsx
import React from 'react';
import ExperienceCard from './ExperienceCard';
import styles from './ExperienceSection.module.css';

const experiences = [
  {
    jobTitle: 'Desenvolvedor PHP',
    company: 'Exon Sistemas',
    duration: 'Junho 2023 - Presente',
    description: 'Desenvolvimento e manutenção de sistemas em PHP.',
  },
  {
    jobTitle: 'Estagiário em Desenvolvimento',
    company: 'Nome da Empresa',
    duration: 'Janeiro 2023 - Maio 2023',
    description: 'Auxílio no desenvolvimento de aplicações web.',
  },
  // Adicione mais experiências aqui
];

const ExperienceSection: React.FC = () => {
  return (
    <section className={styles.experienceSection}>
      <h2>Experiências</h2>
      <div className={styles.experienceList}>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            jobTitle={experience.jobTitle}
            company={experience.company}
            duration={experience.duration}
            description={experience.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
