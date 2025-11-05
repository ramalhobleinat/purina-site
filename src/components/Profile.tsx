import { User, Mail, Phone, MapPin, Calendar, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Profile() {
  return (
    <div className="space-y-6">
      <h2 style={{ color: '#1B1B1B' }}>Meu Perfil</h2>

      {/* Profile Header */}
      <div className="rounded-2xl p-8 shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="flex items-start gap-6">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
            alt="Olivia"
            className="w-32 h-32 rounded-full object-cover"
            style={{ border: '4px solid #D6D6D6' }}
          />
          <div className="flex-1">
            <h1 style={{ color: '#1B1B1B' }}>Olivia Santos</h1>
            <p style={{ color: '#6F6F6F' }} className="mb-4">Médica Veterinária</p>
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 rounded-full" style={{ backgroundColor: '#D8CAA5', color: '#1B1B1B' }}>
                <Award className="w-4 h-4 inline mr-2" />
                Nível Prata
              </div>
              <div style={{ color: '#4A3B00' }}>
                75 pontos acumulados
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Info */}
      <div className="rounded-2xl p-8 shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
        <h2 className="mb-6" style={{ color: '#1B1B1B' }}>Informações Pessoais</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Mail className="w-5 h-5" style={{ color: '#ccb071' }} />
              <label style={{ color: '#6F6F6F' }}>E-mail</label>
            </div>
            <p style={{ color: '#1B1B1B' }}>olivia.santos@email.com</p>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Phone className="w-5 h-5" style={{ color: '#ccb071' }} />
              <label style={{ color: '#6F6F6F' }}>Telefone</label>
            </div>
            <p style={{ color: '#1B1B1B' }}>(11) 98765-4321</p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="w-5 h-5" style={{ color: '#ccb071' }} />
              <label style={{ color: '#6F6F6F' }}>Cidade</label>
            </div>
            <p style={{ color: '#1B1B1B' }}>São Paulo, SP</p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-5 h-5" style={{ color: '#ccb071' }} />
              <label style={{ color: '#6F6F6F' }}>Membro desde</label>
            </div>
            <p style={{ color: '#1B1B1B' }}>Janeiro 2024</p>
          </div>
        </div>
      </div>

      {/* Professional Info */}
      <div className="rounded-2xl p-8 shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
        <h2 className="mb-6" style={{ color: '#1B1B1B' }}>Informações Profissionais</h2>
        <div className="space-y-4">
          <div>
            <label style={{ color: '#6F6F6F' }}>CRMV</label>
            <p style={{ color: '#1B1B1B' }}>SP 12345</p>
          </div>
          
          <div>
            <label style={{ color: '#6F6F6F' }}>Clínica/Hospital</label>
            <p style={{ color: '#1B1B1B' }}>Clínica Veterinária Pet Care</p>
          </div>

          <div>
            <label style={{ color: '#6F6F6F' }}>Especialização</label>
            <p style={{ color: '#1B1B1B' }}>Nutrição e Clínica Médica</p>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <button
        className="px-8 py-3 rounded-full hover:opacity-90 hover:scale-105 transition-all"
        style={{ backgroundColor: '#4A3B00', color: '#FFFFFF' }}
      >
        Editar Perfil
      </button>
    </div>
  );
}
