import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, Sparkles, Info, X } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toast } = useApp();

  if (!toast) return null;

  const getBorderColor = () => {
    switch (toast.type) {
      case 'gold':
        return 'border-amber-500/50 bg-slate-900/95 shadow-gold-lg';
      case 'success':
        return 'border-emerald-500/50 bg-slate-900/95 shadow-emerald-lg';
      default:
        return 'border-cyan-500/50 bg-slate-900/95 shadow-cyan-lg';
    }
  };

  const getIcon = () => {
    switch (toast.type) {
      case 'gold':
        return <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />;
      case 'success':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />;
      default:
        return <Info className="w-5 h-5 text-cyan-400 shrink-0" />;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md w-full animate-bounce-short">
      <div className={`flex items-start space-x-3 p-4 rounded-xl border backdrop-blur-xl ${getBorderColor()}`}>
        {getIcon()}
        <div className="flex-1 pr-2">
          <h4 className="text-sm font-semibold text-slate-100">{toast.title}</h4>
          <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{toast.desc}</p>
        </div>
      </div>
    </div>
  );
};
