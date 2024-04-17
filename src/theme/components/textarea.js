import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({});

const sizes = {
  xs: defineStyle({
    h: "200px",
    fontSize: "24px",
    p: "25px",
  }),
};

const variants = {
  tarOutlineGray30002: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      gray_300_02: {
        borderColor: "gray.300_02",
        borderWidth: "1px",
        borderStyle: "solid",
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["gray_300_02"];
  }),
};

const TextArea = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "tarOutlineGray30002",
    size: "xs",
  },
});
export default TextArea;
