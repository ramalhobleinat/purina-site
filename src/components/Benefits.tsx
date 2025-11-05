import { Gift, MessageCircle, Star } from 'lucide-react';

interface BenefitsProps {
  onShowAgent: () => void;
}

export default function Benefits({ onShowAgent }: BenefitsProps) {
  const benefits = [
    {
      title: 'Benefícios Nestlé',
      description: 'Acesse descontos exclusivos em produtos e serviços Nestlé Purina',
      icon: Gift,
      bgColor: 'bg-amber-100',
    },
    {
      title: 'Agente Purina',
      description: 'Chat inteligente para cálculo nutricional e suporte técnico',
      icon: MessageCircle,
      bgColor: 'bg-green-100',
      action: onShowAgent,
    },
    {
      title: 'Benefícios de Parceiros',
      description: 'Descontos em laboratórios, clínicas e fornecedores parceiros',
      icon: Star,
      bgColor: 'bg-blue-100',
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="mb-6" style={{ color: '#1B1B1B' }}>Seus Benefícios</h2>
      
      <div className="grid grid-cols-1 gap-6">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div
              key={index}
              className={`${benefit.bgColor} rounded-2xl p-8 flex items-center gap-8`}
            >
              <Icon className="w-16 h-16 flex-shrink-0" style={{ color: '#4A3B00' }} />
              <div className="flex-1">
                <h2 className="mb-2" style={{ color: '#1B1B1B' }}>{benefit.title}</h2>
                <p style={{ color: '#6F6F6F' }}>{benefit.description}</p>
              </div>
              <button
                onClick={benefit.action}
                className="px-8 py-3 rounded-full hover:opacity-90 hover:scale-105 transition-all flex-shrink-0"
                style={{ backgroundColor: '#4A3B00', color: '#FFFFFF' }}
              >
                Acessar
              </button>
            </div>
          );
        })}
      </div>

      {/* Additional Info */}
      <div className="rounded-2xl p-8 shadow-sm mt-8" style={{ backgroundColor: '#FFFFFF' }}>
        <h2 className="mb-4" style={{ color: '#1B1B1B' }}>Como funcionam os benefícios?</h2>
        <div className="space-y-3" style={{ color: '#6F6F6F' }}>
          <p>• Os benefícios são desbloqueados conforme você avança de nível</p>
          <p>• Cada nível oferece descontos progressivos e vantagens exclusivas</p>
          <p>• Acumule pontos completando cursos, fazendo indicações e participando de atividades</p>
          <p>• Níveis disponíveis: Bronze (0-50 pts), Prata (51-150 pts), Ouro (151+ pts)</p>
        </div>
      </div>
    </div>
  );
}
