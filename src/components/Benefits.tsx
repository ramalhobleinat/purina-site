import { useState } from 'react';
import { Gift, MessageCircle, Star, X, Tag, Building, Heart, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BenefitsProps {
  onShowAgent: () => void;
}

export default function Benefits({ onShowAgent }: BenefitsProps) {
  const [showNestleModal, setShowNestleModal] = useState(false);
  const [showPartnersModal, setShowPartnersModal] = useState(false);

  const benefits = [
    {
      title: 'Benefícios Nestlé',
      description: 'Acesse descontos exclusivos em produtos e serviços Nestlé Purina',
      icon: Gift,
      bgColor: 'bg-amber-100',
      action: () => setShowNestleModal(true),
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
      action: () => setShowPartnersModal(true),
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="mb-6" style={{ color: '#1B1B1B' }}>Seus Benefícios</h2>
      
      <div className="grid grid-cols-1 gap-6">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div key={index} className={`${benefit.bgColor} rounded-2xl p-8 flex items-center gap-8`}>
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

      {/* Modals */}
      <NestleBenefitsModal 
        isOpen={showNestleModal}
        onClose={() => setShowNestleModal(false)}
      />

      <PartnersBenefitsModal 
        isOpen={showPartnersModal}
        onClose={() => setShowPartnersModal(false)}
      />
    </div>
  );
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function NestleBenefitsModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  const benefits = [
    {
      icon: Tag,
      title: 'Descontos em Produtos',
      description: 'Acesso a descontos exclusivos em toda linha Purina Pro Plan',
      items: [
        '30% de desconto em rações premium',
        '25% de desconto em petiscos e snacks',
        'Frete grátis em compras acima de R$ 150,00',
        'Amostras grátis de novos produtos'
      ]
    },
    {
      icon: Users,
      title: 'Programa de Fidelidade',
      description: 'Benefícios progressivos conforme seu nível',
      items: [
        'Acumule pontos a cada compra',
        'Resgate por produtos exclusivos',
        'Brindes especiais a cada 500 pontos',
        'Acesso prioritário a lançamentos'
      ]
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-8">
      <div className="rounded-3xl max-w-4xl w-full relative text-white" style={{ backgroundColor: '#0A0A0A' }}>
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 text-white rounded-full flex items-center justify-center transition-colors hover:opacity-90 z-10"
          style={{ backgroundColor: '#E53935' }}
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-12">
          <div className="flex items-start gap-8">
            {/* Left content */}
            <div className="flex-1">
              <h1 className="mb-4" style={{ color: '#FFFFFF' }}>Benefícios Nestlé Purina</h1>
              <p className="mb-8" style={{ color: '#D8CAA5' }}>
                Acesso exclusivo a descontos, ferramentas técnicas e benefícios especiais 
                desenvolvidos para profissionais veterinários.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="rounded-xl p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid #ccb071' }}>
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-6 h-6" style={{ color: '#ccb071' }} />
                        <h3 style={{ color: '#FFFFFF' }}>{benefit.title}</h3>
                      </div>
                      <p className="mb-3" style={{ color: '#D8CAA5' }}>
                        {benefit.description}
                      </p>
                      <ul className="space-y-1">
                        {benefit.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2" style={{ color: '#D8CAA5' }}>
                            <span style={{ color: '#ccb071' }}>•</span>
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right QR Code */}
            <div className="flex-shrink-0">
              <div className="rounded-2xl p-6" style={{ backgroundColor: '#FFFFFF' }}>
                <ImageWithFallback
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://nestlepurina.com.br/clubeproplan"
                  alt="QR Code Clube ProPlan"
                  className="w-52 h-52"
                />
                <p className="text-center mt-4" style={{ color: '#1B1B1B' }}>Acesse o Clube ProPlan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PartnersBenefitsModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  const benefits = [
    {
      icon: Building,
      title: 'Laboratórios Parceiros',
      description: 'Descontos exclusivos em exames e diagnósticos',
      items: [
        '25% de desconto em exames de rotina',
        '15% de desconto em exames especializados',
        'Resultados online prioritários',
        'Coleta domiciliar grátis'
      ]
    },
    {
      icon: Heart,
      title: 'Clínicas Veterinárias',
      description: 'Condições especiais em serviços veterinários',
      items: [
        'Consulta com 30% de desconto',
        'Plantão 24h com condições especiais',
        '10% de desconto em cirurgias',
        'Hospedagem pet com 20% off'
      ]
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-8">
      <div className="rounded-3xl max-w-4xl w-full relative text-white" style={{ backgroundColor: '#0A0A0A' }}>
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 text-white rounded-full flex items-center justify-center transition-colors hover:opacity-90 z-10"
          style={{ backgroundColor: '#E53935' }}
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-12">
          <div className="flex items-start gap-8">
            {/* Left content */}
            <div className="flex-1">
              <h1 className="mb-4" style={{ color: '#FFFFFF' }}>Benefícios de Parceiros</h1>
              <p className="mb-8" style={{ color: '#D8CAA5' }}>
                Rede exclusiva de parceiros com descontos e condições especiais 
                para profissionais do Clube ProPlan.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="rounded-xl p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid #ccb071' }}>
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-6 h-6" style={{ color: '#ccb071' }} />
                        <h3 style={{ color: '#FFFFFF' }}>{benefit.title}</h3>
                      </div>
                      <p className="mb-3" style={{ color: '#D8CAA5' }}>
                        {benefit.description}
                      </p>
                      <ul className="space-y-1">
                        {benefit.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2" style={{ color: '#D8CAA5' }}>
                            <span style={{ color: '#ccb071' }}>•</span>
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right QR Code */}
            <div className="flex-shrink-0">
              <div className="rounded-2xl p-6" style={{ backgroundColor: '#FFFFFF' }}>
                <ImageWithFallback
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://parceiros.nestlepurina.com.br"
                  alt="QR Code Parceiros"
                  className="w-52 h-52"
                />
                <p className="text-center mt-4" style={{ color: '#1B1B1B' }}>Acesse a Rede de Parceiros</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}