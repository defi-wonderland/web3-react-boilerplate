import { Routes, Route } from 'react-router-dom';

import { Landing } from '~/pages';
import { ScrollToTop } from '~/hooks';
import { AppLayout } from '~/containers';
import { Themable } from '~/components';
import { StateProvider } from './providers';
import GlobalStyle from '~/GlobalStyle';

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path='/' element={<Landing />} />
      </Route>
    </Routes>
  );
};

export const App = () => {
  return (
    <StateProvider>
      <Themable>
        <GlobalStyle />
        <ScrollToTop />
        <AppRouter />
      </Themable>
    </StateProvider>
  );
};
