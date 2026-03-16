import { useNavigate } from 'react-router';
import ParticleBackground from '../components/ParticleBackground';
import GlassCard from '../components/GlassCard';
import { ArrowLeft, Bot, Key, Bell, Palette, Terminal, LogOut, ChevronRight } from 'lucide-react';
import { Switch } from '../components/ui/switch';

export default function SettingsScreen() {
  const navigate = useNavigate();

  const settingsSections = [
    {
      title: 'AI Configuration',
      items: [
        { icon: Bot, label: 'AI Model', value: 'GPT-4', hasArrow: true },
        { icon: Key, label: 'API Keys', value: 'Configured', hasArrow: true },
      ],
    },
    {
      title: 'Notifications',
      items: [
        { icon: Bell, label: 'Push Notifications', hasSwitch: true, enabled: true },
        { icon: Bell, label: 'Email Alerts', hasSwitch: true, enabled: false },
      ],
    },
    {
      title: 'Appearance',
      items: [
        { icon: Palette, label: 'Theme', value: 'Dark', hasArrow: true },
      ],
    },
    {
      title: 'Advanced',
      items: [
        { icon: Terminal, label: 'Developer Mode', hasSwitch: true, enabled: true },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0f14] pb-6 relative overflow-hidden max-w-[360px] mx-auto">
      <ParticleBackground />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 p-6 border-b border-[#9dff00]/10">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5 text-gray-400" />
          </button>
          <div className="flex-1">
            <h1 
              className="text-2xl text-white"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Settings
            </h1>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {settingsSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 
                className="text-gray-500 text-sm mb-3"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {section.title}
              </h3>
              <GlassCard className="divide-y divide-[#9dff00]/10">
                {section.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={itemIndex}
                      className="w-full p-4 flex items-center gap-3 hover:bg-white/5 transition-all first:rounded-t-2xl last:rounded-b-2xl"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#9dff00]/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#9dff00]" />
                      </div>
                      
                      <span 
                        className="flex-1 text-left text-white"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {item.label}
                      </span>

                      {item.value && (
                        <span 
                          className="text-sm text-gray-500"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {item.value}
                        </span>
                      )}

                      {item.hasSwitch && (
                        <Switch defaultChecked={item.enabled} />
                      )}

                      {item.hasArrow && (
                        <ChevronRight className="w-4 h-4 text-gray-500" />
                      )}
                    </button>
                  );
                })}
              </GlassCard>
            </div>
          ))}

          {/* Logout Button */}
          <button
            onClick={() => navigate('/')}
            className="w-full"
          >
            <GlassCard className="p-4 flex items-center gap-3 hover:bg-red-500/10 transition-all">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                <LogOut className="w-4 h-4 text-red-400" />
              </div>
              <span 
                className="flex-1 text-left text-red-400"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Logout
              </span>
            </GlassCard>
          </button>

          {/* Version Info */}
          <div className="text-center pt-4">
            <p 
              className="text-xs text-gray-600"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              Vynrix OS v1.0.0
            </p>
            <p 
              className="text-xs text-gray-700 mt-1"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              Build 2024.03.16
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
