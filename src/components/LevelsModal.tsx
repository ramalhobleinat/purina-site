import { X, Award } from 'lucide-react';

interface LevelsModalProps {
  onClose: () => void;
}

export default function LevelsModal({ onClose }: LevelsModalProps) {
  const levels = [
    {
      name: 'Bronze',
      range: '0 - 50 pontos',
      color: '#E57A2A',
      benefits: [
        'Acesso a cursos básicos',
        'Material técnico básico',
        'Newsletter mensal',
        'Suporte por e-mail',
      ],
      discount: '5%',
    },
    {
      name: 'Prata',
      range: '51 - 150 pontos',
      color: '#D6D6D6',
      benefits: [
        'Todos os benefícios Bronze',
        'Acesso a cursos avançados',
        'Grupo Telegram exclusivo',
        'Material técnico premium',
        'Selo Verde personalizado',
      ],
      discount: '10%',
      current: true,
    },
    {
      name: 'Ouro',
      range: '151+ pontos',
      color: '#ccb071',
      benefits: [
        'Todos os benefícios Prata',
        'Consultoria técnica 1:1',
        'Eventos exclusivos',
        'Acesso antecipado a produtos',
        'Kit premium anual',
      ],
      discount: '15%',
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-8">
      <div className="rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative" style={{ backgroundColor: '#FFFFFF' }}>
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 text-white rounded-full flex items-center justify-center transition-colors hover:opacity-90"
          style={{ backgroundColor: '#E53935' }}
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <h1 className="text-center mb-8" style={{ color: '#1B1B1B' }}>Níveis de Pontuação</h1>

          <div className="grid grid-cols-3 gap-6">
            {levels.map((level, index) => (
              <div
                key={index}
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: level.current ? '2px solid #ccb071' : '2px solid #F4F4F4',
                  boxShadow: level.current ? '0 8px 16px rgba(204, 176, 113, 0.2)' : 'none'
                }}
              >
                {/* Medal */}
                <div className="flex justify-center mb-4">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: level.color }}
                  >
                    <Award className="w-10 h-10 text-white" />
                  </div>
                </div>

                <h2 className="text-center mb-2" style={{ color: '#1B1B1B' }}>{level.name}</h2>
                <p className="text-center mb-6" style={{ color: '#6F6F6F' }}>{level.range}</p>

                {level.current && (
                  <div className="text-center py-2 rounded-lg mb-4" style={{ backgroundColor: '#D8CAA5', color: '#1B1B1B' }}>
                    Seu nível atual
                  </div>
                )}

                {/* Benefits List */}
                <div className="rounded-xl p-4 mb-6" style={{ backgroundColor: '#F4F4F4' }}>
                  <h3 className="mb-3" style={{ color: '#1B1B1B' }}>Benefícios:</h3>
                  <ul className="space-y-2">
                    {level.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2" style={{ color: '#6F6F6F' }}>
                        <span className="mt-1" style={{ color: '#ccb071' }}>•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Discount */}
                <div className="rounded-xl p-4 text-center" style={{ backgroundColor: '#D8CAA5' }}>
                  <p style={{ color: '#1B1B1B' }}>
                    Desconto exclusivo de <span style={{ color: '#4A3B00' }}>{level.discount}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center" style={{ color: '#6F6F6F' }}>
            <p>Complete cursos e participe de atividades para acumular pontos e subir de nível!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
