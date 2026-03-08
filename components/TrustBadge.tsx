interface TrustBadgeProps {
  icon: string;
  text: string;
}

export default function TrustBadge({ icon, text }: TrustBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-100">
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  );
}
