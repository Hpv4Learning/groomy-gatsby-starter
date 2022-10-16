import React from "react";
import { useCustomTheme, GlobalStyle } from "./src/styles/theme";
import { ThemeProvider } from "styled-components";
export const useWrapWithProvider = ({
  element,
}: {
  element: React.ReactNode;
}) => {
  const theme = useCustomTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  );
};
