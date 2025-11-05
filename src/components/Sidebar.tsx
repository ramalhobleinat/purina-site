import { Home, User, Bell, Settings, LogOut } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

interface SidebarProps {
  activeSection: string;
  onSectionClick: (section: 'home' | 'profile' | 'notifications' | 'settings' | 'logout') => void;
}

export default function Sidebar({ activeSection, onSectionClick }: SidebarProps) {
  const menuItems = [
    { id: 'home' as const, icon: Home, label: 'Início' },
    { id: 'profile' as const, icon: User, label: 'Perfil' },
    { id: 'notifications' as const, icon: Bell, label: 'Notificações' },
    { id: 'settings' as const, icon: Settings, label: 'Configurações' },
    { id: 'logout' as const, icon: LogOut, label: 'Sair' },
  ];

  return (
    <TooltipProvider>
      <div className="w-20 flex flex-col items-center py-8 gap-6" style={{ backgroundColor: '#0A0A0A' }}>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <Tooltip key={item.id} delayDuration={0}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => onSectionClick(item.id)}
                  className="w-14 h-14 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg relative group"
                  style={{ 
                    backgroundColor: isActive ? '#ccb071' : '#D8CAA5',
                    transform: isActive ? 'scale(1.05)' : 'scale(1)'
                  }}
                >
                  <Icon className="w-6 h-6 transition-all" style={{ color: '#0A0A0A' }} />
                  {isActive && (
                    <div 
                      className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-8 rounded-l-full"
                      style={{ backgroundColor: '#ccb071' }}
                    />
                  )}
                </button>
              </TooltipTrigger>
              <TooltipContent 
                side="right" 
                className="rounded-lg px-3 py-2"
                style={{ backgroundColor: '#1B1B1B', color: '#FFFFFF', border: 'none' }}
              >
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
}
