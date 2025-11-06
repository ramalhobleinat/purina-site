import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeaderProps {
  onLevelClick: () => void;
}

export default function Header({ onLevelClick }: HeaderProps) {
  return (
    <header className="text-white px-8 py-6 flex items-center justify-between" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="flex items-center gap-4">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
          alt="Olivia"
          className="w-16 h-16 rounded-full object-cover border-2"
          style={{ borderColor: '#D6D6D6' }}
        />
        <div>
          <h1 className="text-white">Olá, Vet</h1>
          <p style={{ color: '#ccb071' }}>Portal do veterinário</p>
        </div>
      </div>
      
      <button
        onClick={onLevelClick}
        className="px-6 py-2 rounded-full hover:opacity-90 transition-all"
        style={{ backgroundColor: '#D6D6D6', color: 'black' }}
      >
        Prata
      </button>
    </header>
  );
}
