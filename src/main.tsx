import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { injectedWallet, rainbowWallet, walletConnectWallet } from '@rainbow-me/rainbowkit/wallets';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';

import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { localhost } from 'wagmi/chains';

import { customTheme } from '~/components';
import { getConfig } from './config';
import { App } from '~/App';

import '@rainbow-me/rainbowkit/styles.css';

const { PROJECT_ID, ALCHEMY_KEY } = getConfig();

const { chains, publicClient } = configureChains(
  [localhost],
  [alchemyProvider({ apiKey: ALCHEMY_KEY }), publicProvider()],
  { batch: { multicall: true } },
);

const getWallets = () => {
  if (PROJECT_ID) {
    return [
      injectedWallet({ chains }),
      rainbowWallet({ projectId: PROJECT_ID, chains }),
      walletConnectWallet({ projectId: PROJECT_ID, chains }),
    ];
  } else {
    return [injectedWallet({ chains })];
  }
};

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: getWallets(),
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
