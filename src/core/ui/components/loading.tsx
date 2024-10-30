import { twJoin } from 'tailwind-merge';

type LoadingProps = {
  ref: React.Ref<React.ComponentRef<'div'>>;
};

export function Loading(props: LoadingProps) {
  const dotClassName = 'bg-emerald-500 size-4 animate-ping rounded-full';

  return (
    <div className="flex justify-center gap-4 py-6" {...props}>
      <div className={dotClassName} />
      <div className={twJoin(dotClassName, 'animation-delay-150')} />
      <div className={twJoin(dotClassName, 'animation-delay-300')} />
    </div>
  );
}
