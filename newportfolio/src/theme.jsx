import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  layerStyles: {
    glass: {
      bg: "rgba(255, 255, 255, 0.2)",
      borderRadius: "16px",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      backdropFilter: "blur(5px)",
      WebkitBackdropFilter: "blur(5px)",
    },
    neumorph: {
      bg: "#f0f0f0",
      borderRadius: "16px",
      boxShadow: "13px 13px 41px #e0e0e0, -13px -13px 41px #ffffff",
    },
  },
});

export default theme;