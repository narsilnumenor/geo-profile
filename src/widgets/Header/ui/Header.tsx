import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { Logo } from '@/shared/ui/Logo';
import { Navigation } from '@/shared/ui/Navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="border-border bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Logo />
        <Navigation className="hidden md:flex" />

        <div className="hidden items-center md:flex">
          <ThemeSwitcher />
        </div>

        <button
          onClick={toggleMenu}
          className="text-foreground/80 hover:text-foreground relative z-50 p-2 transition-colors md:hidden"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="bg-background fixed inset-0 top-0 z-40 flex h-screen w-screen flex-col items-center pt-24 md:hidden">
          <div className="container flex h-full flex-col px-6">
            <Navigation
              className="flex-col items-stretch gap-4"
              onLinkClick={closeMenu}
            />

            <div className="border-border mt-auto flex items-center justify-between border-t py-6">
              <span className="text-muted-foreground text-sm font-medium">
                Режим
              </span>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
