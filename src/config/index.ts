import { createPublicClient, http } from 'viem';
import { mainnet } from 'viem/chains';

import { getConstants } from './constants';
import { getEnv } from './env';

import { Config } from '~/types';

// this provider if for load data when the user is disconnected
export const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(getEnv().RPC_URL, { batch: true }),
});

export const getConfig = (): Config => ({
  ...getEnv(),
  ...getConstants(),
});
