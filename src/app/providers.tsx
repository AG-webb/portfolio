import { IntersectionProvider } from "@/providers";
import type { ReactNode } from "react";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { store } from "./store";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <IntersectionProvider>{children}</IntersectionProvider>
        </Provider>
      </BrowserRouter>
    </StrictMode>
  );
};

export default Providers;
