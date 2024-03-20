'use client';
import type { ReactNode } from 'react';

import { StateProvider } from './StateProvider';
import { ThemeProvider } from './ThemeProvider';
import { Web3ModalProvider } from './Web3ModalProvider';

type Props = {
  children: ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <StateProvider>
        <Web3ModalProvider>{children}</Web3ModalProvider>
      </StateProvider>
    </ThemeProvider>
  );
};
