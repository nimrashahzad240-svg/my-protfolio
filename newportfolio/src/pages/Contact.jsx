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
import emailjs from "emailjs-com";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const toast = useToast();

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_9a0pfvj", // this is service ID from emailjs
        "template_t1mqgep", // this is template ID from emailjs
        {
          email: email, // user's email
          name: name,   // user's name will appear as 'name' in template
          title: message, // message will appear as 'title' in template
        },
        "x5n58P-wU3dg9SAsR" // this is Public key from emailjs
      )
      .then(
        (result) => {
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
        },
        (error) => {
          setIsSending(false);
          toast({
            title: "Something went wrong",
            description: "Unable to send message. Try again later.",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
        }
      );
  };


  return (
    <>
    <VStack pt={12} mt={4} background={"#f8f6f0"} justifyContent={"center"} alignItems={"center"} height={'200px'}> 
        <Box id="contact">
        <Heading size="lg" color="#3f7a70" mb={2}>Let’s build something</Heading>
        <Text color="#3f7a70">Email: nimra.shahzad240@gmail.com</Text>
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
                <FormLabel color="#1f3d38ff">Your Email</FormLabel>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  color="#1f3d38ff"
                  onChange={(e) => setEmail(e.target.value)}
                  _placeholder={{ color: '#1f3d38ff', fontStyle: 'italic' }}
                  focusBorderColor="#3f7a70"
                  bg="#ffffffff"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel color="#1f3d38ff">Message</FormLabel>
                <Textarea
                  placeholder="Type your message here..."
                  value={message}
                  color="#1f3d38ff"
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  focusBorderColor="#3f7a70"
                  _placeholder={{ color: '#1f3d38ff', fontStyle: 'italic' }}
                  bg="#ffffffff"
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