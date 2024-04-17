const baseStyle = {
  color: "gray.600_01",
  fontFamily: "Public Sans",
};
const sizes = {
  "3xl": {
    fontSize: "50px",
    fontWeight: 900,
  },
  "2xl": {
    fontSize: "48px",
    fontWeight: 700,
  },
  xl: {
    fontSize: "36px",
    fontWeight: 700,
  },
  s: {
    fontSize: "16px",
    fontWeight: 700,
  },
  md: {
    fontSize: "18px",
    fontWeight: 700,
  },
  xs: {
    fontSize: "14px",
    fontWeight: 700,
  },
  lg: {
    fontSize: "24px",
    fontWeight: 700,
  },
};
const defaultProps = {
  size: "md",
};

const Heading = {
  baseStyle,
  sizes,
  defaultProps,
};
export default Heading;
