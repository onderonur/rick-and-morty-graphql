type SpecProps = {
  title: string;
  value: React.ReactNode;
};

export default function Spec({ title, value }: SpecProps) {
  return (
    <div>
      <div className="text-xs font-semibold text-slate-300 uppercase">
        {title}:
      </div>
      <div className="text-yellow-400 mt-1">{value}</div>
    </div>
  );
}
