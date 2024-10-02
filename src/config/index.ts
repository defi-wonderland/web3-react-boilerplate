import { createPublicClient, http } from 'viem';
import { mainnet } from 'viem/chains';
import { Config } from '~/types';
import { getCustomThemes } from './Theme';
import { getConstants } from './constants';
import { getEnv } from './env';

// this provider if for load data when the user is disconnected
export const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(getEnv().RPC_URL, { batch: true }),
});

export const getConfig = (): Config => ({
  env: getEnv(),
  constants: getConstants(),
  customThemes: getCustomThemes(),
});
