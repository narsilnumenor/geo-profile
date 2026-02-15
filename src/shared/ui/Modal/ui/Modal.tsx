import * as React from 'react';
import { type ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { cn } from '@/shared/lib/utils/cn';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  headerActions?: ReactNode;
  className?: string;
};

export const Modal = (props: ModalProps) => {
  const { isOpen, onClose, title, children, headerActions, className } = props;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const mouseDownTarget = useRef<EventTarget | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  const handleMouseDown = (evt: React.MouseEvent<HTMLDialogElement>) => {
    mouseDownTarget.current = evt.target;
  };

  const handleMouseUp = (evt: React.MouseEvent<HTMLDialogElement>) => {
    if (
      mouseDownTarget.current === dialogRef.current &&
      evt.target === dialogRef.current
    ) {
      onClose();
    }
    mouseDownTarget.current = null;
  };

  return createPortal(
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={cn(
        'bg-card m-0 h-screen max-h-screen w-screen max-w-none overflow-hidden border-none p-0 outline-none',
        'backdrop:bg-background/80 backdrop:backdrop-blur-sm',
        'open:animate-in open:fade-in open:zoom-in-95 duration-200',
        className
      )}
    >
      <div
        className="flex h-full flex-col outline-none"
        tabIndex={-1}
        autoFocus
      >
        <div className="border-border flex shrink-0 items-center justify-between border-b px-10 py-6">
          <div className="flex items-center gap-4 overflow-hidden">
            <h3 className="text-foreground truncate font-semibold">
              {title || 'Просмотр'}
            </h3>
            {headerActions && (
              <div className="border-border flex items-center gap-1 border-l pl-4">
                {headerActions}
              </div>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer rounded-full p-1 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="bg-muted/50 flex flex-1 items-center justify-center overflow-auto p-4">
          {children}
        </div>
      </div>
    </dialog>,
    document.body
  );
};
