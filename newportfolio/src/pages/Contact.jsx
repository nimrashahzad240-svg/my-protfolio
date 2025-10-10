import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // This will appear after user send a message. it's not working right now. After the Backend is done, it will work.
    setTimeout(() => {
      setIsSending(false);
      setEmail("");
      setMessage("");
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    }, 1200);
  };

  return (
    <>
    <VStack pt={12} mt={4} background={"#f8f6f0"} justifyContent={"center"} alignItems={"center"} height={'200px'}> 
        <Box id="contact">
        <Heading size="lg" color="#3f7a70" mb={2}>Let’s build something</Heading>
        <Text color="#3f7a70">Email: nimra.shahzad96@gmail.com</Text>
      </Box>
    </VStack>
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="#f8f6f0"
      px={4}
      pb={12}
    >
      <Box
        bg="white"
        p={{ base: 6, md: 10 }}
        borderRadius="2xl"
        boxShadow="0 4px 24px rgba(63, 122, 112, 0.13)"
        maxW="lg"
        w="100%"
      >
        <VStack spacing={6} align="stretch">
          <Heading
            textAlign="center"
            color="#3f7a70"
            fontWeight="bold"
            fontSize={{ base: "2xl", md: "3xl" }}
            letterSpacing="wide"
          >
            Contact Me
          </Heading>
          <Text textAlign="center" color="gray.600" fontSize="md">
            Have a question, commission, or just want to say hi? Send me a message!
          </Text>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="stretch">
              <FormControl isRequired>
                <FormLabel color="#3f7a70">Your Email</FormLabel>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  focusBorderColor="#3f7a70"
                  bg="#f8f6f0"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel color="#3f7a70">Message</FormLabel>
                <Textarea
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  focusBorderColor="#3f7a70"
                  bg="#f8f6f0"
                />
              </FormControl>
              <Button
                type="submit"
                color="white"
                background="#3f7a70"
                borderRadius="30px"
                size="lg"
                isLoading={isSending}
                _hover={{
                  color: "#3f7a70",
                  background: "white",
                  border: "2px solid #3f7a70",
                  transition: "all 0.2s",
                }}
                mt={2}
              >
                Send Message
              </Button>
            </VStack>
          </form>
        </VStack>
      </Box>
    </Box>
    </>
  );
}