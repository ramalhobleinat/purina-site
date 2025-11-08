import { useState } from 'react';
import { Gift, Star, X, Tag, Building, Heart, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import nespressoImg from '../nespresso.png';

// ✅ ÍCONE TELEGRAM (mesmo estilo do Lucide)
const TelegramIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 2L11 13" />
    <path d="M22 2L15 22l-4-9-9-4 20-7z" />
  </svg>
);

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
      title: 'Agente Purina (Telegram)',
      description: 'Suporte técnico e cálculo nutricional via Telegram',
      icon: TelegramIcon,
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

/* ✅ MODAL BENEFÍCIOS NESTLÉ */
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
        'Frete grátis acima de R$ 150,00',
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
        'Acesso antecipado a lançamentos'
      ]
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-8">
      <div className="rounded-3xl max-w-4xl w-full relative text-white" style={{ backgroundColor: '#0A0A0A' }}>

        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 text-white rounded-full flex items-center justify-center hover:opacity-90"
          style={{ backgroundColor: '#E53935' }}
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-12">
          <div className="flex items-center gap-8 min-h-[460px]">

            {/* LEFT */}
            <div className="flex-1">
              <h1 className="mb-4">Benefícios Nestlé Purina</h1>
              <p className="mb-8" style={{ color: '#D8CAA5' }}>
                Vantagens exclusivas para profissionais parceiros.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="rounded-xl p-4" style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid #ccb071' }}>
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-6 h-6" style={{ color: '#ccb071' }} />
                        <h3>{benefit.title}</h3>
                      </div>
                      <p className="mb-3" style={{ color: '#D8CAA5' }}>{benefit.description}</p>
                      <ul className="space-y-1">
                        {benefit.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2" style={{ color: '#D8CAA5' }}>
                            <span style={{ color: '#ccb071' }}>•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT - CAFETEIRA */}
            <div className="flex-shrink-0 self-center">
              <div className="rounded-2xl p-6 flex flex-col items-center justify-center" style={{ backgroundColor: '#FFFFFF' }}>
                <img src={nespressoImg} alt="Cafeteira" className="w-52 h-52 object-contain mb-4" />
                <p className="text-center text-sm" style={{ color: '#1B1B1B' }}>
                  Ao atingir o nível <span style={{ color: '#ccb071', fontWeight: 600 }}>Ouro</span>,
                  você recebe uma <br />
                  <span style={{ fontWeight: 600 }}>Cafeteira Dolce Gusto Mini Me</span>.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

/* ✅ MODAL PARCEIROS */
function PartnersBenefitsModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  const benefits = [
    {
      icon: Building,
      title: 'Laboratórios Parceiros',
      description: 'Descontos exclusivos em exames e diagnósticos',
      items: [
        '25% de desconto em exames de rotina',
        '15% em exames especializados',
        'Resultados online prioritários',
        'Coleta domiciliar grátis'
      ]
    },
    {
      icon: Heart,
      title: 'Clínicas Veterinárias',
      description: 'Condições especiais em serviços veterinários',
      items: [
        '30% de desconto em consultas',
        'Condições especiais em cirurgias',
        'Plantão 24h com valores reduzidos',
        'Hospedagem pet com 20% OFF'
      ]
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-8">
      <div className="rounded-3xl max-w-4xl w-full relative text-white" style={{ backgroundColor: '#0A0A0A' }}>

        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 text-white rounded-full flex items-center justify-center hover:opacity-90"
          style={{ backgroundColor: '#E53935' }}
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-12">
          <div className="flex items-start gap-8">

            <div className="flex-1">
              <h1 className="mb-4">Benefícios de Parceiros</h1>
              <p className="mb-8" style={{ color: '#D8CAA5' }}>
                Rede exclusiva com vantagens e serviços especiais.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="rounded-xl p-4" style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid #ccb071' }}>
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-6 h-6" style={{ color: '#ccb071' }} />
                        <h3>{benefit.title}</h3>
                      </div>
                      <p className="mb-3" style={{ color: '#D8CAA5' }}>{benefit.description}</p>
                      <ul className="space-y-1">
                        {benefit.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2" style={{ color: '#D8CAA5' }}>
                            <span style={{ color: '#ccb071' }}>•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="rounded-2xl p-6" style={{ backgroundColor: '#FFFFFF' }}>
                <a href="https://www.purina.pt/o-nosso-impacto/parceiros" target="_blank" rel="noopener noreferrer">
                  <ImageWithFallback
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https%3A%2F%2Fwww.purina.pt%2Fo-nosso-impacto%2Fparceiros"
                    alt="QR Code Parceiros"
                    className="w-52 h-52 object-contain"
                  />
                </a>
                <p className="text-center mt-4" style={{ color: '#1B1B1B' }}>
                  Acesse a Rede de Parceiros
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
