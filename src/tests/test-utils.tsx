/* eslint-disable react-refresh/only-export-components */

import React from 'react';
import { afterEach } from 'vitest';
import { HashRouter } from 'react-router-dom';
import { RainbowKitProvider, connectorsForWallets } from '@rainbow-me/rainbowkit';
import { injectedWallet } from '@rainbow-me/rainbowkit/wallets';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, http, createConfig } from 'wagmi';
import { localhost } from 'wagmi/chains';

// testing
import { cleanup, render } from '@testing-library/react';

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [injectedWallet],
    },
  ],
  {
    appName: 'Web3 React boilerplate',
    projectId: '',
  },
);

const config = createConfig({
  chains: [localhost],
  transports: {
    [localhost.id]: http(),
  },
  batch: { multicall: true },
  connectors,
});

const queryClient = new QueryClient();

const AllTheProviders = ({ children }: { children: React.ReactElement }) => {
  // wrap provider(s) here if needed
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <HashRouter>{children}</HashRouter>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });

afterEach(() => {
  cleanup();
});

export * from '@testing-library/react';
export * from './__mocks__';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render };
