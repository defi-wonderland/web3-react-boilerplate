import { Routes, Route } from 'react-router-dom';

import { Landing } from '~/pages';
import { ScrollToTop } from '~/hooks';
import { AppLayout } from '~/containers';
import { Themable } from '~/components';
import GlobalStyle from '~/GlobalStyle';

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path='/' element={<Landing />} />
        {/* <Route path='/requests' element={<Requests />} /> */}
        {/* <Route path='/faq' element={<Faq />} /> */}
        {/* <Route path='/about' element={<About />} /> */}
      </Route>
    </Routes>
  );
};

export const App = () => {
  return (
    <Themable>
      <GlobalStyle />
      <ScrollToTop />
      <AppRouter />
    </Themable>
  );
};
