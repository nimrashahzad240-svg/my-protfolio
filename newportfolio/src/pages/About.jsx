import { useState, useEffect } from 'react'
import { Box, Heading, Text, Button, Stack, Image } from '@chakra-ui/react'
import profileImg from "../static/images/4.png";
import { Link as RouterLink } from "react-router-dom";

const LandingPage = () => {
  const [scrolling, setScrolling] = useState(false)

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Box>
      {/* Main content */}
      <Box
        mt={{ base: "80px", md: "100px" }} // smaller margin on mobile
        textAlign="center"
        p={{ base: 4, md: 8 }} // responsive padding
        bg="#f8f6f0"
        color="black"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Stack spacing={{ base: 3, md: 4 }}>
          <Heading 
            fontSize={{ base: "3xl", md: "6xl" }} // responsive font size
            fontWeight="bold" 
            letterSpacing="-1px"
          >
            Webdesigner & Developer & Artist 
          </Heading>
          <Text 
            fontSize={{ base: "md", md: "xl" }} // responsive text
            color="gray.600" 
            fontWeight="light"
            lineHeight={{ base: "6", md: "8" }} // better spacing
          >
            My name is Nimra and I am a front end software developer and an artist. <br />
            I love taking photos, creating candles and DIYs. I also love coding and building pretty websites.
          </Text>

          <Stack 
            direction={{ base: "column", md: "row" }} // stack vertically on mobile
            spacing={{ base: 3, md: 4 }}
            justify="center" 
            mt={{ base: 4, md: 4 }}
            width={{ base: "100%", md: "auto" }}
          >
            <Button
              variant="solid"
              size="md"
              color="white"
              width={{ base: "100%", md: "auto" }}
              background="#3f7a70"
              borderRadius="30px"
              _hover={{
                color: "#3f7a70",
                background: "white",
                boxShadow: "0 4px 12px rgba(63, 122, 112, 0.56)",
                transition: "all 0.2s"
              }}
              as={RouterLink}
              to="/contact"
            >
              Need a front-end developer?
            </Button>

            <Button
              variant="solid"
              size="md"
              color="white"
              width={{ base: "100%", md: "auto" }}
              background="#3f7a70"
              borderRadius="30px"
              _hover={{
                color: "#3f7a70",
                background: "white",
                boxShadow: "0 4px 12px rgba(63, 122, 112, 0.56)",
                transition: "all 0.2s"
              }}
              as={RouterLink}
              to="/contact"
            >
              Need a designer?
            </Button>

            <Button
              variant="solid"
              size="md"
              color="white"
              width={{ base: "100%", md: "auto" }}
              background="#3f7a70"
              borderRadius="30px"
              _hover={{
                color: "#3f7a70",
                background: "white",
                boxShadow: "0 4px 12px rgba(63, 122, 112, 0.56)",
                transition: "all 0.2s"
              }}
              as={RouterLink}
              to="/meraki"
            >
              Need an artist?
            </Button>

            <Button
              variant="solid"
              size="md"
              color="white"
              width={{ base: "100%", md: "auto" }}
              background="#3f7a70"
              borderRadius="30px"
              _hover={{
                color: "#3f7a70",
                background: "white",
                boxShadow: "0 4px 12px rgba(63, 122, 112, 0.56)",
                transition: "all 0.2s"
              }}
              as={RouterLink}
              to="/contact"
            >
              Got a project? Let's work together!
            </Button>
          </Stack>
        </Stack>
      </Box>

      {/* Placeholder for Image */}
      <Box mt={12} display="flex" justifyContent="center">
        {/* <Image src={profileImg} alt="Nimra" maxWidth={{ base: "200px", md: "300px" }} /> */}
      </Box>

      <Box
            overflow="hidden"
            whiteSpace="nowrap"
            position="relative"
            w="100%"
            display="flex"
              justifyContent="center"
          >
            <Text
              display = {{ base: "none", md: "inline-block"}}
              as="span"
              fontSize={{ base: "sm", md: "lg" }}
              color="#3f7a70"
              textTransform="uppercase"
              fontWeight="semibold"
              letterSpacing="widest"
              sx={{
                animation: "scroll 30s linear infinite", //The text moves smoothly from right to left over 30 seconds and loops forever.
                "@keyframes scroll": {
                  "0%": { transform: "translateX(0)" }, 
                  "100%": { transform: "translateX(-50%)" }, // Only half because we duplicate content The keyframe animation moves the 
                  // text by -50% of its width because the content is duplicated to make the loop seamless
                },
              }}
            >
              Design . Paint . Escape . Embrace . Code . Discover . Yourself . Dream . Create . Wander . Build . Heal . Inspire . Transform . Express . Explore . Evolve . Invent . Flow . Imagine . Breathe . Become &nbsp;&nbsp;
              Design . Paint . Escape . Embrace . Code . Discover . Yourself . Dream . Create . Wander . Build . Heal . Inspire . Transform . Express . Explore . Evolve . Invent . Flow . Imagine . Breathe . Become
            </Text>
          </Box>
    </Box>
  )
}

export default LandingPage
