import { Github, ExternalLink } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import ProjectCard from './ui/ProjectCard';
import aprovados from '../assets/aprovados.png';
import portifolio from '../assets/portifolio.png';
import co from '../assets/co.webp';

const projects = [
  {
    id: 1,
    title: "Aprovados - Sistema para Vestibulandos",
    description: "Plataforma web voltada para estudantes que estão se preparando para vestibulares, oferecendo ferramentas como timer pomodoro, calendário de estudos e sistema de flashcards.",
    image: aprovados,
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://aprovados-ten.vercel.app/timer-pomodoro/index.html",
    repoUrl: "https://github.com/igofellipe/aprovados",
    features: [
      "Timer Pomodoro configurável",
      "Calendário de estudos personalizável",
      "Sistema de flashcards para memorização",
      "Interface responsiva"
    ]
  },
  {
    id: 2,
    title: "Currículo Online",
    description: "Versão digital do meu currículo, criada com HTML e CSS, destacando minhas habilidades, experiência e formação de forma interativa e visualmente atraente.",
    image: co,
    tags: ["HTML", "CSS"],
    liveUrl: "https://igofellipe.github.io",
    repoUrl: "https://github.com/igofellipe/igofellipe.github.io",
    features: [
      "Design responsivo",
      "Navegação intuitiva",
      "Visualização otimizada para dispositivos móveis",
      "Integração com redes sociais"
    ]
  },
  {
    id: 3,
    title: "Portfolio Profissional",
    description: "Este projeto que você está visualizando agora, desenvolvido com React e Tailwind CSS, apresentando minha trajetória profissional, habilidades e projetos.",
    image: portifolio,
    tags: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    repoUrl: "#",
    features: [
      "Design moderno e responsivo",
      "Modo claro/escuro",
      "Animações suaves",
      "Otimizado para SEO"
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle
          title="Projetos"
          subtitle="Trabalhos e aplicações que desenvolvi"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/igofellipe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
          >
            <Github size={20} />
            <span>Ver mais projetos no GitHub</span>
          </a>
        </div>

        <div className="mt-12 bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <ExternalLink className="mr-2 text-blue-600 dark:text-blue-400" size={20} />
            Colaboração e Contribuições
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Estou sempre aberto a colaborações em projetos interessantes e desafiadores.
            Se você tem um projeto e acredita que posso contribuir, ou se deseja discutir
            ideias para novas aplicações, sinta-se à vontade para entrar em contato.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;