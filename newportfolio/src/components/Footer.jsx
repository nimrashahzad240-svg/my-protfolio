import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box 
      background="#3f7a70" 
      color="white" 
      textAlign="center"
      w="100%"
      position="relative"
      bottom="0"
    >
      <Text color={"white"} mt="150px" py={3}>
        2025 © Nimra Shahzad
      </Text>
    </Box>
  );
}
