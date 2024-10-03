import { Env } from '~/types';

const env: Env = {
  RPC_URL: process.env.NEXT_PUBLIC_RPC_URL as string,
  PROJECT_ID: process.env.NEXT_PUBLIC_PROJECT_ID as string,
  ALCHEMY_KEY: process.env.NEXT_PUBLIC_ALCHEMY_KEY as string,
};

export const getEnv = (): Env => {
  return env;
};
