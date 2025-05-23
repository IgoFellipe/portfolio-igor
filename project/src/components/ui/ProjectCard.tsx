import { useState } from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';

interface ProjectFeature {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  features: string[];
}

interface ProjectCardProps {
  project: ProjectFeature;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-blue-600/80 text-white rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1 mb-4 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          <Layers size={16} />
          <span>{showDetails ? 'Ocultar detalhes' : 'Ver detalhes'}</span>
        </button>
        
        {showDetails && (
          <div className="mb-4 bg-gray-50 dark:bg-slate-700 p-3 rounded-md">
            <h4 className="font-medium mb-2">Funcionalidades:</h4>
            <ul className="space-y-1">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start text-sm">
                  <span className="inline-block w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-1.5 mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="flex gap-2">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm flex-1 justify-center"
          >
            <ExternalLink size={16} />
            <span>Ver Projeto</span>
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors text-sm flex-1 justify-center"
          >
            <Github size={16} />
            <span>Código</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;