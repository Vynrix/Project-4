import { useNavigate } from 'react-router';
import ParticleBackground from '../components/ParticleBackground';
import GlassCard from '../components/GlassCard';
import { ArrowLeft, User, Mail, Building2, CreditCard, CheckCircle, Settings } from 'lucide-react';

export default function ProfileScreen() {
  const navigate = useNavigate();

  const connectedServices = [
    { name: 'Google Maps API', status: 'connected', icon: '🗺️' },
    { name: 'OpenAI GPT-4', status: 'connected', icon: '🤖' },
    { name: 'SendGrid Email', status: 'connected', icon: '📧' },
    { name: 'Stripe Payments', status: 'pending', icon: '💳' },
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
              Profile
            </h1>
          </div>
          <button onClick={() => navigate('/settings')}>
            <Settings className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Profile Card */}
          <GlassCard className="p-6 text-center" glow>
            <div className="w-20 h-20 rounded-full bg-[#9dff00]/10 flex items-center justify-center mx-auto mb-4">
              <User className="w-10 h-10 text-[#9dff00]" />
            </div>
            <h2 className="text-xl text-white mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
              John Entrepreneur
            </h2>
            <p className="text-sm text-gray-400 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Premium Member
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9dff00]/10 rounded-full">
              <CheckCircle className="w-4 h-4 text-[#9dff00]" />
              <span className="text-sm text-[#9dff00]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Verified
              </span>
            </div>
          </GlassCard>

          {/* Account Info */}
          <div>
            <h3 
              className="text-gray-500 text-sm mb-3"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Account Information
            </h3>
            <GlassCard className="divide-y divide-[#9dff00]/10">
              <div className="p-4 flex items-start gap-3">
                <User className="w-4 h-4 text-[#9dff00] mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-1">Name</p>
                  <p className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                    John Entrepreneur
                  </p>
                </div>
              </div>

              <div className="p-4 flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#9dff00] mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-1">Email</p>
                  <p className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                    john@example.com
                  </p>
                </div>
              </div>

              <div className="p-4 flex items-start gap-3">
                <Building2 className="w-4 h-4 text-[#9dff00] mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-1">Organization</p>
                  <p className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Vynrix Solutions
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Subscription */}
          <div>
            <h3 
              className="text-gray-500 text-sm mb-3"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Subscription
            </h3>
            <GlassCard className="p-4" glow>
              <div className="flex items-start gap-3 mb-3">
                <CreditCard className="w-5 h-5 text-[#9dff00]" />
                <div className="flex-1">
                  <h4 className="text-white mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Premium Plan
                  </h4>
                  <p className="text-sm text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Unlimited agents, leads, and websites
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-[#9dff00]/10">
                <span className="text-sm text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Next billing date
                </span>
                <span className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                  April 16, 2026
                </span>
              </div>
            </GlassCard>
          </div>

          {/* Connected Services */}
          <div>
            <h3 
              className="text-gray-500 text-sm mb-3"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Connected Services
            </h3>
            <GlassCard className="divide-y divide-[#9dff00]/10">
              {connectedServices.map((service, index) => (
                <div key={index} className="p-4 flex items-center gap-3">
                  <span className="text-2xl">{service.icon}</span>
                  <div className="flex-1">
                    <p className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {service.name}
                    </p>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      service.status === 'connected'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {service.status}
                  </span>
                </div>
              ))}
            </GlassCard>
          </div>

          {/* Stats */}
          <div>
            <h3 
              className="text-gray-500 text-sm mb-3"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Usage Statistics
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <GlassCard className="p-4 text-center">
                <p className="text-2xl text-[#9dff00] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  156
                </p>
                <p className="text-xs text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Leads Scanned
                </p>
              </GlassCard>
              <GlassCard className="p-4 text-center">
                <p className="text-2xl text-[#9dff00] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  42
                </p>
                <p className="text-xs text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Websites Built
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
