import { useNavigate } from 'react-router';
import ParticleBackground from '../components/ParticleBackground';
import GlassCard from '../components/GlassCard';
import { ArrowLeft, MapPin, Globe, Mail, DollarSign, AlertCircle, CheckCircle } from 'lucide-react';

export default function NotificationsScreen() {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      type: 'lead',
      icon: MapPin,
      title: 'New Lead Found in Kochi',
      description: 'Malabar Cafe - High potential restaurant',
      time: '2 minutes ago',
      unread: true,
    },
    {
      id: 2,
      type: 'success',
      icon: Globe,
      title: 'Website Prototype Created',
      description: 'AI generated website for Green Clinic',
      time: '15 minutes ago',
      unread: true,
    },
    {
      id: 3,
      type: 'message',
      icon: Mail,
      title: 'Client Replied',
      description: 'Royal Salon responded to your outreach',
      time: '1 hour ago',
      unread: true,
    },
    {
      id: 4,
      type: 'payment',
      icon: DollarSign,
      title: 'Payment Received',
      description: '₹10,000 from City Clinic',
      time: '2 hours ago',
      unread: false,
    },
    {
      id: 5,
      type: 'alert',
      icon: AlertCircle,
      title: 'System Update',
      description: 'New features available in v1.1.0',
      time: '3 hours ago',
      unread: false,
    },
    {
      id: 6,
      type: 'success',
      icon: CheckCircle,
      title: 'Outreach Campaign Complete',
      description: 'Successfully contacted 15 leads',
      time: '5 hours ago',
      unread: false,
    },
    {
      id: 7,
      type: 'lead',
      icon: MapPin,
      title: 'New Lead Found in Thrissur',
      description: 'Tech Store - Electronics retail',
      time: 'Yesterday',
      unread: false,
    },
    {
      id: 8,
      type: 'payment',
      icon: DollarSign,
      title: 'Payment Received',
      description: '₹8,000 from Green Bakery',
      time: 'Yesterday',
      unread: false,
    },
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case 'lead':
        return '#9dff00';
      case 'success':
        return '#9dff00';
      case 'payment':
        return '#9dff00';
      case 'message':
        return '#60a5fa';
      case 'alert':
        return '#fbbf24';
      default:
        return '#9dff00';
    }
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
              className="text-2xl text-white"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Notifications
            </h1>
          </div>
          <button className="text-sm text-[#9dff00]" style={{ fontFamily: 'Inter, sans-serif' }}>
            Mark all read
          </button>
        </div>

        {/* Notifications List */}
        <div className="p-6 space-y-3">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            const iconColor = getIconColor(notification.type);

            return (
              <GlassCard
                key={notification.id}
                className={`p-4 ${notification.unread ? 'bg-white/8' : ''}`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${iconColor}20` }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: iconColor }}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {notification.title}
                      </h3>
                      {notification.unread && (
                        <div className="w-2 h-2 bg-[#9dff00] rounded-full flex-shrink-0 mt-1.5"></div>
                      )}
                    </div>

                    <p className="text-sm text-gray-400 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {notification.description}
                    </p>

                    <p className="text-xs text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {notification.time}
                    </p>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
