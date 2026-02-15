import { NavLink } from 'react-router';
import { cn } from '@/shared/lib/utils/cn';
import { NAVIGATION_ITEMS } from '@/shared/config/navigation';

type NavigationProps = {
  className?: string;
  onLinkClick?: () => void;
};

export const Navigation = (props: NavigationProps) => {
  const { className, onLinkClick } = props;

  return (
    <nav
      className={cn('flex items-center md:gap-4 lg:gap-8 xl:gap-12', className)}
    >
      {NAVIGATION_ITEMS.map((item) => (
        <NavLink
          key={item.path.slice(1)}
          to={item.path}
          onClick={onLinkClick}
          className={({ isActive }) =>
            cn(
              'hover:text-foreground/80 p-4 text-sm font-medium transition-colors',
              isActive
                ? 'text-foreground font-semibold'
                : 'text-muted-foreground'
            )
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};
