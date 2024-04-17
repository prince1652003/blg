import { Text, Heading, Button, Input, Textarea } from "./components";
import { colors, shadows, fonts } from "./foundations";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors,
  shadows,
  fonts,
  components: { Text, Heading, Button, Input, Textarea },
});
export default theme;
