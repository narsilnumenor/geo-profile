import { Loader2 } from 'lucide-react';
import { cn } from '@/shared/lib/utils/cn';

type LoaderProps = {
  className?: string;
  size?: number;
};

export const Loader = (props: LoaderProps) => {
  const { className, size = 32 } = props;

  return (
    <div className={cn('flex items-center justify-center p-8', className)}>
      <Loader2 size={size} className="text-muted-foreground animate-spin" />
    </div>
  );
};
