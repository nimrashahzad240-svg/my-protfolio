import {
  Box,
  VStack,
  Heading,
  Text,
  Image,
  Button,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { useState } from "react";

import img1 from "../static/images/assignment/headshot-1.jpg";
import img2 from "../static/images/assignment/book-storage.jpg";
import img3 from "../static/images/assignment/passion-4.jpg";

import img1settings from "../static/images/assignment/img1settings.jpeg";
import img2settings from "../static/images/assignment/img2settings.jpeg";
import img3settings from "../static/images/assignment/img3settings.jpeg";
// EXTRA IMAGES — replace with your actual files
import extra1 from "../static/images/assignment/extra-1.jpg";
import extra2 from "../static/images/assignment/extra-2.jpg";
import extra3 from "../static/images/assignment/extra-3.jpg";
import extra4 from "../static/images/assignment/extra-4.jpg";
import extra5 from "../static/images/assignment/extra-5.jpg";
import extra6 from "../static/images/assignment/extra-6.jpg";
import extra7 from "../static/images/assignment/extra-7.jpg";
import extra8 from "../static/images/assignment/extra-8.jpg";
import extra9 from "../static/images/assignment/extra-9.jpg";
import extra10 from "../static/images/assignment/extra-10.jpg";


export default function BlogMedia() {
  const images = [
    {
      id: 1,
      src: img1,
      title: "Professional Headshot Portrait",
      description: "A formal business-type headshot taken for Assignment 3.",
      editSettings:
        "This image was captured using a borrowed digital camera and edited using my phone's built-in tools. I Adjusted exposure (+10), Brilliance (+11), Highlights (+13), Shadows (-12), Contrast (+10), Brightness (+14), Black Point (+12), Saturation (+11), Vibrancy (+10), Warmth (+9), Tint (+8), Sharpness (+3), Defination (+10), Vignette (+19) - softened shadows, increased clarity, slight color grading to warm tones. I also used Cleanup tool to remove a few strands of hair. I wanted to keep the background in a cool tone to contrast with my skin tones.",
      longDescription:
        "This headshot was created with the intention of presenting a clean, professional, and approachable image suitable for business contexts. I kept the lighting soft and neutral to highlight natural skin tones while maintaining a minimal background for clarity and focus. My expression was deliberately calm and composed, professional without appearing overly stiff. The warm tones added during editing contribute to a friendly and inviting impression, which is often valued in formal or workplace imagery.",
    },
    {
      id: 2,
      src: img2,
      title: "Aesthetic Shot - Symmetry, Design, and Books",
      description:
        "An aesthetic image highlighting symmetry, structure, and the visual design of books.",
      editSettings:
        "Enhanced contrast, added vignette, increased texture, boosted saturation to highlight colours - Adjusted exposure (+14), Brilliance (+18), Highlights (+16), Shadows (-55), Contrast (+36), Brightness (+23), Black Point (+58), Saturation (+50), Vibrancy (+22), Warmth (+25), Tint (-3), Sharpness (+40), Defination (+23), Vignette (+21).",
      longDescription:
        "This aesthetic shot was created with attention to composition, symmetry, and colour harmony. This photo shows a part of the library that feels almost architectural, with perfect symmetry and clean lines. I’ve always loved books, but I also love they are arranged, and this space captures that beautifully. The corridor looks almost endless, like a reminder that information stretches far beyond what we can see. The repeating shapes and balanced structure create a calm, ordered atmosphere. The narrow track in the centre pulls the eye forward, hinting at movement, curiosity, and the idea that every book leads to something new. Standing there felt like being inside the spine of a giant book, surrounded by thousands of stories waiting to be discovered.",
    },
    {
      id: 3,
      src: img3,
      title: "Passion Image - Human Presence as design contrast",
      description:
        "Exploring contrast between human expression and sculptural form.",
      editSettings:
        "This image was captured and edited using my phone's adjustment tools. I Adjusted depth to (f/4.4)), exposure (-17), Brilliance (+36), Highlights (+29), Shadows (-10), Contrast (+6), Brightness (+4), Black Point (no changes), Saturation (+44), Vibrancy (+47), Warmth (+21), Tint (+18), Sharpness (+7), Defination (+16), Vignette (+34)",
      longDescription:
        "In this composition, I wanted to explore the thin line between designed forms and living presence. I positioned myself between the sculptures and kept my expression serious as I looked directly into the camera, creating a contrast between my stillness and the sculptures’ permanently fixed expressions. I chose this angle because it reduces the physical distance between me and the statues, unlike the front-facing view, which placed them too far behind me and weakened the comparison I wanted to create. I used softer tones so the focus stays on me while still allowing the sculptures to hold equal visual weight in the frame. I also softened the dark circles under my eyes, not to hide anything, but to bring a bit more life into my expression, especially beside objects that cannot change or respond. I’ve always admired how sculptors can create forms that appear emotional, powerful, and almost alive, the wrinkles, the eyes, the expressions, yet remain completely static. That tension between a crafted form and a living human being is what I wanted to capture. I’m fascinated by the idea that art can imitate life, but can never fully become it.",
    },
  ];

  // ---------------- EXTRA GRID IMAGES ----------------
  const extraImages = [
    { id: 1, src: extra1, title: "Extra Image 1" },
    { id: 2, src: extra2, title: "Extra Image 2" },
    { id: 3, src: extra3, title: "Extra Image 3" },
    { id: 4, src: extra4, title: "Extra Image 4" },
     { id: 5, src: extra5, title: "Extra Image 5" },
    { id: 6, src: extra6, title: "Extra Image 6" },
    { id: 7, src: extra7, title: "Extra Image 5" },
    { id: 8, src: extra8, title: "Extra Image 6" },
    { id: 9, src: extra9, title: "Extra Image 9" },
        { id: 10, src: extra10, title: "Extra Image 10" },
        
  ];

  const [selected, setSelected] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openImage = (img) => {
    setSelected(img);
    onOpen();
  };

  return (
    <Box bg="#f8f6f0" minH="100vh" py={12} px={6}>
      <VStack spacing={10} maxW="860px" mx="auto">
        <Heading
          mt={{ base: "30px", md: "50px" }}
          fontSize={{ base: "3xl", md: "5xl" }}
          color="#3f7a70"
          textTransform="uppercase"
          letterSpacing="widest"
        >
          Interactive Media – Assignment 3
        </Heading>

        {images.map((img) => (
          <Box
            key={img.id}
            bg="white"
            p={6}
            borderRadius="lg"
            w="100%"
            boxShadow="md"
          >
            <Heading fontSize="2xl" color="#3f7a70">
              {img.title}
            </Heading>

            <Image
              src={img.src}
              alt={img.title}
              mt={4}
              borderRadius="md"
              objectFit="cover"
            />

            <Text mt={3} color="gray.700" fontWeight="medium">
              {img.description}
            </Text>

            <Text mt={4} fontSize="sm" color="gray.600">
              <strong>Editing Settings:</strong> {img.editSettings}
            </Text>
            <Image
              src={
                img.id === 1
                  ? img1settings
                  : img.id === 2
                  ? img2settings
                  : img.id === 3
                  ? img3settings
                  : null
              }
              alt={`Editing settings for ${img.title}`}
              mt={4}
              borderRadius="md"
              objectFit="contain"
              w="100%"
              boxShadow="sm"
            />
            <Text mt={3} color="gray.600" lineHeight="1.7">
              {img.longDescription}
            </Text>

            <Button
              as="a"
              href={img.src}
              download
              mt={5}
              bg="#3f7a70"
              color="white"
              _hover={{ bg: "#2e5c55" }}
            >
              Download Image
            </Button>
          </Box>
        ))}

        {/* -------------------------------------------------------- */}
        {/* ----------- NEW EXTRA GRID BELOW ORIGINAL CONTENT ------- */}
        {/* -------------------------------------------------------- */}

        <Heading
          mt={10}
          mb={4}
          fontSize="3xl"
          color="#3f7a70"
          textAlign="center"
          letterSpacing="widest"
        >
          Additional Images
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="100%">
          {extraImages.map((img) => (
            <Box
              key={img.id}
              bg="white"
              p={4}
              borderRadius="lg"
              boxShadow="md"
              cursor="pointer"
              _hover={{ transform: "scale(1.03)", transition: "0.3s" }}
              onClick={() => openImage(img)}
            >
              <Image
                src={img.src}
                alt={img.title}
                w="100%"
                h="260px"
                objectFit="cover"
                borderRadius="md"
              />
              <Text mt={3} fontWeight="bold" color="#3f7a70" textAlign="center">
                {/* {img.title} */}
              </Text>
            </Box>
          ))}
        </SimpleGrid>

        {/* MODAL */}
        <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
          <ModalOverlay />
          <ModalContent bg="#000000dd" borderRadius="md" p={4}>
            <ModalCloseButton color="white" />
            <ModalBody>
              {selected && (
                <>
                  <Image
                    src={selected.src}
                    alt={selected.title}
                    w="100%"
                    borderRadius="md"
                  />

                  <Button
                    as="a"
                    href={selected.src}
                    download
                    mt={4}
                    w="100%"
                    bg="#3f7a70"
                    color="white"
                    _hover={{ bg: "#2e5c55" }}
                  >
                    Download Image
                  </Button>
                </>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      </VStack>
    </Box>
  );
}
