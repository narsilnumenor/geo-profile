import { File as FileIcon, FileCode, FileText } from 'lucide-react';
import { cn } from '@/shared/lib/utils/cn';
import { getFileInfo } from '@/shared/lib/utils/getFileInfo';

type DocumentProps = {
  title: string;
  fileUrl: string;
  onClick?: () => void;
  className?: string;
};

export const Document = (props: DocumentProps) => {
  const { title, fileUrl, onClick, className } = props;
  const { extension, isPdf, isDoc } = getFileInfo(fileUrl);

  return (
    <div
      onClick={onClick}
      className={cn(
        'group border-border bg-card flex cursor-pointer items-center gap-4 rounded-xl border p-4 select-none',
        'transition-all duration-300 ease-out',
        'hover:-translate-y-1 hover:shadow-lg',
        className
      )}
    >
      <div className="bg-muted group-hover:bg-primary/10 flex size-10 items-center justify-center rounded-lg transition-colors">
        {isPdf ? (
          <FileText className="text-red-500" size={24} />
        ) : isDoc ? (
          <FileCode className="text-blue-500" size={24} />
        ) : (
          <FileIcon className="text-muted-foreground" size={24} />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="group-hover:text-primary truncate text-sm font-semibold transition-colors">
          {title}
        </h4>
        <p className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase">
          {extension}
        </p>
      </div>
    </div>
  );
};
