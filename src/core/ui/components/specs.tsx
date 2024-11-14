type SpecsProps = {
  specs: Array<{ title: string; value: React.ReactNode }>;
};

export function Specs({ specs }: SpecsProps) {
  return (
    <dl className="flex flex-wrap gap-4">
      {specs.map((spec) => {
        if (!spec.value) return null;

        return (
          <div key={spec.title}>
            <dt className="text-sm font-semibold uppercase text-muted-foreground">
              {spec.title}
            </dt>
            <dd className="font-semibold">{spec.value}</dd>
          </div>
        );
      })}
    </dl>
  );
}
