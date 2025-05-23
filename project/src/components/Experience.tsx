import { Briefcase } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import Timeline from './ui/Timeline';

const experiences = [
  {
    id: 1,
    company: "Atos",
    role: "Service Desk Analyst",
    period: "2025",
    description: "Suporte técnico remoto, manutenção de sistemas e resolução de problemas para clientes corporativos. Atendimento via telefone, chat e e-mail, documentação de ocorrências e acompanhamento de chamados até sua resolução.",
    highlights: [
      "Atendimento remoto a usuários",
      "Diagnóstico e resolução de problemas",
      "Manutenção de sistemas",
      "Documentação técnica"
    ]
  },
  {
    id: 2,
    company: "Serilon",
    role: "Estágio em TI",
    period: "2023",
    description: "Atuação em suporte técnico remoto e presencial, gerenciamento de usuários em sistemas SAP e Active Directory, manutenção de infraestrutura de TI e participação em projetos de melhoria tecnológica.",
    highlights: [
      "Gerenciamento de usuários (SAP e AD)",
      "Suporte remoto e presencial",
      "Infraestrutura de TI",
      "Implementação de melhorias em sistemas"
    ]
  },
  {
    id: 3,
    company: "Flamex",
    role: "Administração e Crédito",
    period: "2022",
    description: "Experiência na área administrativa e financeira, com atividades relacionadas a operações bancárias, geração de relatórios, treinamento de novos colaboradores e atendimento ao cliente.",
    highlights: [
      "Operações bancárias",
      "Geração de relatórios",
      "Treinamento de colaboradores",
      "Atendimento ao cliente"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 px-4 bg-white dark:bg-slate-900">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle
          title="Experiência Profissional"
          subtitle="Minha trajetória e atuação no mercado"
        />

        <div className="mt-12">
          <Timeline experiences={experiences} />
        </div>

        <div className="mt-12 bg-blue-50 dark:bg-slate-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Briefcase className="mr-2 text-blue-600 dark:text-blue-400" size={20} />
            Abordagem Profissional
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Minha experiência em suporte técnico me proporcionou uma visão abrangente sobre a importância
            de sistemas bem desenvolvidos e intuitivos. Essa experiência me ajuda a criar soluções mais
            eficientes e centradas no usuário.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Busco sempre aplicar as melhores práticas em meus projetos, priorizando código limpo,
            performance e experiência do usuário. Acredito que a combinação de conhecimentos técnicos
            e soft skills é essencial para o desenvolvimento de soluções de qualidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;