import { useNavigate } from 'react-router';
import ParticleBackground from '../components/ParticleBackground';
import GlassCard from '../components/GlassCard';
import BottomNav from '../components/BottomNav';
import { MapPin, Globe, Phone, ArrowRight } from 'lucide-react';

export default function LeadPipelineScreen() {
  const navigate = useNavigate();

  const stages = [
    { name: 'New Leads', count: 12, color: '#9dff00' },
    { name: 'Contacted', count: 8, color: '#9dff00' },
    { name: 'Interested', count: 5, color: '#9dff00' },
    { name: 'Paid', count: 3, color: '#9dff00' },
  ];

  const leads = [
    { id: 1, name: 'Malabar Cafe', location: 'Kochi', phone: '+91 98765 43210', hasWebsite: false, stage: 'new', score: 82 },
    { id: 2, name: 'Royal Salon', location: 'Palakkad', phone: '+91 98765 43211', hasWebsite: false, stage: 'contacted', score: 76 },
    { id: 3, name: 'City Clinic', location: 'Thrissur', phone: '+91 98765 43212', hasWebsite: false, stage: 'interested', score: 91 },
    { id: 4, name: 'Green Bakery', location: 'Kochi', phone: '+91 98765 43213', hasWebsite: false, stage: 'new', score: 85 },
    { id: 5, name: 'Tech Store', location: 'Ernakulam', phone: '+91 98765 43214', hasWebsite: false, stage: 'contacted', score: 78 },
  ];

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
            Lead Pipeline
          </h1>
          <p 
            className="text-gray-500 text-sm"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Manage your business prospects
          </p>
        </div>

        {/* Pipeline Stages */}
        <div className="p-6">
          <div className="grid grid-cols-4 gap-2 mb-6">
            {stages.map((stage, index) => (
              <GlassCard key={index} className="p-3 text-center">
                <p className="text-lg text-[#9dff00] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {stage.count}
                </p>
                <p className="text-[10px] text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {stage.name}
                </p>
              </GlassCard>
            ))}
          </div>

          {/* Lead Cards */}
          <div className="space-y-3">
            {leads.map((lead) => (
              <button
                key={lead.id}
                onClick={() => navigate(`/leads/${lead.id}`)}
                className="w-full"
              >
                <GlassCard className="p-4 hover:bg-white/10 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-white mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {lead.name}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {lead.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          {lead.phone.slice(-4)}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-right">
                        <p className="text-xs text-[#9dff00]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                          Score: {lead.score}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-500" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {!lead.hasWebsite && (
                      <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <Globe className="w-3 h-3 inline mr-1" />
                        No Website
                      </span>
                    )}
                    <span className="px-2 py-1 bg-[#9dff00]/10 text-[#9dff00] text-xs rounded capitalize" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {lead.stage}
                    </span>
                  </div>
                </GlassCard>
              </button>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
