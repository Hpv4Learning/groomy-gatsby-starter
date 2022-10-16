import styled from "styled-components";
import { ThemeType } from "../styles/theme";

type TypographyProps = {
  color?: string;
  weight?: keyof ThemeType["fontWeight"];
  textAlign?:
    | "start"
    | "end"
    | "left"
    | "right"
    | "center"
    | "justify"
    | "match-parent";
};

export const Typography = styled.div<TypographyProps>(
  ({ theme }: { theme: ThemeType }) =>
    ({ weight, color, textAlign }) => ({
      fontWeight: weight ? theme.fontWeight[weight] : 400,
      color: color ? color : "inherit",
      textAlign: textAlign,
    }),
);

export const Label = styled(Typography)({
  fontSize: "12px",
  lineHeight: "14px",
});

export const Paragraph = styled(Typography)({
  fontSize: "16px",
  lineHeight: "20px",
});
export const Heading = styled(Typography)({
  fontSize: "24px",
  lineHeight: "29px",
});
export const SubTitle = styled(Typography)({
  fontSize: "34px",
  lineHeight: "39px",
});
export const Display = styled(Typography)({
  fontSize: "56px",
  lineHeight: "64px",
});
