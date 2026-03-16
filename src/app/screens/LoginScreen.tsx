import { useState } from 'react';
import { useNavigate } from 'react-router';
import ParticleBackground from '../components/ParticleBackground';
import GlassCard from '../components/GlassCard';
import { Triangle, User, Lock } from 'lucide-react';

export default function LoginScreen() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-[#0b0f14] flex flex-col items-center justify-center p-6 relative overflow-hidden max-w-[360px] mx-auto">
      <ParticleBackground />
      
      <div className="relative z-10 w-full">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Triangle 
            className="w-10 h-10 text-[#9dff00] fill-[#9dff00]" 
            style={{ filter: 'drop-shadow(0 0 15px #9dff00)' }}
          />
          <h1 
            className="text-3xl text-white tracking-wider"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Vynrix OS
          </h1>
        </div>

        <GlassCard className="p-8" glow>
          <h2 
            className="text-white text-xl mb-6 text-center"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            System Login
          </h2>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label 
                className="text-gray-400 text-sm mb-2 block"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-white/5 border border-[#9dff00]/20 rounded-lg px-10 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#9dff00]/50"
                  placeholder="Enter username"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>
            </div>

            <div>
              <label 
                className="text-gray-400 text-sm mb-2 block"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-[#9dff00]/20 rounded-lg px-10 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#9dff00]/50"
                  placeholder="Enter password"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#9dff00] text-[#0b0f14] py-3 rounded-lg transition-all hover:shadow-[0_0_20px_rgba(157,255,0,0.4)]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Login
            </button>
          </form>
        </GlassCard>

        <p 
          className="text-gray-600 text-xs text-center mt-6"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          Vynrix OS v1.0.0 - Agentic Business Automation
        </p>
      </div>
    </div>
  );
}
