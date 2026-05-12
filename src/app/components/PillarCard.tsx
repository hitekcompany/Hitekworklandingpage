import { ArrowRight } from 'lucide-react';

interface PillarCardProps {
  title: string;
  description: string;
  onClick?: () => void;
}

export function PillarCard({ title, description, onClick }: PillarCardProps) {
  return (
    <div 
      className="bg-white rounded-2xl p-6 lg:p-8 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 cursor-pointer group border border-neutral-200 shadow-lg hover:shadow-[#1e4bbf]/20 hover:border-[#1e4bbf]/30"
      onClick={onClick}
      style={{
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease-in-out'
      }}
    >
      <div className="space-y-4">
        <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 group-hover:text-[#1e4bbf] transition-colors">
          {title}
        </h3>
        <p className="text-sm lg:text-base text-neutral-600 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center gap-2 text-[#1e4bbf] font-semibold group-hover:gap-3 transition-all">
          <span>Xem demo</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
}