import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import LoadingProvider from "contexts/LoadingContext";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <LoadingProvider>
            <Component {...pageProps} />
          </LoadingProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
