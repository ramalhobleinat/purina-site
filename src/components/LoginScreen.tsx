import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface LoginScreenProps {
  onLogin: () => void;
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="flex h-screen">
      {/* Left side - Login form */}
      <div className="w-1/2 flex flex-col items-center justify-center px-16" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-12">
            <div className="text-white mb-8">
              <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
                <text x="0" y="30" fill="white" fontSize="24" fontFamily="Arial">PURINA</text>
              </svg>
            </div>
          </div>

          <h1 className="text-white mb-8">Login</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-full px-6 py-6 placeholder:text-gray-400"
                style={{ backgroundColor: '#FFFFFF', color: '#1B1B1B' }}
              />
            </div>

            <div>
              <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-full px-6 py-6 placeholder:text-gray-400"
                style={{ backgroundColor: '#FFFFFF', color: '#1B1B1B' }}
              />
            </div>

            <Button
              type="submit"
              className="w-full rounded-full py-6 hover:opacity-90 hover:scale-105 transition-all"
              style={{ backgroundColor: '#ccb071', color: '#0A0A0A' }}
            >
              PRONTO
            </Button>
          </form>
        </div>
      </div>
{/* AQUIIIIIIIIIIII A FT DO DOG */}
      {/* Right side - Image and case study */}
      <div className="w-1/2 relative">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&q=80"
          alt="Veterinária com cachorro"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-12">
          <div className="text-white px-6 py-3 inline-block rounded-lg mb-4" style={{ backgroundColor: '#ccb071', color: '#0A0A0A' }}>
            <span>Purina Pro Plan</span>
          </div>
          <h2 className="text-white">Conheça o caso Molly</h2>
        </div>
      </div>
    </div>
  );
}
