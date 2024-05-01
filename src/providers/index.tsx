import type { ReactNode } from 'react';

import { StateProvider } from './StateProvider';
import { ThemeProvider } from './ThemeProvider';
import { WalletProvider } from './WalletProvider';

type Props = {
  children: ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <StateProvider>
        <WalletProvider>{children}</WalletProvider>
      </StateProvider>
    </ThemeProvider>
  );
};
