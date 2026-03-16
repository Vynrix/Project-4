import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}

export default function GlassCard({ children, className = '', glow = false }: GlassCardProps) {
  return (
    <div
      className={`backdrop-blur-xl bg-white/5 border border-[#9dff00]/20 rounded-2xl ${className}`}
      style={
        glow
          ? {
              boxShadow: '0 0 20px rgba(157, 255, 0, 0.1)',
            }
          : {}
      }
    >
      {children}
    </div>
  );
}
