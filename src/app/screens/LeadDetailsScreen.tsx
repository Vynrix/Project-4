import { useNavigate, useParams } from 'react-router';
import ParticleBackground from '../components/ParticleBackground';
import GlassCard from '../components/GlassCard';
import { ArrowLeft, MapPin, Phone, Globe, Mail, Send, ExternalLink } from 'lucide-react';

export default function LeadDetailsScreen() {
  const navigate = useNavigate();
  const { id } = useParams();

  const lead = {
    id: id || '1',
    name: 'Malabar Cafe',
    location: 'MG Road, Kochi, Kerala 682016',
    phone: '+91 98765 43210',
    email: 'info@malabarcafe.com',
    category: 'Restaurant',
    hasWebsite: false,
    score: 82,
    description: 'Popular local restaurant serving authentic Malabar cuisine',
    estimatedRevenue: '₹5-10L/year',
  };

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
              className="text-xl text-white"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Lead Details
            </h1>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {/* Business Info */}
          <GlassCard className="p-6" glow>
            <h2 className="text-2xl text-white mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              {lead.name}
            </h2>
            <div className="inline-block px-3 py-1 bg-[#9dff00]/10 text-[#9dff00] text-sm rounded-full mb-4">
              {lead.category}
            </div>
            <p className="text-gray-400 text-sm mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              {lead.description}
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#9dff00] mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-0.5">Location</p>
                  <p className="text-white text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {lead.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#9dff00] mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-0.5">Phone</p>
                  <p className="text-white text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {lead.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#9dff00] mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-0.5">Email</p>
                  <p className="text-white text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {lead.email}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="w-4 h-4 text-red-400 mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-0.5">Website Status</p>
                  <p className="text-red-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    No Website Found
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3">
            <GlassCard className="p-4">
              <p className="text-xs text-gray-500 mb-1">Lead Score</p>
              <p className="text-2xl text-[#9dff00]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {lead.score}
              </p>
            </GlassCard>
            <GlassCard className="p-4">
              <p className="text-xs text-gray-500 mb-1">Est. Revenue</p>
              <p className="text-lg text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                {lead.estimatedRevenue}
              </p>
            </GlassCard>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => navigate(`/prototype/${lead.id}`)}
              className="w-full bg-[#9dff00] text-[#0b0f14] py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(157,255,0,0.4)]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <Globe className="w-5 h-5" />
              Generate Website
            </button>

            <button
              className="w-full bg-white/5 border border-[#9dff00]/20 text-white py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:bg-white/10"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <Send className="w-5 h-5" />
              Send Outreach
            </button>

            <button
              onClick={() => navigate('/map')}
              className="w-full bg-white/5 border border-[#9dff00]/20 text-white py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:bg-white/10"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <ExternalLink className="w-5 h-5" />
              Open Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
