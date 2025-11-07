import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Courses() {
  const [courses] = useState([
    {
      title: 'Prebióticos e simbióticos na ciência em torno de animais de companhia',
      description: 'Potencial dos prebióticos e simbióticos na modulação da microbiota intestinal e prevenção de infecções gastrointestinais em animais de companhia.',
      status: 'completed' as const,
      progress: 100,
      link: 'https://portugal-npp.talentlms.com/catalog/info/id:4440',
    },
    {
      title: 'Efeitos da ingestão de água enriquecida com nutrientes',
      description: 'Impacto na ingestão de água e na hidratação de gatos alimentados com ração seca.',
      status: 'in-progress' as const,
      progress: 60,
      link: 'https://portugal-npp.talentlms.com/catalog/info/id:4828',
    },
    {
      title: 'Obstipação – Felina',
      description: 'Revisão da obstipação em gatos: definição, diagnóstico e manejo.',
      status: 'not-started' as const,
      progress: 0,
      link: 'https://portugal-npp.talentlms.com/catalog/info/id:4488',
    },
  ]);

  const discoverCourses = [
  {
    name: 'A distensão gástrica é um sinal de saciedade fisiológica.',
    link: 'https://portugal-npp.talentlms.com/catalog/info/id:4455',
  },
  {
    name: 'A forma como alimento: o cão com diabetes.',
    link: 'https://portugal-npp.talentlms.com/catalog/info/id:4774',
  },
  {
    name: 'Avaliação da permeabilidade intestinal em cães.',
    link: 'https://portugal-npp.talentlms.com/catalog/info/id:4803',
  },
];


  const openLink = (link: string) => {
    window.open(link, '_blank'); // abre em nova aba
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-6" style={{ color: '#1B1B1B' }}>Seus cursos</h2>
        <div className="grid grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 flex flex-col"
              style={{ backgroundColor: '#FFFFFF', border: '2px solid #0A0A0A' }}
            >
              <h3 className="mb-2" style={{ color: '#1B1B1B' }}>{course.title}</h3>
              <p className="mb-4 flex-1" style={{ color: '#6F6F6F' }}>{course.description}</p>
              
              {course.status === 'in-progress' && (
                <div className="mb-4">
                  <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: '#F4F4F4' }}>
                    <div
                      className="h-full transition-all"
                      style={{ width: `${course.progress}%`, backgroundColor: '#ccb071' }}
                    />
                  </div>
                  <p className="mt-1" style={{ color: '#6F6F6F' }}>{course.progress}% completo</p>
                </div>
              )}

              <button
                onClick={() => openLink(course.link)}
                className="py-3 px-6 rounded-full transition-all hover:scale-105 hover:shadow-md"
                style={
                  course.status === 'not-started'
                    ? { backgroundColor: '#4A3B00', color: '#FFFFFF' }
                    : { backgroundColor: '#FFFFFF', border: '2px solid #4A3B00', color: '#4A3B00' }
                }
              >
                {course.status === 'not-started' ? 'Iniciar' : 'Continuar'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Discover More */}
      <div className="rounded-2xl p-6 shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="flex items-center justify-between mb-6">
          <h2 style={{ color: '#1B1B1B' }}>Descubra mais cursos!</h2>
          <a
  href="https://portugal-npp.talentlms.com/catalog"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:scale-110 hover:opacity-70 transition-all"
>
  <ChevronRight className="w-6 h-6" style={{ color: '#4A3B00' }} />
</a>

        </div>
        <div className="flex gap-4 overflow-x-auto pb-2">
  {discoverCourses.map((course, index) => (
    <div
      key={index}
      className="min-w-[250px] rounded-xl p-6 hover:scale-105 hover:shadow-md transition-all text-left flex justify-between items-center cursor-pointer"
      style={{ backgroundColor: '#D8CAA5', border: '1px solid #ccb071' }}
      onClick={() => openLink(course.link)}
    >
      <p style={{ color: '#1B1B1B' }}>{course.name}</p>
      <a
        href={course.link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="ml-4 hover:scale-110 transition-all"
      >
        <ChevronRight className="w-5 h-5" style={{ color: '#4A3B00' }} />
      </a>
    </div>
  ))}
</div>

      </div>
    </div>
  );
}
