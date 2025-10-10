import { Box, Heading, Text, SimpleGrid, Image, VStack } from "@chakra-ui/react";
import p1 from "../static/images/meraki/p1.JPG"
import p2 from "../static/images/meraki/p2.JPG"
import p3 from "../static/images/meraki/p3.jpg"
import p4 from "../static/images/meraki/p4.JPG"
import p5 from "../static/images/meraki/p5.jpg"
import p6 from "../static/images/meraki/p6.jpg"
import p7 from "../static/images/meraki/p7.jpeg"
import p8 from "../static/images/meraki/p10.JPG"
import p9 from "../static/images/meraki/p9.jpeg"
import meraki from "../static/images/meraki/meraki-cover.jpg"
import merakiAvatar from "../static/images/meraki/meraki-banner-1.JPEG"
// Example images, replace with your own
const paintings = [
  p1, p2, p3, p4, p5, p6, p7, p8, p9
];

export default function Meraki() {
  return (
    <>
    <Box minH="100vh">
        <Box
            position="absolute"
            top={0}
            left={0}
            w="100%"
            h="450px"
            backgroundImage={`url(${meraki})`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            filter="saturation(0.8)"
            zIndex={0}
            pointerEvents="none"
            alignContent="center"
            justifyContent="center"
        />

        <Box>
            {/* Text content on top - vstack is chakra tag that can be used to stack child items vertically. Hstack stacks horizontally */}
            <VStack
                spacing={6}
                mb={12}
                h="450px"
                position="relative"
                zIndex={1}
                justifyContent="center"
            >
                <Heading
                    fontWeight="700"
                    fontSize={{ base: "3xl", md: "5xl" }}
                    color="#ffffffff"
                    letterSpacing="wide"
                    textShadow="0 2px 16px rgba(0, 0, 0, 0.16)"
                >
                    Meraki by Nimra Shahzad
                </Heading>
                <Text
                    fontFamily="'Montserrat', sans-serif"
                    fontSize={{ base: "md", md: "xl" }}
                    color="#ffffffff"
                    maxW="2xl"
                    textAlign="center"
                    textShadow="0 1px 8px rgba(0,0,0,0.10)"
                >
                    Welcome to Meraki - a space where every brushstroke is a piece of my soul. Here, art is not just created, it is lived, felt, and shared. Each painting is a journey, a memory, and a story waiting to connect with you.
                </Text>
            </VStack>
            
        </Box>
        {/* Bio Section of Meraki */}
        <Box>
            <VStack display={"flex"} alignItems="center" justifyContent="center" height="400" spacing={4}>
                <Text
                fontFamily="'Montserrat', sans-serif"
                fontSize={{ base: "md", md: "xl" }}
                color="#3f7a70"
                maxW="2xl"
                textAlign="center"
                justifyContent={"center"}
                textShadow="0 1px 8px rgba(0,0,0,0.10)"
                >
                “Meraki” is a Greek word that means to do something with soul, creativity, or love, to put a piece of yourself into your work. For me, painting is more than a passion; it’s a reflection of my inner world, my dreams, and my experiences. Every canvas is a heartfelt expression, crafted with intention and care.
                </Text>
            </VStack>
            
        </Box>
        {/* Gallery */}
        <VStack>
            <Heading
                as="h2"
                size="lg"
                color="#3f7a70"
                letterSpacing="wider"
                fontFamily="'Montserrat', sans-serif"
                mb={2}
                textAlign="center"
                textShadow="0 2px 8px rgba(63, 122, 112, 0.08)"
            >
                Gallery
            </Heading>
            <Text
                as="h2"
                size="lg"
                color="#3f7a70"
                letterSpacing="wider"
                fontFamily="'Montserrat', sans-serif"
                mb={2}
                textAlign="center"
                textShadow="0 2px 8px rgba(63, 122, 112, 0.08)"
            >
                Explore my collection where each piece tells its own story, inspired by nature, emotion, and the beauty of everyday moments.
            </Text>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8} mx={{ base: "2rem", md: "5rem" }}>
                {paintings.map((src, i) => (
                <Box
                    key={i}
                    bg="rgba(255,255,255,0.18)"
                    // borderRadius="2xl"
                    boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.18)"
                    overflow="hidden"
                    _hover={{ transform: "scale(1.03)", transition: "0.3s" }}
                    transition="0.3s"
                >
                    <a href="https://www.instagram.com/meraki_by_nimrashahzad/" target="_blank">
                        <Image src={src} alt={`Meraki painting ${i + 1}`} w="100%" h="320px" objectFit="cover" />
                    </a>
                </Box>
                ))}
            </SimpleGrid>
        </VStack>
        {/* Artist in me story */}
        <VStack display={"flex"} alignItems="center" justifyContent="center" height="400" spacing={4}>
            <Heading
                as="h2"
                size="lg"
                color="#3f7a70"
                letterSpacing="wider"
                fontFamily="'Montserrat', sans-serif"
                mb={2}
                textAlign="center"
                textShadow="0 2px 8px rgba(63, 122, 112, 0.08)"
            >
                My Story as an Artist
            </Heading>
            <Text
                fontFamily="'Montserrat', sans-serif"
                fontSize={{ base: "md", md: "xl" }}
                color="#3f7a70"
                maxW="2xl"
                textAlign="center"
                textShadow="0 1px 8px rgba(0,0,0,0.10)"
            >
                My journey as an artist began with a simple desire to capture the world as I see it - full of color, light, and emotion. Over the years, art has become my sanctuary and my voice. Through every challenge and triumph, painting has helped me grow, heal, and connect with others. I hope my work inspires you to find beauty in your own story.
            </Text>
        </VStack>

        {/* painting banner image */}
        <Box

            w="100%"
            h="450px"
            backgroundImage={`url(${merakiAvatar})`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            filter="saturation(0.8)"
            pointerEvents="none"
            alignContent="center"
            justifyContent="center"
        />
        {/* Looking for a painting? */}
        <VStack display={"flex"} alignItems="center" justifyContent="center" height="400" spacing={4}>
            <Text
            fontFamily="'Montserrat', sans-serif"
            fontSize={{ base: "md", md: "xl" }}
            color="#3f7a70"
            maxW="2xl"
            textAlign="center"
            justifyContent={"center"}
            textShadow="0 1px 8px rgba(0,0,0,0.10)"
            >
                Interested in a custom painting or want to collaborate? I’d love to create something special for you. Reach out to me on Instagram <b>@meraki_by_nimrashahzad</b> or send me a message. <br />Let’s bring your vision to life!
            </Text>
        </VStack>
        
    </Box>
    </>
  );
}