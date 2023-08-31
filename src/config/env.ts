import { Env } from '~/types';

export const getEnv = (): Env => {
  const { VITE_RPC_URL } = import.meta.env;

  return {
    RPC_URL: VITE_RPC_URL,
  };
};
