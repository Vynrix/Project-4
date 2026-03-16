import { useNavigate } from 'react-router';
import ParticleBackground from '../components/ParticleBackground';
import GlassCard from '../components/GlassCard';
import BottomNav from '../components/BottomNav';
import { Triangle, Activity, TrendingUp, DollarSign, CheckCircle, Search, Globe, Send, Bell } from 'lucide-react';

export default function HomeScreen() {
  const navigate = useNavigate();

  const stats = [
    { label: 'Agents Running', value: '5', icon: Activity, color: '#9dff00' },
    { label: 'Leads Found Today', value: '23', icon: TrendingUp, color: '#9dff00' },
    { label: 'Revenue Today', value: '₹12K', icon: DollarSign, color: '#9dff00' },
    { label: 'System Status', value: 'Active', icon: CheckCircle, color: '#9dff00' },
  ];

  const quickActions = [
    { label: 'Scan Leads', icon: Search, path: '/map' },
    { label: 'Generate Websites', icon: Globe, path: '/agents' },
    { label: 'Start Outreach', icon: Send, path: '/leads' },
  ];

  return (
    <div className="min-h-screen bg-[#0b0f14] pb-20 relative overflow-hidden max-w-[360px] mx-auto">
      <ParticleBackground />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#9dff00]/10">
          <div className="flex items-center gap-2">
            <Triangle 
              className="w-6 h-6 text-[#9dff00] fill-[#9dff00]" 
              style={{ filter: 'drop-shadow(0 0 8px #9dff00)' }}
            />
            <h1 
              className="text-xl text-white"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Vynrix OS
            </h1>
          </div>
          <button 
            onClick={() => navigate('/notifications')}
            className="relative"
          >
            <Bell className="w-5 h-5 text-gray-400" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#9dff00] rounded-full"></span>
          </button>
        </div>

        {/* Welcome */}
        <div className="p-6">
          <h2 
            className="text-2xl text-white mb-1"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Welcome back
          </h2>
          <p 
            className="text-gray-500 text-sm"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            System running smoothly
          </p>
        </div>

        {/* Stats Grid */}
        <div className="px-6 pb-6 grid grid-cols-2 gap-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <GlassCard key={index} className="p-4" glow>
                <Icon className="w-5 h-5 text-[#9dff00] mb-3" style={{ filter: 'drop-shadow(0 0 4px #9dff00)' }} />
                <p className="text-2xl text-white mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {stat.value}
                </p>
                <p className="text-xs text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {stat.label}
                </p>
              </GlassCard>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="px-6 pb-6">
          <h3 
            className="text-white mb-4"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Quick Actions
          </h3>
          <div className="space-y-3">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  onClick={() => navigate(action.path)}
                  className="w-full"
                >
                  <GlassCard className="p-4 flex items-center gap-3 hover:bg-white/10 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-[#9dff00]/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#9dff00]" />
                    </div>
                    <span className="text-white flex-1 text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {action.label}
                    </span>
                  </GlassCard>
                </button>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="px-6 pb-6">
          <h3 
            className="text-white mb-4"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Recent Activity
          </h3>
          <GlassCard className="p-4 space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#9dff00] mt-1.5" style={{ filter: 'drop-shadow(0 0 4px #9dff00)' }}></div>
              <div className="flex-1">
                <p className="text-white text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  New lead discovered in Kochi
                </p>
                <p className="text-gray-500 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                  2 minutes ago
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#9dff00] mt-1.5" style={{ filter: 'drop-shadow(0 0 4px #9dff00)' }}></div>
              <div className="flex-1">
                <p className="text-white text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Website prototype generated
                </p>
                <p className="text-gray-500 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                  15 minutes ago
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#9dff00] mt-1.5" style={{ filter: 'drop-shadow(0 0 4px #9dff00)' }}></div>
              <div className="flex-1">
                <p className="text-white text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Payment received ₹10,000
                </p>
                <p className="text-gray-500 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                  1 hour ago
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
