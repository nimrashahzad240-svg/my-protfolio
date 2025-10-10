import { Box, Heading, Button, VStack } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

const resumeUrl = require("../static/resume/resume.pdf");

export default function Resume() {
  return (
    <Box
      minH="100vh"
      bg="#f8f6f0"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
      py={12}
    >
      <VStack
        spacing={8}
        w="100%"
        maxW="3xl"
        p={{ base: 4, md: 10 }}
        borderRadius="2xl"
        boxShadow="13px 13px 41px #e0e0e0, -13px -13px 41px #ffffff"
        bg="white"
        align="center"
      >
        <Heading
          color="#3f7a70"
          fontWeight="bold"
          fontSize={{ base: "2xl", md: "3xl" }}
          letterSpacing="wide"
        >
          My Resume
        </Heading>
        <Box
          w="100%"
          h={{ base: "400px", md: "600px" }}
          borderRadius="lg"
          overflow="hidden"
          boxShadow="0 8px 32px 0 rgba(63, 122, 112, 0.13)"
          bg="#f8f6f0"
        >
          <embed
            src={resumeUrl}
            type="application/pdf"
            width="100%"
            height="100%"
            style={{ borderRadius: "12px" }}
          />
        </Box>
        <Button
          as="a"
          href={resumeUrl}
          download
          leftIcon={<DownloadIcon />}
          color="white"
          background="#3f7a70"
          borderRadius="30px"
          size="lg"
          _hover={{
            color: "#3f7a70",
            background: "white",
            border: "2px solid #3f7a70",
            transition: "all 0.2s",
          }}
        >
          Download Resume
        </Button>
      </VStack>
    </Box>
  );
}