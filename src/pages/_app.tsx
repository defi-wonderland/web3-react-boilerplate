import { AppProps } from 'next/app';
import { Themable } from '~/components';
import { ScrollToTop } from '~/hooks';
import { StateProvider } from '~/providers';
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider, connectorsForWallets } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { rainbowWallet, walletConnectWallet, injectedWallet } from '@rainbow-me/rainbowkit/wallets';
import { WagmiProvider, http, createConfig } from 'wagmi';
import { localhost } from 'wagmi/chains';
import { getConfig } from '../config';

import { customTheme } from '~/components';
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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateProvider>
      <Themable>
        <ScrollToTop />
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider theme={customTheme}>
              <Component {...pageProps} />
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </Themable>
    </StateProvider>
  );
}

export default MyApp;
