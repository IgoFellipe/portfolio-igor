import { GraduationCap, Map } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-white dark:bg-slate-900">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle title="Sobre Mim" subtitle="Conheça minha história e formação" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Map className="mr-2 text-blue-600 dark:text-blue-400" size={20} />
              Informações Pessoais
            </h3>
            <ul className="space-y-3">
              <li>
                <span className="font-medium">Nome Completo:</span> Igor Fellipe dos Santos Gato
              </li>
              <li>
                <span className="font-medium">Idade:</span> 21 anos
              </li>
              <li>
                <span className="font-medium">Localização:</span> Londrina – PR
              </li>
              <li>
                <span className="font-medium">Telefone:</span> (43) 98411-9082
              </li>
              <li>
                <span className="font-medium">Email:</span> igorfellipesantos03@gmail.com
              </li>
              <li>
                <span className="font-medium">GitHub:</span>{' '}
                <a
                  href="https://github.com/IgoFellipe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  IgoFellipe
                </a>
              </li>
            </ul>

            <p className="mt-6 text-gray-700 dark:text-gray-300">
              Sou um profissional de TI em início de carreira, focado em desenvolvimento FullStack e gerenciamento de projetos.
              Busco constantemente aprimorar minhas habilidades técnicas e me manter atualizado com as novas tecnologias
              do mercado.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <GraduationCap className="mr-2 text-blue-600 dark:text-blue-400" size={20} />
              Formação Acadêmica
            </h3>

            <div className="mb-6">
              <h4 className="text-lg font-medium">Engenharia de Software</h4>
              <p className="text-gray-600 dark:text-gray-400">UNIFIL - Centro Universitário Filadélfia</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">Fev/2022 - Dez/2026 (Previsão)</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Cursando bacharelado em Engenharia de Software, com foco em desenvolvimento de
                projetos FullStack, Gerenciamento de Projetos, Metódologia Ágil.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium">Técnico em Administração</h4>
              <p className="text-gray-600 dark:text-gray-400">Colégio IEEL</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">Concluído</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Formação técnica em administração, proporcionando conhecimentos em gestão,
                organização empresarial e processos administrativos.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 dark:bg-slate-800/50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Objetivo Profissional</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Busco oportunidades para aplicar e expandir meus conhecimentos em desenvolvimento Front-end,
            suporte técnico em TI e Gerenciamento de Projetos. Tenho como objetivo contribuir para projetos inovadores enquanto
            desenvolvo minhas habilidades técnicas e profissionais, visando me tornar um desenvolvedor
            fullstack no futuro.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;