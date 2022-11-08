import React from "react";
import styled from "styled-components";

const StyledBox = styled.div({
  height: "72px",
  position: "absolute",
  top: "0px",
  width: "100%",
  zIndex: 2,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "var(--yellow-400)",
  ".nav-container": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ".nav-logo": {
    flex: 1,
    maxWidth: "36px",
    width: "100%",
  },
  ".nav-links": {
    display: "flex",
    "& >*:not(:last-of-type)": {
      marginRight: "56px",
    },
  },
  ".nav-label": {
    ":hover": {
      textDecoration: "underline",
    },
  },
});

export const Navbar = () => {
  return (
    <>
      <StyledBox as='nav'></StyledBox>
    </>
  );
};
