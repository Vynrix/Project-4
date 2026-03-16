import ParticleBackground from '../components/ParticleBackground';
import GlassCard from '../components/GlassCard';
import BottomNav from '../components/BottomNav';
import { Search, Globe, Send, Eye, DollarSign, Activity } from 'lucide-react';

export default function AgentMonitorScreen() {
  const agents = [
    {
      name: 'Lead Scanner',
      icon: Search,
      status: 'running',
      task: 'Scanning businesses in Kochi',
      progress: 67,
    },
    {
      name: 'Prototype Builder',
      icon: Globe,
      status: 'idle',
      task: 'Waiting for task',
      progress: 0,
    },
    {
      name: 'Outreach Agent',
      icon: Send,
      status: 'active',
      task: 'Sending emails to 5 leads',
      progress: 40,
    },
    {
      name: 'Monitor Agent',
      icon: Eye,
      status: 'waiting',
      task: 'Monitoring responses',
      progress: 0,
    },
    {
      name: 'Payment Agent',
      icon: DollarSign,
      status: 'running',
      task: 'Processing payment for Royal Salon',
      progress: 85,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running':
        return '#9dff00';
      case 'active':
        return '#9dff00';
      case 'idle':
        return '#666';
      case 'waiting':
        return '#999';
      default:
        return '#666';
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f14] pb-20 relative overflow-hidden max-w-[360px] mx-auto">
      <ParticleBackground />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="p-6 border-b border-[#9dff00]/10">
          <h1 
            className="text-2xl text-white mb-1"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Agent Monitor
          </h1>
          <p 
            className="text-gray-500 text-sm"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            System automation dashboard
          </p>
        </div>

        {/* System Status */}
        <div className="p-6">
          <GlassCard className="p-4 mb-6" glow>
            <div className="flex items-center gap-3">
              <Activity className="w-8 h-8 text-[#9dff00]" style={{ filter: 'drop-shadow(0 0 8px #9dff00)' }} />
              <div className="flex-1">
                <p className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                  System Status
                </p>
                <p className="text-sm text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                  3 agents active, 2 idle
                </p>
              </div>
              <div className="w-3 h-3 bg-[#9dff00] rounded-full animate-pulse"></div>
            </div>
          </GlassCard>

          {/* Agent List */}
          <div className="space-y-3">
            {agents.map((agent, index) => {
              const Icon = agent.icon;
              const statusColor = getStatusColor(agent.status);
              
              return (
                <GlassCard key={index} className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                      <Icon className="w-5 h-5" style={{ color: statusColor }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {agent.name}
                        </h3>
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{
                            backgroundColor: statusColor,
                            filter: agent.status === 'running' || agent.status === 'active' ? `drop-shadow(0 0 4px ${statusColor})` : 'none',
                          }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {agent.task}
                      </p>
                    </div>
                    <span
                      className="text-xs px-2 py-1 rounded capitalize"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        backgroundColor: `${statusColor}20`,
                        color: statusColor,
                      }}
                    >
                      {agent.status}
                    </span>
                  </div>

                  {agent.progress > 0 && (
                    <div className="space-y-1">
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#9dff00] rounded-full transition-all"
                          style={{
                            width: `${agent.progress}%`,
                            boxShadow: '0 0 8px rgba(157, 255, 0, 0.5)',
                          }}
                        ></div>
                      </div>
                      <p
                        className="text-xs text-right text-gray-500"
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        {agent.progress}%
                      </p>
                    </div>
                  )}
                </GlassCard>
              );
            })}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
