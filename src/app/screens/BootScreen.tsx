import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import ParticleBackground from '../components/ParticleBackground';
import { Progress } from '../components/ui/progress';

export default function BootScreen() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const bootLogs = [
    '[OK] Initializing AI agents...',
    '[OK] Starting lead scanner module...',
    '[OK] Connecting to cloud services...',
    '[OK] Loading system modules...',
    '[OK] Initializing prototype builder...',
    '[OK] Starting outreach agent...',
    '[OK] Loading payment processor...',
    '[OK] System ready',
  ];

  useEffect(() => {
    let logIndex = 0;
    const logInterval = setInterval(() => {
      if (logIndex < bootLogs.length) {
        setLogs((prev) => [...prev, bootLogs[logIndex]]);
        setProgress(((logIndex + 1) / bootLogs.length) * 100);
        logIndex++;
      } else {
        clearInterval(logInterval);
        setTimeout(() => navigate('/login'), 500);
      }
    }, 300);

    return () => clearInterval(logInterval);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#0b0f14] flex flex-col p-6 relative overflow-hidden max-w-[360px] mx-auto">
      <ParticleBackground />
      
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="mb-8">
          <h1 
            className="text-[#9dff00] text-xl mb-2"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            vynrix@os:~$
          </h1>
          <p className="text-gray-500 text-xs" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            Booting Vynrix OS...
          </p>
        </div>

        <div className="flex-1 space-y-2 mb-8 overflow-auto">
          {logs.map((log, index) => (
            <div
              key={index}
              className="text-xs text-[#9dff00] opacity-80 animate-in fade-in duration-200"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {log}
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <Progress value={progress} className="h-2 bg-gray-800" />
          <p 
            className="text-gray-500 text-xs text-center"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            {Math.round(progress)}% complete
          </p>
        </div>
      </div>
    </div>
  );
}
