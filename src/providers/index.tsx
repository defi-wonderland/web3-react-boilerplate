import { StateProvider } from './StateProvider';
import { ThemeProvider } from './ThemeProvider';
import { Web3ModalProvider } from './Web3ModalProvider';

export const Providers = ({ children }: { children: React.ReactElement }) => {
  return (
    <ThemeProvider>
      <StateProvider>
        <Web3ModalProvider>{children}</Web3ModalProvider>
      </StateProvider>
    </ThemeProvider>
  );
};
