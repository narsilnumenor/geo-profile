import { cn } from '@/shared/lib/utils/cn';
import { getFileInfo } from '@/shared/lib/utils/getFileInfo';

type ImageProps = {
  title: string;
  fileUrl: string;
  onClick?: () => void;
  className?: string;
};

export const Image = (props: ImageProps) => {
  const { title, fileUrl, onClick, className } = props;
  const { extension } = getFileInfo(fileUrl);

  return (
    <div
      onClick={onClick}
      className={cn(
        'group border-border bg-card flex cursor-pointer flex-col overflow-hidden rounded-xl border transition-all duration-300 ease-out select-none',
        'hover:-translate-y-1 hover:shadow-lg',
        className
      )}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={fileUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="border-border bg-muted flex flex-col gap-1 border-t p-4">
        <h4 className="text-foreground truncate text-sm leading-tight font-semibold">
          {title}
        </h4>
        <p className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase">
          {extension}
        </p>
      </div>
    </div>
  );
};
