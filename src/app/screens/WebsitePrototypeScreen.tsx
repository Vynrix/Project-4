import { useNavigate, useParams } from 'react-router';
import ParticleBackground from '../components/ParticleBackground';
import GlassCard from '../components/GlassCard';
import { ArrowLeft, Edit, Send, Download, Globe } from 'lucide-react';

export default function WebsitePrototypeScreen() {
  const navigate = useNavigate();
  const { id } = useParams();

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
              Website Prototype
            </h1>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {/* Preview Info */}
          <GlassCard className="p-4" glow>
            <div className="flex items-center gap-3 mb-2">
              <Globe className="w-5 h-5 text-[#9dff00]" />
              <h2 className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                Malabar Cafe
              </h2>
            </div>
            <p className="text-sm text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
              AI-generated website prototype
            </p>
          </GlassCard>

          {/* Website Preview */}
          <GlassCard className="p-0 overflow-hidden">
            <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 border-b border-[#9dff00]/10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <div className="flex-1 ml-2 h-6 bg-white/5 rounded flex items-center px-3">
                  <span className="text-xs text-gray-500" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    malabarcafe.vynrix.ai
                  </span>
                </div>
              </div>

              {/* Simulated Website */}
              <div className="space-y-4">
                {/* Header */}
                <div className="text-center py-6 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg">
                  <h1 className="text-2xl text-white mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Malabar Cafe
                  </h1>
                  <p className="text-sm text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Authentic Malabar Cuisine
                  </p>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="h-32 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg"></div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-20 bg-white/5 rounded-lg"></div>
                    <div className="h-20 bg-white/5 rounded-lg"></div>
                  </div>
                  <div className="h-24 bg-white/5 rounded-lg"></div>
                </div>

                {/* Footer Preview */}
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <p className="text-xs text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Contact • Location • Hours
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white/5">
              <p className="text-xs text-gray-400 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                Generated on {new Date().toLocaleDateString()}
              </p>
            </div>
          </GlassCard>

          {/* Actions */}
          <div className="space-y-3">
            <button
              className="w-full bg-[#9dff00] text-[#0b0f14] py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(157,255,0,0.4)]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <Send className="w-5 h-5" />
              Send to Client
            </button>

            <div className="grid grid-cols-2 gap-3">
              <button
                className="bg-white/5 border border-[#9dff00]/20 text-white py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:bg-white/10"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <Edit className="w-5 h-5" />
                Edit
              </button>

              <button
                className="bg-white/5 border border-[#9dff00]/20 text-white py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:bg-white/10"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <Download className="w-5 h-5" />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
