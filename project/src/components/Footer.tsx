import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200 py-10 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Igor Fellipe</h3>
            <p className="text-gray-400 mb-4">
              Desenvolvedor Front-end & Suporte Técnico em TI, focado em criar
              experiências digitais eficientes e visualmente atraentes.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/igofellipe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/igorfellipesantos03"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:igorfellipesantos03@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              {['about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-gray-400 hover:text-white transition-colors capitalize"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Londrina – PR, Brasil</li>
              <li>(43) 98411-9082</li>
              <li>igorfellipesantos03@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Igor Fellipe. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-2 md:mt-0">
            Feito com <Heart size={16} className="mx-1 text-red-500" /> e React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;