import { Box, VStack, Heading, Text, Image } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import profileImg from "../static/images/me.PNG";
import CoffeeMug from "../static/images/animations/coffeeMug.png";
import codeImg from "../static/images/animations/laptop1.png";
import CoofeeMugTwo from "../static/images/animations/coffeeMug2.png";
import Paint from "../static/images/animations/paint1.png";
import PaintTwo from "../static/images/animations/paint2.png";
import CupWithCode from "../static/images/animations/paint4.png";

const MotionImage = motion(Image);

export default function Header() {
  //this will help us track scroll position
  const { scrollY } = useScroll();

  // Parallax transformations
  // CoffeeX and CoffeeY is for coffee mug two on left side
  const CoffeeX = useTransform(scrollY, [0, 500], [0, -200]); // moves left
  const CoffeeY = useTransform(scrollY, [0, 500], [0, 150]);  // moves down

  // CoffeeX and CoffeeY is for coffee mug two on left side
  const CodeCoffeeX = useTransform(scrollY, [0, 500], [0, -200]); // moves left
  const CodeCoffeeY = useTransform(scrollY, [0, 500], [0, 150]);  // moves down

  // codeX and codeY is for coffee mug on the right side
  const codeX = useTransform(scrollY, [0, 500], [0, 200]);  // moves right
  const codeY = useTransform(scrollY, [0, 500], [0, 150]); // moves up

  // laptopY is for laptop on the left side
  // codeX and codeY is for coffee mug on the right side
  const laptopX = useTransform(scrollY, [0, 500], [200, 0]);  // moves right
  const laptopY = useTransform(scrollY, [0, 500], [0, -100]); // moves up

  // paintX and paintY is for painting eisel on the right side
  const paintX = useTransform(scrollY, [0, 500], [0, 200]);  // moves right
  const paintY = useTransform(scrollY, [0, 500], [0, -100]); // moves up

  // paintX and paintY is for paint brush on the right
  const paintBrushX = useTransform(scrollY, [0, 500], [100, 200]);  // moves right
  const paintBrushY = useTransform(scrollY, [0, 500], [-100, -100]); // moves up

  return (
    <>
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
        pt={{ base: "0", md: "100px" }}
      >
        {/* Floating Parallax Elements */}
        {/* coffee mug on the left */}
        <MotionImage
          src={CoofeeMugTwo}
          alt="Paint Brush"
          position="absolute"
          top="59%"
          left="18%"
          w={{ base: "60px", md: "100px" }}
          style={{ x: CoffeeX, y: CoffeeY }}
        />
        {/* coffee cup on the right */}
        <MotionImage
          src={CoffeeMug}
          alt="Code Icon"
          position="absolute"
          top="55%"
          right="19%"
          w={{ base: "50px", md: "90px" }}
          style={{ x: codeX, y: codeY }}
        />

        {/* cup with coffee code on the left */}
        <MotionImage
          src={CupWithCode}
          alt="Code Icon"
          position="absolute"
          top="70%"
          left="29%"
          w={{ base: "50px", md: "90px" }}
          style={{ x: CodeCoffeeX, y: CodeCoffeeY }}
        />
        {/* paint brush */}
        <MotionImage
          src={PaintTwo}
          alt="Code Icon"
          position="absolute"
          top="86%"
          right="37%"
          w={{ base: "50px", md: "90px" }}
          style={{ x: paintBrushX, y: paintBrushY }}
        />

        <MotionImage
          src={Paint}
          alt="Code Icon"
          position="absolute"
          top="50%"
          right="29%"
          w={{ base: "50px", md: "90px" }}
          style={{ x: paintX, y: paintY }}
        />
        {/* [ink laptop on left */}
        <MotionImage
          src={codeImg}
          alt="Laptop"
          position="absolute"
          top="47%"
          left="12%"
          transform="translateX(-50%)"
          w={{ base: "80px", md: "150px" }}
          style={{ x: laptopX, y: laptopY }}
        />

        {/* Main Content */}
        <VStack spacing={{ base: 8, md: 12 }} textAlign="center" position="relative">
          {/* heading behind the avatar image */}
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
            whiteSpace="nowrap"
            opacity={0.5}
          >
            NIMRA SHAHZAD
          </Heading>
          {/* heading in front of the avatar image */}
          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "9xl" }}
            fontWeight="extrabold"
            position="absolute"
            top={{ base: "20%", md: "20%" }}
            left="50%"
            transform="translateX(-50%)"
            zIndex={5}
            whiteSpace="nowrap"
            opacity={0.9}
            sx={{
              WebkitTextStroke: "1px #eeeeeecd", // Border color and thickness
              WebkitTextFillColor: "transparent", // Makes the inside transparent
            }}
          >
            NIMRA SHAHZAD
          </Heading>

          <Box maxW={{ base: "200px", md: "350px", lg: "400px" }} w="100%" zIndex={1}>
            <Image src={profileImg} alt="Nimra Shahzad" borderRadius="md" objectFit="cover" />
          </Box>
        </VStack>

        
      </Box>

      <Box>
        <Box
            overflow="hidden"
            whiteSpace="nowrap"
            position="relative"
            w="100%"
            maxW={'980px'}
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
    </>
  );
}
