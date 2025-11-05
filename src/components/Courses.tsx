import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Courses() {
  const [courses] = useState([
    {
      title: 'Nutrição Canina Avançada',
      description: 'Aprenda sobre necessidades nutricionais específicas',
      status: 'completed' as const,
      progress: 100,
    },
    {
      title: 'Dermatologia Felina',
      description: 'Diagnóstico e tratamento de problemas de pele',
      status: 'in-progress' as const,
      progress: 60,
    },
    {
      title: 'Cardiologia Veterinária',
      description: 'Fundamentos da saúde cardiovascular',
      status: 'not-started' as const,
      progress: 0,
    },
  ]);

  const discoverCourses = [
    'Oncologia Veterinária Básica',
    'Ortopedia para Pequenos Animais',
    'Comportamento Animal',
  ];

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
          <button className="hover:scale-110 hover:opacity-70 transition-all">
            <ChevronRight className="w-6 h-6" style={{ color: '#4A3B00' }} />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {discoverCourses.map((course, index) => (
            <button
              key={index}
              className="rounded-xl p-6 hover:scale-105 hover:shadow-md transition-all text-left"
              style={{ backgroundColor: '#D8CAA5', border: '1px solid #ccb071' }}
            >
              <p style={{ color: '#1B1B1B' }}>{course}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
