import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/shared/lib/theme/useTheme';
import { cn } from '@/shared/lib/utils/cn';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      role="switch"
      aria-checked={theme === 'dark'}
      className={cn(
        'relative inline-flex h-8 w-14 cursor-pointer items-center rounded-full transition-all duration-300',
        'bg-muted border-border cursor-pointer border shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] dark:shadow-none'
      )}
    >
      <div className="text-muted-foreground/50 flex w-full justify-between px-2">
        <Sun size={12} strokeWidth={3} />
        <Moon size={12} strokeWidth={3} />
      </div>

      <span
        className={cn(
          'absolute left-1 flex h-6 w-6 items-center justify-center rounded-full shadow-md transition-transform duration-300 ease-out',
          'bg-background border-border/50 border',
          theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
        )}
      >
        {theme === 'light' ? (
          <Sun size={12} className="fill-yellow-500 text-yellow-500" />
        ) : (
          <Moon size={12} className="fill-blue-400 text-blue-400" />
        )}
      </span>
    </button>
  );
};
