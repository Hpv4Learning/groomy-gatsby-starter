import React from "react";
import styled from "styled-components";

const CustomBox = styled("article")(({ theme }) => ({
  padding: "16px",
  maxWidth: "333px",
  width: "100%",
  border: `1px solid ${theme.colors.yellow[500]}`,
  background: theme.colors.yellow[300],
  borderRadius: "6px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "36px",
  cursor: "pointer",
  transition: "shadow 75ms linear",
  ":hover": {
    boxShadow: theme.shadow.light,
  },
  ".img-container": {
    maxWidth: "297px",
    maxHeight: "235px",
    borderRadius: "6px",
    overflow: "hidden",
    transform: "translateZ(0)",
    width: "100%",
  },
}));

const Recipe = () => {
  return <CustomBox></CustomBox>;
};

export { Recipe };
