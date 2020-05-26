import { ThemeProvider } from "styled-components";

import theme from "../../lib/theme";
import Head from "./Head";

export default function Layout({ title, children }) {
  return (
    <ThemeProvider theme={theme}>
      <Head title={title} />
      {children}
    </ThemeProvider>
  );
}
