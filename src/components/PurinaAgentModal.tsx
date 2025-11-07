import { X, Calculator, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PurinaAgentModalProps {
  onClose: () => void;
}                  

export default function PurinaAgentModal({ onClose }: PurinaAgentModalProps) {
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
              <h1 className="mb-4" style={{ color: '#FFFFFF' }}>Inicie uma conversa com o nosso agente!</h1>
              <p className="mb-8" style={{ color: '#D8CAA5' }}>
                Use nosso agente inteligente via Telegram para cálculos nutricionais personalizados,
                orientações técnicas e integração direta com o Clube ProPlan.
              </p>

              <div className="space-y-4 mb-8">
                <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid #ccb071' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <Calculator className="w-6 h-6" style={{ color: '#ccb071' }} />
                    <h3 style={{ color: '#FFFFFF' }}>Cálculo Nutricional</h3>
                  </div>
                  <p style={{ color: '#D8CAA5' }}>
                    Receba recomendações precisas de alimentação para seus pacientes
                  </p>
                </div>

                <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid #ccb071' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-6 h-6" style={{ color: '#ccb071' }} />
                    <h3 style={{ color: '#FFFFFF' }}>Integração Clube ProPlan</h3>
                  </div>
                  <p style={{ color: '#D8CAA5' }}>
                    Conecte-se facilmente com o programa de benefícios
                  </p>
                </div>
              </div>
            </div>

            {/* Right QR Code */}
            <div className="flex-shrink-0">
              <div className="rounded-2xl p-6" style={{ backgroundColor: '#FFFFFF' }}>
                <ImageWithFallback
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://t.me/purinaproplan"
                  alt="QR Code Telegram"
                  className="w-52 h-52"
                />
                <p className="text-center mt-4" style={{ color: '#1B1B1B' }}>Escaneie para iniciar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
