import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import ParticleBackground from '../components/ParticleBackground';
import { ArrowLeft } from 'lucide-react';

export default function TerminalScreen() {
  const navigate = useNavigate();
  const [lines, setLines] = useState<string[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    setLines([
      'Vynrix OS Terminal v1.0.0',
      'Type "help" for available commands',
      '',
    ]);
  }, []);

  const handleCommand = (command: string) => {
    const newLines = [...lines, `vynrix@os:~$ ${command}`];

    const cmd = command.toLowerCase().trim();

    if (cmd === 'help') {
      newLines.push('Available commands:');
      newLines.push('  scan [location]  - Scan for businesses');
      newLines.push('  build [count]    - Generate websites');
      newLines.push('  outreach         - Start outreach campaign');
      newLines.push('  status           - Show system status');
      newLines.push('  revenue          - Show revenue report');
      newLines.push('  clear            - Clear terminal');
      newLines.push('');
    } else if (cmd.startsWith('scan')) {
      const location = cmd.split(' ')[1] || 'Kochi';
      newLines.push(`Scanning for businesses in ${location}...`);
      newLines.push('[OK] Found 23 businesses without websites');
      newLines.push('[OK] Lead data saved to database');
      newLines.push('');
    } else if (cmd.startsWith('build')) {
      const count = cmd.split(' ')[1] || '10';
      newLines.push(`Generating ${count} website prototypes...`);
      newLines.push('[OK] AI prototype builder initialized');
      newLines.push('[OK] Processing templates...');
      newLines.push('[OK] Websites generated successfully');
      newLines.push('');
    } else if (cmd === 'outreach') {
      newLines.push('Starting outreach campaign...');
      newLines.push('[OK] Email templates loaded');
      newLines.push('[OK] Sending personalized emails to 15 leads');
      newLines.push('[OK] Campaign started successfully');
      newLines.push('');
    } else if (cmd === 'status') {
      newLines.push('System Status:');
      newLines.push('  Agents Running: 5');
      newLines.push('  CPU Usage: 34%');
      newLines.push('  Memory: 2.1GB / 4GB');
      newLines.push('  Uptime: 4h 23m');
      newLines.push('');
    } else if (cmd === 'revenue') {
      newLines.push('Revenue Report:');
      newLines.push('  Today:      ₹12,000');
      newLines.push('  This Week:  ₹84,000');
      newLines.push('  This Month: ₹1,82,000');
      newLines.push('  Clients:    21');
      newLines.push('');
    } else if (cmd === 'clear') {
      setLines(['']);
      setInput('');
      return;
    } else if (cmd === '') {
      newLines.push('');
    } else {
      newLines.push(`Command not found: ${command}`);
      newLines.push('Type "help" for available commands');
      newLines.push('');
    }

    setLines(newLines);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-[#0b0f14] relative overflow-hidden max-w-[360px] mx-auto flex flex-col">
      <ParticleBackground />
      
      <div className="relative z-10 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-center gap-4 p-6 border-b border-[#9dff00]/10">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5 text-gray-400" />
          </button>
          <div className="flex-1">
            <h1 
              className="text-xl text-white"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              Terminal
            </h1>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="flex-1 p-6 overflow-y-auto font-mono">
          {lines.map((line, index) => (
            <div
              key={index}
              className="text-sm text-[#9dff00] mb-1"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {line}
            </div>
          ))}
          
          {/* Input Line */}
          <div className="flex items-center gap-2">
            <span 
              className="text-sm text-[#9dff00]"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              vynrix@os:~$
            </span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleCommand(input);
                }
              }}
              className="flex-1 bg-transparent text-[#9dff00] text-sm outline-none border-none"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  );
}
