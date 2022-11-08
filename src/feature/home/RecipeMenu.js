import React from "react";
import styled from "styled-components";

const CustomBox = styled("div")(({ theme }) => ({
  background: theme.colors.yellow[300],
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "8px",
  maxWidth: "264px",
  width: "100%",
  padding: "76px 0px",
  border: "1px solid",
  borderColor: theme.colors.yellow[400],
  trasnition: "all 75ms linear",
  cursor: "pointer",
  ":hover": {
    boxShadow: theme.shadow.heavy,
    background: "#fff",
  },
}));

const MenuItem = () => {
  return <CustomBox></CustomBox>;
};

export const RecipeMenu = () => {
  return (
    <div className='flex align-items-center justify-content-between'></div>
  );
};
