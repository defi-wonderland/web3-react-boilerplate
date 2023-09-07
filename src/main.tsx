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

const { chains, publicClient } = configureChains(
  [localhost],
  [
    /* 
        Put your provider here
        More info: https://wagmi.sh/react/providers/configuring-chains
    */

    // alchemyProvider({ apiKey: VITE_ALCHEMY_KEY }),
    publicProvider(),
  ],
  { batch: { multicall: true } },
);

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      /* 
          Put your wallet connectors here
          More info: https://wagmi.sh/react/connectors/injected
      */

      // rainbowWallet({ VITE_WALLETCONNECT_PROJECT_ID, chains }),
      // walletConnectWallet({ VITE_WALLETCONNECT_PROJECT_ID, chains }),
      injectedWallet({ chains }),
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
