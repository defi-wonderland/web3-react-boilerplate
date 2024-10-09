import { createPublicClient, http } from 'viem';
import { mainnet } from 'viem/chains';
import { Config } from '~/types';
import { getConstants } from './constants';
import { getEnv } from './env';
import { getCustomThemes } from './themes';

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
