import AppLayout from '@/layouts/AppLayout/AppLayout';
import Home from '@/pages/Home';
import { ROUTES } from '@/shared/constants/routes';
import { Route, Routes } from "react-router";
import Providers from "./providers";

const App = () => (
  <Providers>
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
      </Route>
    </Routes>
  </Providers>
);

export default App;
