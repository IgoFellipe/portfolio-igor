import { useState } from 'react';
import { Code, Server, Database, Cpu } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import SkillBar from './ui/SkillBar';

// Skill categories and items
const skillCategories = [
  {
    id: 'frontend',
    title: 'Desenvolvimento Front-end',
    icon: <Code size={24} />,
    color: 'blue',
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'React', level: 60 },
    ]
  },
  {
    id: 'backend',
    title: 'Desenvolvimento Back-end',
    icon: <Server size={24} />,
    color: 'green',
    skills: [
      { name: 'Java', level: 70 },
      { name: 'PHP', level: 65 },
      { name: 'Laravel', level: 75 },
    ]
  },
  {
    id: 'suporte',
    title: 'Suporte Técnico',
    icon: <Cpu size={24} />,
    color: 'purple',
    skills: [
      { name: 'Suporte Remoto', level: 95 },
      { name: 'Active Directory', level: 80 },
      { name: 'SAP', level: 75 },
      { name: 'TeamViewer', level: 90 },
    ]
  },
  {
    id: 'outros',
    title: 'Outras Habilidades',
    icon: <Database size={24} />,
    color: 'orange',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Infraestrutura de TI', level: 75 },
      { name: 'Inglês', level: 40 },
    ]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  return (
    <section id="skills" className="py-16 md:py-24 px-4 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle 
          title="Habilidades Técnicas" 
          subtitle="Competências e conhecimentos técnicos" 
        />
        
        <div className="mt-12">
          {/* Skill Categories Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-full 
                  transition-all duration-300 
                  ${activeCategory === category.id 
                    ? `bg-${category.color}-600 text-white` 
                    : 'bg-white dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600'
                  }
                `}
                style={{
                  backgroundColor: activeCategory === category.id 
                    ? category.color === 'blue' ? '#2563eb' 
                    : category.color === 'green' ? '#10b981'
                    : category.color === 'purple' ? '#8b5cf6'
                    : '#f97316'
                    : ''
                }}
              >
                {category.icon}
                <span className="font-medium">{category.title}</span>
              </button>
            ))}
          </div>
          
          {/* Skills Display */}
          <div className="bg-white dark:bg-slate-700 rounded-lg shadow-md p-6 md:p-8">
            {skillCategories.map((category) => (
              <div
                key={category.id}
                className={`${activeCategory === category.id ? 'block' : 'hidden'}`}
              >
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <span className="mr-2">{category.icon}</span>
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={category.color}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Desenvolvimento Contínuo</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Estou constantemente aprimorando minhas habilidades e aprendendo novas tecnologias. 
              Atualmente, estou focado em aprofundar meus conhecimentos em React e iniciar 
              estudos em Node.js para desenvolvimento back-end.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;