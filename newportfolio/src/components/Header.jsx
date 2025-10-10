import { Box, VStack, Heading, Text, Image } from "@chakra-ui/react"
import profileImg from "../static/images/me.PNG"

export default function Header() {
  return (
    <Box
      as="header"
      bg="#f8f6f0"
      w="100%"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={{ base: 4, md: 12 }}
      position="relative"
      overflow="hidden"
    >
      <VStack spacing={{ base: 8, md: 12 }} textAlign="center" position="relative">
        {/* Tagline */}
        <Text
          fontSize={{ base: "sm", md: "lg" }}
          color="#3f7a70"
          textTransform="uppercase"
          fontWeight="semibold"
          letterSpacing="widest"
          zIndex={2}
        >
          Design &nbsp; Paint &nbsp; Escape &nbsp; Embrace &nbsp; Code &nbsp; Discover &nbsp; Yourself
        </Text>

        {/* Big background name for Desktop*/}
        <Heading
          as="h1"
          fontSize={{ base: "4xl", md: "9xl" }}
          fontWeight="extrabold"
          color="#3f7a70"
          position="absolute"
          top={{ base: "20%", md: "20%" }}
          left="50%"
          transform="translateX(-50%)"
          zIndex={0}
          whiteSpace={{ base: "normal", md: "nowrap" }}
          textAlign="center"
          opacity={0.15} // subtle behind image
        >
          NIMRA SHAHZAD
        </Heading>

        {/* heading only for mobile */}
        <Heading
          as="h1"
          display={{ base: "block", md: "none" }}
          fontSize={{ base: "4xl", md: "9xl" }}
          fontWeight="extrabold"
          color="#3f7a70"
          position="absolute"
          top={{ base: "20%", md: "20%" }}
          left="50%"
          transform="translateX(-50%)"
          zIndex={0}
          whiteSpace={{ base: "normal", md: "nowrap" }}
          textAlign="center"
          
        >
          NIMRA <br />SHAHZAD
        </Heading>

        {/* Profile Image */}
        <Box
          maxW={{ base: "200px", md: "350px", lg: "400px" }}
          w="100%"
          zIndex={1}
        >
          <Image src={profileImg} alt="Nimra Shahzad" borderRadius="md" objectFit="cover" />
        </Box>
      </VStack>
    </Box>
  )
}
