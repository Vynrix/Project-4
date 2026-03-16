import ParticleBackground from '../components/ParticleBackground';
import GlassCard from '../components/GlassCard';
import BottomNav from '../components/BottomNav';
import { TrendingUp, DollarSign, Users, CreditCard } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

export default function RevenueScreen() {
  const stats = [
    { label: 'Today', value: '₹12,000', icon: DollarSign, change: '+15%' },
    { label: 'This Week', value: '₹84,000', icon: TrendingUp, change: '+8%' },
    { label: 'This Month', value: '₹1,82,000', icon: CreditCard, change: '+12%' },
    { label: 'Total Clients', value: '21', icon: Users, change: '+3' },
  ];

  const chartData = [
    { name: 'Mon', revenue: 8000 },
    { name: 'Tue', revenue: 12000 },
    { name: 'Wed', revenue: 9500 },
    { name: 'Thu', revenue: 15000 },
    { name: 'Fri', revenue: 18000 },
    { name: 'Sat', revenue: 14000 },
    { name: 'Sun', revenue: 12000 },
  ];

  const recentTransactions = [
    { client: 'Malabar Cafe', amount: '₹10,000', date: 'Today, 2:30 PM', status: 'completed' },
    { client: 'Royal Salon', amount: '₹8,000', date: 'Today, 11:00 AM', status: 'completed' },
    { client: 'City Clinic', amount: '₹15,000', date: 'Yesterday', status: 'completed' },
    { client: 'Green Bakery', amount: '₹12,000', date: 'Yesterday', status: 'pending' },
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
            Revenue Dashboard
          </h1>
          <p 
            className="text-gray-500 text-sm"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Track your earnings
          </p>
        </div>

        <div className="p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <GlassCard key={index} className="p-4" glow>
                  <div className="flex items-start justify-between mb-2">
                    <Icon className="w-5 h-5 text-[#9dff00]" style={{ filter: 'drop-shadow(0 0 4px #9dff00)' }} />
                    <span className="text-xs text-green-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {stat.change}
                    </span>
                  </div>
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

          {/* Chart */}
          <GlassCard className="p-4" glow>
            <h3 className="text-white mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Weekly Revenue
            </h3>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#9dff00" opacity={0.1} />
                <XAxis 
                  dataKey="name" 
                  stroke="#666" 
                  style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif' }}
                />
                <YAxis 
                  stroke="#666" 
                  style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif' }}
                  tickFormatter={(value) => `₹${value / 1000}k`}
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#9dff00" 
                  strokeWidth={2}
                  dot={{ fill: '#9dff00', r: 4 }}
                  filter="drop-shadow(0 0 4px #9dff00)"
                />
              </LineChart>
            </ResponsiveContainer>
          </GlassCard>

          {/* Recent Transactions */}
          <div>
            <h3 className="text-white mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Recent Transactions
            </h3>
            <div className="space-y-3">
              {recentTransactions.map((transaction, index) => (
                <GlassCard key={index} className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {transaction.client}
                    </h4>
                    <span className="text-[#9dff00]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      {transaction.amount}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {transaction.date}
                    </p>
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        transaction.status === 'completed'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {transaction.status}
                    </span>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
