interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        <span className="text-blue-600 dark:text-blue-400">{title}</span>
      </h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
      <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
    </div>
  );
};

export default SectionTitle;