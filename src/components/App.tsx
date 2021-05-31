import { extendTheme, QuaantumProvider, theme } from "quaantum-components";
import React from "react";
import { Data } from "../utils/data";
import Header from "./Header";

interface AppProps {
  data: Data;
}

const quaantumTheme = extendTheme(theme, {
  colors: {
    white: "#eeeeee",
    purple: {
      100: "#a890e6",
      200: "#9e83e3",
      300: "#9375e0",
      400: "#8867dd",
      500: "#754fd8",
      600: "#6237d2",
      700: "#552bc1",
      800: "#4a26a8",
    },
    black: {
      100: "#494949",
      200: "#353535",
      300: "#212121",
      400: "#1e1e1e",
      500: "#181818",
      600: "#151515",
      700: "#121212",
      800: "#0f0f0f",
    },
    green: {
      100: "#cee690",
      200: "#c8e383",
      300: "#c2e075",
      400: "#BCDD67",
      500: "#afd64a",
      600: "#a1ce2e",
      700: "#8ab127",
      800: "#739321",
    },
  },
  global: {
    body: {
      bgColor: "black.700",
    },
    "*": {
      m: 0,
      p: 0,
      boxSizing: "border-box",
    },
  },
  components: {
    Heading: {
      ...theme.components.Heading,
      base: {
        color: "purple.400",
      },
    },
    Button: {
      ...theme.components.Button,
      base: {
        ...theme.components.Button.base,
        minW: undefined,
        r: "8px",
        _focus: {
          boxShadow: "0px 0px 5px 1px rgb(136,103,221)",
        },
      },
      variants: {
        ...theme.components.Button.variants,
        solid: {
          color: "white",
          bgColor: "purple.700",
        },
      },
    },
  },
});

const App: React.FC<AppProps> = ({ children, data }) => {
  return (
    <QuaantumProvider theme={quaantumTheme}>
      <Header github={data.site.siteMetadata.github} />
      {children}
    </QuaantumProvider>
  );
};

export default App;
