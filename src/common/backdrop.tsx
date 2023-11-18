import { createPortal } from 'react-dom';

type BackdropProps = React.PropsWithChildren;

export function Backdrop({ children }: BackdropProps) {
  return createPortal(
    <div>
      <div className="fixed inset-0" aria-hidden="true" />
      {children}
    </div>,
    document.body,
  );
}
