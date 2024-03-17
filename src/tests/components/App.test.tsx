import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { mockRouter } from '../__mocks__';
import { Router } from 'next/router';
import MyApp from '~/pages/_app';

vi.mock('../config', () => ({
  getConfig: () => ({ PROJECT_ID: 'test-id' }),
}));

vi.mock('~/components', () => ({
  Themable: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  customTheme: {},
}));

vi.mock('~/hooks', () => ({
  ScrollToTop: () => null,
}));

vi.mock('@rainbow-me/rainbowkit', () => ({
  RainbowKitProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  connectorsForWallets: () => ({}),
  injectedWallet: {},
  rainbowWallet: {},
  walletConnectWallet: {},
  darkTheme: () => ({}),
  customTheme: {},
}));

vi.mock('@tanstack/react-query', () => ({
  QueryClient: class {},
  QueryClientProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

vi.mock('wagmi', () => ({
  WagmiProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  createConfig: () => ({}),
  http: () => ({}),
}));

vi.mock('wagmi/chains', () => ({
  localhost: {},
}));

describe('MyApp', () => {
  it('renders without crashing and checks specific functionality', async () => {
    render(
      <MyApp
        Component={({ children }: { children: React.ReactNode }) => (
          <div data-testid='boilerplate-title'>{children}</div>
        )}
        pageProps={{}}
        router={mockRouter as unknown as Router}
      />,
    );

    expect(screen.queryByTestId('boilerplate-title')).not.toBeNull();
  });
});
