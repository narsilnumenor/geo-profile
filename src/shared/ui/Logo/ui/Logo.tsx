import { Link } from 'react-router';
import { cn } from '@/shared/lib/utils/cn';

type LogoProps = {
  className?: string;
};

export const Logo = (props: LogoProps) => {
  const { className } = props;

  return (
    <Link
      to="/"
      className={cn(
        'inline-block p-1 leading-none',
        'text-3xl font-black tracking-tighter transition-opacity select-none hover:opacity-90',
        'bg-linear-[250deg,var(--color-logo-1)_0%,var(--color-logo-2)_50%,var(--color-logo-3)_100%] bg-clip-text text-transparent',
        className
      )}
    >
      Geo Profile
    </Link>
  );
};
