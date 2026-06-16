interface StatusBadgeProps {
  percentage: number;
}

const StatusBadge = ({ percentage }: StatusBadgeProps) => {
  if (percentage >= 95) {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        Full
      </span>
    );
  }
  if (percentage >= 80) {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
        Almost Full
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-sky-100 text-sky-700">
      <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
      Normal
    </span>
  );
};

export default StatusBadge;
