import AnimatedSection from './AnimatedSection';

interface StatCardProps {
  number: string;
  label: string;
  icon: string;
  delay?: number;
}

export default function StatCard({ number, label, icon, delay = 0 }: StatCardProps) {
  return (
    <AnimatedSection delay={delay}>
      <div className="relative bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-6 text-white text-center overflow-hidden group hover:scale-105 transition-transform duration-300">
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative z-10">
          <div className="text-4xl mb-2">{icon}</div>
          <div className="text-3xl font-bold mb-1">{number}</div>
          <div className="text-sm text-primary-100">{label}</div>
        </div>
      </div>
    </AnimatedSection>
  );
}
