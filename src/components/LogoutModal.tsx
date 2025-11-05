import { AlertCircle } from 'lucide-react';

interface LogoutModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export default function LogoutModal({ onConfirm, onCancel }: LogoutModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-8">
      <div className="rounded-3xl max-w-md w-full p-8 text-center" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFE5E5' }}>
            <AlertCircle className="w-8 h-8" style={{ color: '#E53935' }} />
          </div>
        </div>

        <h2 className="mb-4" style={{ color: '#1B1B1B' }}>Tem certeza que deseja sair?</h2>
        <p className="mb-8" style={{ color: '#6F6F6F' }}>Você será desconectado do portal veterinário.</p>

        <div className="flex gap-4">
          <button
            onClick={onCancel}
            className="flex-1 px-6 py-3 rounded-full hover:opacity-90 hover:scale-105 transition-all"
            style={{ backgroundColor: '#FFFFFF', border: '2px solid #6F6F6F', color: '#1B1B1B' }}
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-6 py-3 rounded-full hover:opacity-90 hover:scale-105 transition-all"
            style={{ backgroundColor: '#E53935', color: '#FFFFFF' }}
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}
