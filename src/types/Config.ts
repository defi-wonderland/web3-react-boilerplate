export interface Env {
  RPC_URL: string;
  PROJECT_ID: string;
  ALCHEMY_KEY: string;
}

export interface Constants {
  // ...
}

export interface Config extends Env, Constants {}
