import { useState } from 'react';
import { Award, BookOpen, FileText, Send, Gift, X } from 'lucide-react';
import MetricCards from './MetricCards';

// IMPORTS (em src)
import pdfPurina from '../pdf-purina.pdf';
import pillImg from '../pill.png';

interface DashboardProps {
  onLogin?: () => void; // opcional, caso exista em algum lugar
  onShowAgent: () => void;
}

export default function Dashboard({ onShowAgent }: DashboardProps) {
  const [showRedeemModal, setShowRedeemModal] = useState(false);

  const recentActivities = [
    { action: 'Completou o curso "Nutrição Canina Avançada"', points: '+25 pontos', time: 'Há 2 dias' },
    { action: 'Indicou um novo veterinário', points: '+15 pontos', time: 'Há 5 dias' },
    { action: 'Completou o curso "Dermatologia Felina"', points: '+25 pontos', time: 'Há 1 semana' },
    { action: 'Resgatou material técnico', points: '+5 pontos', time: 'Há 2 semanas' },
  ];

  const quickActions = [
    { label: 'Modelos', icon: BookOpen },
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
      bgColor: 'bg-[#E4F1FF]', // azul claro estilo Telegram
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
          <h2 className="text-xl font-semibold tracking-tight mb-6" style={{ color: '#1B1B1B' }}>
            Atividades Recentes
          </h2>
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
          <h2 className="text-xl font-semibold tracking-tight mb-6" style={{ color: '#000000' }}>
            Ações Rápidas
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              const isMateriais = action.label === 'Materiais';
              const isModelos = action.label === 'Modelos';

              if (isMateriais) {
                return (
                  <a
                    key={index}
                    href={pdfPurina}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl p-4 flex flex-col items-center gap-2 hover:scale-105 hover:shadow-md transition-all"
                    style={{ backgroundColor: '#FFFFFF', border: '2px solid #B29962' }}
                  >
                    <Icon className="w-8 h-8" style={{ color: '#4A3B00' }} />
                    <span style={{ color: '#1B1B1B' }}>{action.label}</span>
                  </a>
                );
              }

              if (isModelos) {
                return (
                  <a
                    key={index}
                    href={pillImg}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl p-4 flex flex-col items-center gap-2 hover:scale-105 hover:shadow-md transition-all"
                    style={{ backgroundColor: '#FFFFFF', border: '2px solid #B29962' }}
                  >
                    <Icon className="w-8 h-8" style={{ color: '#4A3B00' }} />
                    <span style={{ color: '#1B1B1B' }}>{action.label}</span>
                  </a>
                );
              }

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    if (action.label === 'PurinaVet AI') onShowAgent();
                    if (action.label === 'Resgatar') setShowRedeemModal(true);
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
        <h2 className="text-xl font-semibold tracking-tight mb-6" style={{ color: '#1B1B1B' }}>
          Benefícios do seu nível
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {levelBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isAgent = benefit.title === 'PurinaVet AI';
            return (
              <div
                key={index}
                className={`${benefit.bgColor} rounded-2xl p-6 flex flex-col items-center text-center`}
                style={isAgent ? { backgroundColor: '#E4F1FF' } : undefined}
              >
                <Icon className="w-12 h-12 mb-4" style={{ color: '#4A3B00' }} />
                <h3 className="text-lg font-medium mb-2" style={{ color: '#1B1B1B' }}>{benefit.title}</h3>
                <p style={{ color: '#6F6F6F' }}>{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal de Resgate */}
      <RedeemModal
        isOpen={showRedeemModal}
        onClose={() => setShowRedeemModal(false)}
      />
    </div>
  );
}

/* ===========================
   MODAL: RESGATAR PONTOS (padronizado)
=========================== */
function RedeemModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  // Pontos atuais do usuário (mock por enquanto)
  const points = 145;

  const rewards = [
    { name: 'Brinde Pro Plan Mini', cost: 50, desc: 'Brinde promocional para clientes' },
    { name: 'Saco Pro Plan 2.5kg', cost: 120, desc: 'Linha Adulto / Raças Médias' },
    { name: 'Kit Consultório (Banners + Flyers)', cost: 180, desc: 'Material para ambientação e educação' },
    { name: 'Caixa Pro Plan Clínicas', cost: 250, desc: 'Combo com itens variados da linha' },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-8">
      <div className="rounded-3xl max-w-3xl w-full relative text-white shadow-lg" style={{ backgroundColor: '#0A0A0A' }}>
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 text-white rounded-full flex items-center justify-center hover:opacity-90"
          style={{ backgroundColor: '#E53935' }}
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-12">
          <h1 className="text-2xl font-semibold tracking-tight mb-2" style={{ color: '#FFFFFF' }}>
            Resgatar Pontos
          </h1>
          <p className="mb-8" style={{ color: '#D8CAA5' }}>
            Você possui <span style={{ color: '#ccb071', fontWeight: 600 }}>{points} pontos</span> disponíveis.
          </p>

          {/* Barra de progresso (padronizada) */}
          <div className="mb-8">
            <div className="h-2 w-full rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}>
              <div
                className="h-2 rounded-full"
                style={{ width: `${Math.min((points / 250) * 100, 100)}%`, backgroundColor: '#ccb071' }}
              />
            </div>
            <div className="flex justify-between text-sm mt-2" style={{ color: '#D8CAA5' }}>
              <span>0</span>
              <span>250 (recompensa máxima)</span>
            </div>
          </div>

          {/* Lista de recompensas (mesmo card dos outros modais) */}
          <div className="space-y-4">
            {rewards.map((reward, index) => {
              const canRedeem = points >= reward.cost;
              return (
                <div
                  key={index}
                  className="rounded-xl p-4 flex items-center justify-between"
                  style={{ backgroundColor: 'rgba(255,255,255,0.10)', border: '1px solid #ccb071' }}
                >
                  <div className="pr-4">
                    <h3 className="font-medium" style={{ color: '#FFFFFF' }}>{reward.name}</h3>
                    <p className="text-sm" style={{ color: '#D8CAA5' }}>{reward.desc}</p>
                    <p className="text-sm mt-1" style={{ color: '#D8CAA5' }}>{reward.cost} pontos</p>
                  </div>

                  <button
                    className={`px-6 py-2 rounded-full transition-all ${canRedeem ? 'hover:opacity-90 hover:scale-105' : 'opacity-60 cursor-not-allowed'}`}
                    style={{ backgroundColor: canRedeem ? '#ccb071' : '#6F6F6F', color: '#0A0A0A' }}
                    disabled={!canRedeem}
                    onClick={() => {
                      // Aqui você conectaria com seu backend / API para efetivar o resgate
                      alert(`Solicitação de resgate: ${reward.name}`);
                    }}
                  >
                    {canRedeem ? 'Resgatar' : 'Pontos insuficientes'}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Observações (padronizado) */}
          <div className="rounded-xl p-4 mt-8" style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px dashed #ccb071' }}>
            <p className="text-sm" style={{ color: '#D8CAA5' }}>
              Os itens podem variar conforme disponibilidade regional. Após solicitar o resgate, nossa equipe entrará em contato
              pelo e-mail cadastrado para confirmação do envio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
