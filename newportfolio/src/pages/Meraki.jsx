import { useState } from "react";
import { Box, Heading, Text, SimpleGrid, Image, VStack, IconButton, HStack, Fade, Tooltip, Link } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
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
import { useSelector, useDispatch } from "react-redux"
import { toggleLike } from '../redux/likeSlice'
import { FaInstagram } from "react-icons/fa"

export default function Meraki() {

  const paintings = [p1, p2, p3, p4, p5, p6, p7, p8, p9]; //to save the array of paintings
  const dispatch = useDispatch();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Replace with your real user name
  const currentUser = "You";

  const handleToggle = (index) => {  // this function will handle the like toggles of the paintings by keeping their index and dispatching the action
    const id = `p${index + 1}`;
    dispatch(toggleLike({ id, userName: currentUser }));
  };

  // a state to get likes info from redux store
  const likesState = useSelector((state) =>
    state.likes?.paintings ?? state.like?.paintings ?? {}
  );

  // Count how many paintings the current user has liked
  const likedCount = Object.values(likesState || {}).filter(painting =>
    painting.likers.includes(currentUser)
  ).length;


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
          <VStack spacing={6} mt={8}>

            <Heading as="h2" size="lg" color="#3f7a70">Gallery</Heading>
            <Text color="#3f7a70" textAlign="center">Explore my collection...</Text>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8} mx={{ base: "2rem", md: "5rem" }}>
              {paintings.map((src, i) => {
                const id = `p${i + 1}`;
                const paintingState = likesState[id] || { liked: false, count: 0, likers: [] };

                return (
                  <Box
                    key={id}
                    position="relative"
                    bg="rgba(255,255,255,0.06)"
                    boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.10)"
                    overflow="hidden"
                    borderRadius="md"
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    _hover={{ transform: "scale(1.02)" }}
                    transition="transform 0.2s"
                  >
                    {/* real image */}
                    <Image src={src} alt={`Meraki painting ${i + 1}`} w="100%" h="320px" objectFit="cover" />

                    {/* overlay (appears on hover) */}
                    {hoveredIndex === i && (
                      <Box
                        position="absolute"
                        top={0}
                        left={0}
                        w="100%"
                        h="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        background="rgba(0, 0, 0, 0.6)"
                        color="white"
                        flexDirection="column"
                        gap={3}
                        p={4}
                      >
                        <HStack spacing={3}>
                          <IconButton
                            icon={<FaHeart />}
                            aria-label="Like"
                            size="lg"
                            variant="ghost"
                            color={paintingState.liked ? "red.300" : "whiteAlpha.800"}
                            onClick={() => handleToggle(i)}
                            _hover={{ transform: "scale(1.08)" }}
                          />
                          <Text color={"white"} fontWeight="semibold">{paintingState.count}</Text>
                        </HStack>

                        {/* likers list - show avatars or names */}
                        <HStack spacing={2} mt={2} wrap="wrap" justifyContent="center">
                          {paintingState.likers.length === 0 ? (
                            <Text fontSize="sm" color="whiteAlpha.800">No likes yet</Text>
                          ) : (
                            paintingState.likers.map((name, idx) => (
                              // small pill or avatar — adjust styling as you like
                              <Tooltip key={name + idx} label={name} openDelay={250}>
                                <Box
                                  px={2}
                                  py={1}
                                  bg="blackAlpha.400"
                                  borderRadius="full"
                                  fontSize="sm"
                                  fontWeight="medium"
                                >
                                  {name}
                                </Box>
                              </Tooltip>
                            ))
                          )}
                        </HStack>

                        {/* Optional: link to Instagram or open full view */}
                        <HStack mt={3} spacing={2}>
                          <FaInstagram />
                          <Link 
                            href="https://www.instagram.com/meraki_by_nimrashahzad/" 
                            isExternal 
                            fontSize="xs" 
                            color="whiteAlpha.700"
                            _hover={{ textDecoration: "underline", color: "white" }}
                          >
                            Open on Instagram
                          </Link>
                        </HStack>
                      </Box>
                    )}
                  </Box>
                );
              })}
            </SimpleGrid>
            {likedCount > 0 && (
              <Text
                mt={6}
                fontSize={{ base: "md", md: "xl" }}
                color="#3f7a70"
                fontWeight="semibold"
                textAlign="center"
                textShadow="0 1px 4px rgba(0,0,0,0.1)"
              >
                🎨 High five! You've given {likedCount} {likedCount === 1 ? "painting" : "paintings"} a heart! Your art radar is on point! 💖
              </Text>
            )}

        </VStack>

        {/* Artist in Me story */}
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