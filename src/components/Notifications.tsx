import { Bell, CheckCircle, Info, Gift, BookOpen } from 'lucide-react';

export default function Notifications() {
  const notifications = [
    {
      icon: CheckCircle,
      title: 'Curso concluído!',
      message: 'Parabéns! Você completou o curso "Nutrição Canina Avançada" e ganhou 25 pontos.',
      time: 'Há 2 horas',
      color: '#4A3B00',
      bgColor: '#D8CAA5',
      read: false,
    },
    {
      icon: Gift,
      title: 'Novo benefício desbloqueado',
      message: 'Você alcançou o nível Prata e desbloqueou novos benefícios exclusivos!',
      time: 'Há 1 dia',
      color: '#ccb071',
      bgColor: '#F4F4F4',
      read: false,
    },
    {
      icon: BookOpen,
      title: 'Novo curso disponível',
      message: 'O curso "Cardiologia Veterinária" está disponível para você.',
      time: 'Há 2 dias',
      color: '#4A3B00',
      bgColor: '#D8CAA5',
      read: true,
    },
    {
      icon: Info,
      title: 'Atualização do sistema',
      message: 'Novos recursos foram adicionados ao portal. Confira as novidades!',
      time: 'Há 3 dias',
      color: '#6F6F6F',
      bgColor: '#F4F4F4',
      read: true,
    },
    {
      icon: Bell,
      title: 'Lembrete de indicação',
      message: 'Indique veterinários e ganhe 15 pontos por indicação aprovada.',
      time: 'Há 5 dias',
      color: '#6F6F6F',
      bgColor: '#F4F4F4',
      read: true,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 style={{ color: '#1B1B1B' }}>Notificações</h2>
        <button
          className="px-4 py-2 rounded-full hover:opacity-90 hover:scale-105 transition-all"
          style={{ backgroundColor: '#FFFFFF', border: '2px solid #4A3B00', color: '#4A3B00' }}
        >
          Marcar todas como lidas
        </button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification, index) => {
          const Icon = notification.icon;
          return (
            <div
              key={index}
              className="rounded-2xl p-6 shadow-sm transition-all hover:shadow-md cursor-pointer"
              style={{
                backgroundColor: '#FFFFFF',
                borderLeft: notification.read ? 'none' : `4px solid ${notification.color}`,
                opacity: notification.read ? 0.7 : 1,
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: notification.bgColor }}
                >
                  <Icon className="w-6 h-6" style={{ color: notification.color }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 style={{ color: '#1B1B1B' }}>{notification.title}</h3>
                    <span style={{ color: '#6F6F6F' }}>{notification.time}</span>
                  </div>
                  <p style={{ color: '#6F6F6F' }}>{notification.message}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
