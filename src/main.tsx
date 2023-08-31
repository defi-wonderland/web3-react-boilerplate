import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { injectedWallet /* rainbowWallet, walletConnectWallet */ } from '@rainbow-me/rainbowkit/wallets';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';

import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { localhost } from 'wagmi/chains';

import { customTheme } from '~/components';
import { App } from '~/App';

import '@rainbow-me/rainbowkit/styles.css';

// const projectId = ''; // temporary

const { chains, publicClient } = configureChains(
  [localhost],
  [
    // alchemyProvider({ apiKey: VITE_ALCHEMY_KEY! }),
    publicProvider(),
  ],
  { batch: { multicall: true } },
);

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      injectedWallet({ chains }),
      // rainbowWallet({ projectId, chains }),
      // walletConnectWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider theme={customTheme} chains={chains}>
        <HashRouter>
          <App />
        </HashRouter>
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>,
);
