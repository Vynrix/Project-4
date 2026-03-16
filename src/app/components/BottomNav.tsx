import { Home, FileText, Cpu, DollarSign, Bot } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router';

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { icon: Home, label: 'Home', path: '/home' },
    { icon: FileText, label: 'Leads', path: '/leads' },
    { icon: Cpu, label: 'Agents', path: '/agents' },
    { icon: DollarSign, label: 'Revenue', path: '/revenue' },
    { icon: Bot, label: 'AI', path: '/ai' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 backdrop-blur-xl bg-[#0b0f14]/80 border-t border-[#9dff00]/20">
      <div className="flex items-center justify-around h-full px-2 max-w-[360px] mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = location.pathname === tab.path;
          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className="flex flex-col items-center justify-center gap-1 flex-1 h-full transition-all"
            >
              <Icon
                className={`w-5 h-5 ${
                  isActive ? 'text-[#9dff00]' : 'text-gray-500'
                }`}
                style={isActive ? { filter: 'drop-shadow(0 0 4px #9dff00)' } : {}}
              />
              <span
                className={`text-[10px] ${
                  isActive ? 'text-[#9dff00]' : 'text-gray-500'
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
