import { Env } from '~/types';

export const getEnv = (): Env => {
  const NEXT_PUBLIC_RPC_URL = process.env.NEXT_PUBLIC_RPC_URL;
  const NEXT_PUBLIC_PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID;
  const NEXT_PUBLIC_ALCHEMY_KEY = process.env.NEXT_PUBLIC_ALCHEMY_KEY;

  return {
    RPC_URL: NEXT_PUBLIC_RPC_URL as string,
    PROJECT_ID: NEXT_PUBLIC_PROJECT_ID as string,
    ALCHEMY_KEY: NEXT_PUBLIC_ALCHEMY_KEY as string,
  };
};
