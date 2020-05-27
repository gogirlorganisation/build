import { ThemeProvider } from "styled-components";
import { ToastProvider } from "react-toast-notifications";

import theme from "../lib/theme";

export default function withContexts(Component) {
  return () => (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <Component />
      </ToastProvider>
    </ThemeProvider>
  );
}
