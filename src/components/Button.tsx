import React from "react";
import styled from "styled-components";
import { ThemeType, useCustomTheme } from "../styles/theme";

type BaseButtonProps = {
  color?: "orange" | "purple";
  size?: "xl" | "md" | "sm";
  variant?: "contained" | "outlined";
  isRounded?: true;
};

const getButtonSize = (size: BaseButtonProps["size"]) => {
  let props;
  switch (size) {
    case "sm":
      props = {
        width: "fit-content",
        minWidth: "36px",
        height: "36px",
        padding: "0px 8px",
        fontSize: "12px",
      };
      break;
    case "md":
      props = {
        width: "fit-content",
        minWidth: "48px",
        height: "48px",
        padding: "0px 12px",
        fontSize: "16px",
      };
    default:
      props = {
        width: "fit-content",
        minWidth: "56px",
        height: "56px",
        padding: "0px 18px",
        fontSize: "18px",
      };
      break;
  }
  return props;
};

const useHoverProps = ({
  color,
  variant,
}: {
  variant: BaseButtonProps["variant"];
  color: NonNullable<BaseButtonProps["color"]>;
}) => {
  const theme = useCustomTheme();
  let hoverProps;
  switch (variant) {
    case "outlined":
      hoverProps = {
        background: `${theme.colors[color].hover}19`,
        borderColor: theme.colors[color][400],
      };
      break;

    default:
      hoverProps = {
        background: theme.colors[color].hover,
        borderColor: theme.colors[color].hover,
      };
      break;
  }
  return hoverProps;
};

export const ButtonBase = styled.button<BaseButtonProps>(
  ({ theme }: { theme: ThemeType }) =>
    ({ color = "orange", size, variant, isRounded }) => {
      const buttonColor = theme.colors[color][400];
      const sizeProps = getButtonSize(size);
      const hoverProps = useHoverProps({ color, variant });
      return {
        border: "1px solid",
        borderColor: buttonColor,
        borderRadius: isRounded ? "100px" : "2px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: variant === "contained" ? buttonColor : "#fff",
        color: variant === "contained" ? "#fff" : buttonColor,
        cursor: "pointer",
        userSelect: "none",
        transition: "all 125 ease",
        ...sizeProps,
        ":hover": {
          ...hoverProps,
        },
      };
    },
);

ButtonBase.defaultProps = {
  color: "orange",
  size: "md",
  variant: "contained",
};

type Props = {
  children: React.ReactNode;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
};

export const Button = (props: Props & BaseButtonProps) => {
  const { children, leftIcon, rightIcon, ...rest } = props;
  return (
    <ButtonBase {...rest}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {leftIcon ? (
          <span
            style={{
              marginRight: "4px",
            }}
          >
            {React.cloneElement(leftIcon, { style: { color: "inherit" } })}
          </span>
        ) : null}
        {children}
        {rightIcon ? (
          <span
            style={{
              marginLeft: "4px",
            }}
          >
            {React.cloneElement(rightIcon, { style: { color: "inherit" } })}
          </span>
        ) : null}
      </div>
    </ButtonBase>
  );
};
