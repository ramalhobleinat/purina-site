import { Bell, Lock, Globe, Palette, Mail, Shield } from 'lucide-react';

export default function Settings() {
  return (
    <div className="space-y-6">
      <h2 style={{ color: '#1B1B1B' }}>Configurações</h2>

      {/* Notifications Settings */}
      <div className="rounded-2xl p-6 shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="flex items-center gap-3 mb-6">
          <Bell className="w-6 h-6" style={{ color: '#ccb071' }} />
          <h3 style={{ color: '#1B1B1B' }}>Notificações</h3>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl" style={{ backgroundColor: '#F4F4F4' }}>
            <div>
              <p style={{ color: '#1B1B1B' }}>Notificações por e-mail</p>
              <p style={{ color: '#6F6F6F' }}>Receba atualizações importantes por e-mail</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4A3B00]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl" style={{ backgroundColor: '#F4F4F4' }}>
            <div>
              <p style={{ color: '#1B1B1B' }}>Notificações push</p>
              <p style={{ color: '#6F6F6F' }}>Receba notificações no navegador</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4A3B00]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl" style={{ backgroundColor: '#F4F4F4' }}>
            <div>
              <p style={{ color: '#1B1B1B' }}>Novos cursos</p>
              <p style={{ color: '#6F6F6F' }}>Seja notificado sobre novos cursos disponíveis</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4A3B00]"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="rounded-2xl p-6 shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-6 h-6" style={{ color: '#ccb071' }} />
          <h3 style={{ color: '#1B1B1B' }}>Segurança</h3>
        </div>
        
        <div className="space-y-4">
          <button
            className="w-full flex items-center justify-between p-4 rounded-xl hover:opacity-80 transition-all"
            style={{ backgroundColor: '#F4F4F4' }}
          >
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5" style={{ color: '#4A3B00' }} />
              <div className="text-left">
                <p style={{ color: '#1B1B1B' }}>Alterar senha</p>
                <p style={{ color: '#6F6F6F' }}>Última alteração: há 3 meses</p>
              </div>
            </div>
            <span style={{ color: '#4A3B00' }}>→</span>
          </button>

          <button
            className="w-full flex items-center justify-between p-4 rounded-xl hover:opacity-80 transition-all"
            style={{ backgroundColor: '#F4F4F4' }}
          >
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" style={{ color: '#4A3B00' }} />
              <div className="text-left">
                <p style={{ color: '#1B1B1B' }}>Alterar e-mail</p>
                <p style={{ color: '#6F6F6F' }}>olivia.santos@email.com</p>
              </div>
            </div>
            <span style={{ color: '#4A3B00' }}>→</span>
          </button>
        </div>
      </div>

      {/* Preferences */}
      <div className="rounded-2xl p-6 shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="flex items-center gap-3 mb-6">
          <Palette className="w-6 h-6" style={{ color: '#ccb071' }} />
          <h3 style={{ color: '#1B1B1B' }}>Preferências</h3>
        </div>
        
        <div className="space-y-4">
          <div className="p-4 rounded-xl" style={{ backgroundColor: '#F4F4F4' }}>
            <div className="flex items-center gap-3 mb-2">
              <Globe className="w-5 h-5" style={{ color: '#4A3B00' }} />
              <label style={{ color: '#1B1B1B' }}>Idioma</label>
            </div>
            <select 
              className="w-full p-2 rounded-lg border-2 outline-none"
              style={{ borderColor: '#D8CAA5', color: '#1B1B1B' }}
            >
              <option>Português (Brasil)</option>
              <option>English</option>
              <option>Español</option>
            </select>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <button
        className="px-8 py-3 rounded-full hover:opacity-90 hover:scale-105 transition-all"
        style={{ backgroundColor: '#4A3B00', color: '#FFFFFF' }}
      >
        Salvar Alterações
      </button>
    </div>
  );
}
