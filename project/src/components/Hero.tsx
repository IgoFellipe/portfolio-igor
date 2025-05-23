import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import IgorImage from '../assets/IgorFellipe.jpeg';
import Currículo from '../assets/Currículo - Igor Fellipe dos Santos Gato.pdf';

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-40 md:pb-24 px-4 bg-gradient-to-b from-blue-50 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto border-4 border-white dark:border-slate-700 shadow-lg">
              <img
                src={IgorImage}
                alt="Igor Fellipe"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold shadow-md">
              21 anos
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-600 dark:text-blue-400">Igor Fellipe</span> dos Santos Gato
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400 mb-6">
            Desenvolvedor Front-end & Suporte Técnico em TI
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
            Estudante de Engenharia de Software apaixonado por criar soluções funcionais 
            e visualmente atraentes, com experiência em suporte técnico e desenvolvimento web.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
            <a
              href="https://github.com/IgoFellipe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/igorfellipesantos03/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href={Currículo}
              download
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <FileText size={18} />
              <span>Currículo</span>
            </a>
          </div>
          
          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 dark:text-gray-400">
            <Mail size={18} />
            <a href="mailto:igorfellipesantos03@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              igorfellipesantos03@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;