import React from "react";
import styled from "styled-components";

const StyledBox = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 72px;
  width: 100%;
  background: ${(props) => props.theme.colors.yellow[300]};
`;

export const Footer = () => {
  return <StyledBox></StyledBox>;
};
