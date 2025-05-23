import { Briefcase } from 'lucide-react';

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

interface TimelineProps {
  experiences: Experience[];
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900/30"></div>
      
      {experiences.map((experience, index) => (
        <div
          key={experience.id}
          className={`relative flex flex-col md:flex-row md:items-center mb-12 ${
            index % 2 === 0 ? 'md:flex-row-reverse' : ''
          }`}
        >
          {/* Timeline Point */}
          <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center z-10">
            <Briefcase size={20} />
          </div>
          
          {/* Content */}
          <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
            <div className="ml-16 md:ml-0 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">{experience.company}</h3>
                <span className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
                  {experience.period}
                </span>
              </div>
              
              <h4 className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-3">
                {experience.role}
              </h4>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {experience.description}
              </p>
              
              <div>
                <h5 className="font-medium mb-2">Principais atividades:</h5>
                <ul className="space-y-1">
                  {experience.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;