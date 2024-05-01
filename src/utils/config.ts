import { createConfig, http, cookieStorage, createStorage } from 'wagmi';
import { localhost, sepolia } from 'wagmi/chains';
import { rainbowWallet, walletConnectWallet, injectedWallet } from '@rainbow-me/rainbowkit/wallets';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';

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

export const config = createConfig({
  chains: [localhost, sepolia],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [localhost.id]: http(),
    [sepolia.id]: http(),
  },
  batch: { multicall: true },
  connectors,
});
