'use client';
import { useTheme } from 'next-themes';
import { UseThemeProps } from 'next-themes/dist/types';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ThemeSwitchProps {}
/* Toggle theme switch */

export default function ThemeSwitch({}: ThemeSwitchProps) {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme }: UseThemeProps = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  if (!mounted) {
    return null;
  }

  return (
    <div>
      {currentTheme === 'dark' ? (
        <button
          className='hover:-translate-y-1 transition-all'
          onClick={() => setTheme('light')}
        >
          <Image
            src='/images/light-icon.png'
            alt='dark theme'
            width={64}
            height={64}
          />
        </button>
      ) : (
        <button
          className='hover:-translate-y-1 transition-all'
          onClick={() => setTheme('dark')}
        >
          <Image
            src='/images/dark-icon.png'
            alt='light theme'
            width={64}
            height={64}
          />
        </button>
      )}
    </div>
  );
}
