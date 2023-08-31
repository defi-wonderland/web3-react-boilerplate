/* eslint-disable react-refresh/only-export-components */

import React from 'react';
import { afterEach } from 'vitest';
import { HashRouter } from 'react-router-dom';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { localhost } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { injectedWallet } from '@rainbow-me/rainbowkit/wallets';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';

// testing
import { cleanup, render } from '@testing-library/react';

const { chains, publicClient } = configureChains(
  [localhost],
  [
    // alchemyProvider({ apiKey: VITE_ALCHEMY_KEY! }),
    publicProvider(),
  ],
);

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [injectedWallet({ chains })],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const AllTheProviders = ({ children }: { children: React.ReactElement }) => {
  // wrap provider(s) here if needed
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <HashRouter>{children}</HashRouter>
      </RainbowKitProvider>
    </WagmiConfig>
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
