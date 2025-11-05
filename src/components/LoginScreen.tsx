import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Input } from './ui/input';
import purinaLogo from '../purina.png';
import ber from '../ber.png.jpg';


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
              <img src={purinaLogo} alt="Purina Logo" style={{ width: '160px', marginBottom: '30px' }} />
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
          src={ber}
          alt="Dog do campo"
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
