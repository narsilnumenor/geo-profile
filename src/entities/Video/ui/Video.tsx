import { cn } from '@/shared/lib/utils/cn';
import { getFileInfo } from '@/shared/lib/utils/getFileInfo';
import { Play } from 'lucide-react';

type VideoProps = {
  title: string;
  fileUrl: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
};

export const Video = (props: VideoProps) => {
  const { title, fileUrl, isActive, onClick, className } = props;
  const { extension } = getFileInfo(fileUrl);

  return (
    <div
      onClick={onClick}
      className={cn(
        'flex shrink-0 cursor-pointer items-center gap-3 rounded-xl border p-3 transition-all',
        isActive
          ? 'bg-primary/10 border-primary/20'
          : 'bg-muted/30 hover:bg-muted hover:border-border border-transparent',
        className
      )}
    >
      <div
        className={cn(
          'flex size-9 shrink-0 items-center justify-center rounded-full transition-colors',
          isActive
            ? 'bg-primary text-primary-foreground'
            : 'bg-background border-border text-muted-foreground border'
        )}
      >
        <Play size={14} fill={isActive ? 'currentColor' : 'none'} />
      </div>

      <div className="min-w-0 flex-1">
        <h4
          className={cn(
            'truncate text-sm font-semibold transition-colors',
            isActive ? 'text-primary' : 'text-foreground'
          )}
        >
          {title}
        </h4>
        <p className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase">
          {extension}
        </p>
      </div>
    </div>
  );
};
