interface SkillBarProps {
  name: string;
  level: number;
  color: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, color }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="h-3 w-full bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-1000`}
          style={{ 
            width: `${level}%`,
            backgroundColor: 
              color === 'blue' ? '#2563eb' 
              : color === 'green' ? '#10b981'
              : color === 'purple' ? '#8b5cf6'
              : '#f97316'
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;