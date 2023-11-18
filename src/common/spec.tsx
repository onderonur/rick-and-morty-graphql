type SpecProps = {
  title: string;
  value: React.ReactNode;
};

export function Spec({ title, value }: SpecProps) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase text-slate-300">
        {title}:
      </div>
      <div className="mt-1 text-yellow-400">{value}</div>
    </div>
  );
}
