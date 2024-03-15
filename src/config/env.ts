import { Env } from '~/types';

export const getEnv = (): Env => {
  const { NEXT_PUBLIC_RPC_URL, NEXT_PUBLIC_PROJECT_ID, NEXT_PUBLIC_ALCHEMY_KEY } = process.env;

  return {
    RPC_URL: NEXT_PUBLIC_RPC_URL,
    PROJECT_ID: NEXT_PUBLIC_PROJECT_ID,
    ALCHEMY_KEY: NEXT_PUBLIC_ALCHEMY_KEY,
  };
};
