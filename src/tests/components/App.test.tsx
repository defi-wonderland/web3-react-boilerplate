import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyApp from '~/pages/_app';

vi.mock('../config', () => ({
  getConfig: () => ({ PROJECT_ID: 'test-id' }),
}));

vi.mock('~/components', () => ({
  Themable: ({ children }) => <div>{children}</div>,
  customTheme: {},
}));

vi.mock('~/hooks', () => ({
  ScrollToTop: () => null,
}));

vi.mock('@rainbow-me/rainbowkit', () => ({
  RainbowKitProvider: ({ children }) => <div>{children}</div>,
  connectorsForWallets: () => ({}),
  injectedWallet: {},
  rainbowWallet: {},
  walletConnectWallet: {},
  darkTheme: () => ({}),
  customTheme: {},
}));

vi.mock('@tanstack/react-query', () => ({
  QueryClient: class {},
  QueryClientProvider: ({ children }) => <div>{children}</div>,
}));

vi.mock('wagmi', () => ({
  WagmiProvider: ({ children }) => <div>{children}</div>,
  createConfig: () => ({}),
  http: () => ({}),
}));

vi.mock('wagmi/chains', () => ({
  localhost: {},
}));

describe('MyApp', () => {
  it('renders without crashing and checks specific functionality', async () => {
    render(
      <MyApp Component={({ children }) => <div data-testid='boilerplate-title'>{children}</div>} pageProps={{}} />,
    );

    expect(screen.queryByTestId('boilerplate-title')).not.toBeNull();
  });
});
