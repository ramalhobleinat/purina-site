import { Award, BookOpen, Users, TrendingUp, FileText, Send, Gift } from 'lucide-react';
import MetricCards from './MetricCards';

interface DashboardProps {
  onShowAgent: () => void;
}

export default function Dashboard({ onShowAgent }: DashboardProps) {
  const recentActivities = [
    { action: 'Completou o curso "Nutrição Canina Avançada"', points: '+25 pontos', time: 'Há 2 dias' },
    { action: 'Indicou um novo veterinário', points: '+15 pontos', time: 'Há 5 dias' },
    { action: 'Completou o curso "Dermatologia Felina"', points: '+25 pontos', time: 'Há 1 semana' },
    { action: 'Resgatou material técnico', points: '+5 pontos', time: 'Há 2 semanas' },
  ];

  const quickActions = [
    { label: 'Novos Cursos', icon: BookOpen },
    { label: 'Materiais', icon: FileText },
    { label: 'PurinaVet AI', icon: Send },
    { label: 'Resgatar', icon: Gift },
  ];

  const levelBenefits = [
    {
      title: 'Materiais Técnicos',
      description: 'Acesso a guias, artigos e pesquisas exclusivas',
      icon: FileText,
      bgColor: 'bg-amber-50',
    },
    {
      title: 'PurinaVet AI',
      description: 'Participe da comunidade de veterinários Purina',
      icon: Send,
      bgColor: 'bg-green-50',
    },
    {
      title: 'Selo Verde Pro Plan Personalizado',
      description: 'Destaque-se com certificação exclusiva',
      icon: Award,
      bgColor: 'bg-emerald-50',
    },
  ];

  return (
    <div className="space-y-8">
      <MetricCards />

      <div className="grid grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="col-span-2 rounded-2xl p-6 shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
          <h2 className="mb-6" style={{ color: '#1B1B1B' }}>Atividades Recentes</h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ccb071' }} />
                <div className="flex-1">
                  <p style={{ color: '#1B1B1B' }}>{activity.action}</p>
                  <div className="flex items-center gap-4 mt-1">
                    <span style={{ color: '#4A3B00' }}>{activity.points}</span>
                    <span style={{ color: '#6F6F6F' }}>{activity.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-2xl p-6 shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
          <h2 className="mb-6" style={{ color: '#000000' }}>Ações Rápidas</h2>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  onClick={() => {
                    if (action.label === 'PurinaVet AI') {
                      onShowAgent();
                    }
                  }}
                  className="rounded-xl p-4 flex flex-col items-center gap-2 hover:scale-105 hover:shadow-md transition-all"
                  style={{ backgroundColor: '#FFFFFF', border: '2px solid #B29962' }}
                >
                  <Icon className="w-8 h-8" style={{ color: '#4A3B00' }} />
                  <span style={{ color: '#1B1B1B' }}>{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Benefits by Level */}
      <div>
        <h2 className="mb-6" style={{ color: '#1B1B1B' }}>Benefícios do seu nível</h2>
        <div className="grid grid-cols-3 gap-6">
          {levelBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`${benefit.bgColor} rounded-2xl p-6 flex flex-col items-center text-center`}
              >
                <Icon className="w-12 h-12 mb-4" style={{ color: '#4A3B00' }} />
                <h3 className="mb-2" style={{ color: '#1B1B1B' }}>{benefit.title}</h3>
                <p style={{ color: '#6F6F6F' }}>{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
