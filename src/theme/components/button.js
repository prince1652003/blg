import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({ borderRadius: "0px", outlineOffset: "0", cursor: "pointer" });

const sizes = {
  "2xl": defineStyle({
    h: "57px",
    fontSize: "18px",
    px: "25px",
  }),
  "3xl": defineStyle({
    h: "62px",
    fontSize: "18px",
    px: "29px",
  }),
  sm: defineStyle({
    h: "31px",
    fontSize: "18px",
    px: "14px",
  }),
  xs: defineStyle({
    h: "28px",
    fontSize: "16px",
    px: "13px",
  }),
  lg: defineStyle({
    h: "45px",
    fontSize: "14px",
    px: "20px",
  }),
  "4xl": defineStyle({
    h: "71px",
    fontSize: "24px",
    px: "35px",
  }),
  "7xl": defineStyle({
    h: "76px",
    px: "13px",
  }),
  "5xl": defineStyle({
    h: "72px",
    fontSize: "18px",
    px: "28px",
  }),
  md: defineStyle({
    h: "39px",
    fontSize: "18px",
    px: "17px",
  }),
  xl: defineStyle({
    h: "55px",
    px: "12px",
  }),
  "6xl": defineStyle({
    h: "72px",
    px: "18px",
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      indigo_900_01: {
        bg: "indigo.900_01",
        color: "indigo.900_01",
      },
      gray_300: {
        bg: "gray.300",
      },
      pink_300: {
        bg: "pink.300",
        boxShadow: "xs",
      },
      white_A700: {
        bg: "white.A700",
        color: "pink.300",
      },
      white_A700_3f: {
        bg: "white.A700_3f",
        color: "white.A700",
      },
      gray_300_01: {
        bg: "gray.300_01",
      },
      light_blue_50: {
        bg: "light_blue.50",
      },
      lime_50: {
        bg: "lime.50",
      },
      red_50: {
        bg: "red.50",
      },
      gray_600_01: {
        bg: "gray.600_01",
      },
      gray_200: {
        bg: "gray.200",
        color: "blue_gray.600",
      },
      indigo_900_4f: {
        bg: "indigo.900_4f",
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["indigo_900_4f"];
  }),
  outline: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      indigo_200: {
        borderColor: "indigo.200",
        borderWidth: "2px",
        borderStyle: "solid",
        color: "indigo.900_01",
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["undefined"];
  }),
};

const Button = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "fill",
    size: "6xl",
  },
});
export default Button;
