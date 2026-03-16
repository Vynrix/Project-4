import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import ParticleBackground from '../components/ParticleBackground';
import { Triangle } from 'lucide-react';

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/boot');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#0b0f14] flex flex-col items-center justify-center relative overflow-hidden max-w-[360px] mx-auto">
      <ParticleBackground />
      
      <div className="relative z-10 flex flex-col items-center animate-pulse">
        <div className="flex items-center gap-3 mb-6">
          <Triangle 
            className="w-12 h-12 text-[#9dff00] fill-[#9dff00]" 
            style={{ filter: 'drop-shadow(0 0 20px #9dff00)' }}
          />
          <h1 
            className="text-4xl text-white tracking-wider"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Vynrix OS
          </h1>
        </div>
        
        <p 
          className="text-[#9dff00] text-sm tracking-widest mb-12"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          AGENTIC OS
        </p>

        <div className="flex gap-2">
          <div className="w-2 h-2 bg-[#9dff00] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-[#9dff00] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-[#9dff00] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}
