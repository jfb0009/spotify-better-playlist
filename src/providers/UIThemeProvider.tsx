'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function UIThemeProvider({ children }: Props) {
  return (
    <NextThemesProvider
      attribute='class'
      defaultTheme='dark'
      storageKey='theme'
    >
      {children}
    </NextThemesProvider>
  );
}
