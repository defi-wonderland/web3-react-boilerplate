export interface Env {
  RPC_URL: string;
}

export interface Constants {
  // ...
}

export interface Config extends Env, Constants {}
