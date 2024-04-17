import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({ field: { borderWidth: "1px", borderRadius: "5px" } });

const sizes = {
  sm: defineStyle({
    field: {
      fontSize: "18px",
      height: "72px",
      px: "23px",
    },
  }),
  xs: defineStyle({
    field: {
      fontSize: "24px",
      height: "70px",
      px: "25px",
    },
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      white_A700: {
        field: {
          bg: "white.A700",
          color: "indigo.900_79",
        },
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["white_A700"];
  }),
  outline: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      gray_300_02: {
        field: {
          borderColor: "gray.300_02",
          borderWidth: "1px",
          borderStyle: "solid",
          color: "gray.400",
        },
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["gray_300_02"];
  }),
};

const Input = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "outline",
    size: "xs",
  },
});
export default Input;
