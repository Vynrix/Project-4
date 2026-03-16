import { useNavigate } from 'react-router';
import ParticleBackground from '../components/ParticleBackground';
import GlassCard from '../components/GlassCard';
import { ArrowLeft, MapPin, Search } from 'lucide-react';

export default function MapExplorerScreen() {
  const navigate = useNavigate();

  const leads = [
    { id: 1, name: 'Malabar Cafe', lat: 40, lon: 30 },
    { id: 2, name: 'Royal Salon', lat: 60, lon: 50 },
    { id: 3, name: 'City Clinic', lat: 45, lon: 70 },
    { id: 4, name: 'Green Bakery', lat: 75, lon: 40 },
    { id: 5, name: 'Tech Store', lat: 55, lon: 60 },
  ];

  return (
    <div className="min-h-screen bg-[#0b0f14] relative overflow-hidden max-w-[360px] mx-auto">
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
              Map Explorer
            </h1>
          </div>
        </div>

        {/* Search */}
        <div className="p-6">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search location..."
              className="w-full bg-white/5 border border-[#9dff00]/20 rounded-lg px-10 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#9dff00]/50"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
          </div>

          {/* Map Container */}
          <GlassCard className="relative overflow-hidden h-[400px] mb-6" glow>
            {/* Simulated Map Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
              {/* Grid Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="border border-white/20"></div>
                  ))}
                </div>
              </div>

              {/* Map Pins */}
              {leads.map((lead) => (
                <button
                  key={lead.id}
                  onClick={() => navigate(`/leads/${lead.id}`)}
                  className="absolute transform -translate-x-1/2 -translate-y-full group"
                  style={{
                    left: `${lead.lon}%`,
                    top: `${lead.lat}%`,
                  }}
                >
                  <div className="relative">
                    <MapPin
                      className="w-8 h-8 text-[#9dff00] fill-[#9dff00]"
                      style={{ filter: 'drop-shadow(0 0 8px #9dff00)' }}
                    />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-[#0b0f14] border border-[#9dff00]/20 rounded-lg px-3 py-2 whitespace-nowrap">
                        <p className="text-xs text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {lead.name}
                        </p>
                        <p className="text-[10px] text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                          No Website
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Map Controls */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <button className="w-8 h-8 bg-white/10 backdrop-blur-xl border border-[#9dff00]/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all">
                +
              </button>
              <button className="w-8 h-8 bg-white/10 backdrop-blur-xl border border-[#9dff00]/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all">
                −
              </button>
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4">
              <GlassCard className="px-3 py-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#9dff00]" />
                  <span className="text-xs text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                    No Website
                  </span>
                </div>
              </GlassCard>
            </div>
          </GlassCard>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            <GlassCard className="p-3 text-center">
              <p className="text-xl text-[#9dff00] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                23
              </p>
              <p className="text-[10px] text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                Total Leads
              </p>
            </GlassCard>
            <GlassCard className="p-3 text-center">
              <p className="text-xl text-[#9dff00] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                5
              </p>
              <p className="text-[10px] text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                In View
              </p>
            </GlassCard>
            <GlassCard className="p-3 text-center">
              <p className="text-xl text-[#9dff00] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                Kochi
              </p>
              <p className="text-[10px] text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                Location
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
