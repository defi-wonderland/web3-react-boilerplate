import '@rainbow-me/rainbowkit/styles.css';

import React from 'react';

import { RainbowKitProvider, connectorsForWallets, darkTheme } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { rainbowWallet, walletConnectWallet, injectedWallet } from '@rainbow-me/rainbowkit/wallets';
import { WagmiProvider, http, createConfig } from 'wagmi';
import { localhost } from 'wagmi/chains';

import { getConfig } from '../config';

const { PROJECT_ID } = getConfig();

const getWallets = () => {
  if (PROJECT_ID) {
    return [injectedWallet, rainbowWallet, walletConnectWallet];
  } else {
    return [injectedWallet];
  }
};

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: getWallets(),
    },
  ],
  {
    appName: 'Web3 React boilerplate',
    projectId: PROJECT_ID,
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

export function Web3ModalProvider({ children }: { children: React.ReactElement }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize='compact' theme={darkTheme()}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
