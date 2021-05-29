import { extendTheme, QuaantumProvider, theme } from "quaantum-components";
import React from "react";

interface AppProps {}
const purple = { 200: "#8867dd", 300: "#AA92E7" };
const quaantumTheme = extendTheme(theme, {
  colors: {
    ...theme.colors,
    purple,
    black: {
      100: "#121212",
      200: "#000000",
    },
    primary: purple[200],
  },
  global: {
    body: {
      bgColor: "black.100",
    },
  },
});

const App: React.FC<AppProps> = ({ children }) => {
  return <QuaantumProvider theme={quaantumTheme}>{children}</QuaantumProvider>;
};

export default App;
