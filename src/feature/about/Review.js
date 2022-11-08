import React from "react";
import styled from "styled-components";

const ReviewBox = styled("div")(({ theme }) => ({
  border: "1px solid",
  borderColor: theme.colors.gray[300],
  borderRadius: "16px",
  maxWidth: "343px",
  background: "white",
  padding: "16px",
  ".image-container": {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    overflow: "hidden",
    translate: "translateZ(0%)",
    display: "flex",
  },
}));

export const Review = () => {
  return <ReviewBox></ReviewBox>;
};
