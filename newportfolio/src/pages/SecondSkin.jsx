import {
  Box,
  Heading,
  Text,
  VStack,
  Divider,
  Image
} from "@chakra-ui/react";
import Hugging from "../static/images/hugging-the-dress.png";
import Dress from "../static/images/dress.jpg";

export default function SecondSkin() {
  return (
    <Box bg="#f8f6f0" minH="100vh" py={{ base: 10, md: 20 }} px={{ base: 4, md: 12 }}>
      <VStack spacing={10} maxW="900px" mx="auto" align="start">

        {/* Title */}
        <Box>
          <Heading
            fontSize={{ base: "4xl", md: "6xl" }}
            color="#3f7a70"
            mb={4}
          >
            Second Skin
          </Heading>

          <Text
            fontSize="lg"
            color="gray.600"
            fontStyle="italic"
          >
            Interactive Art Installation - iMedia Production  (CS6042)
          </Text>

          <Text
            mt={2}
            fontSize="md"
            color="gray.500"
          >
            “What I do and what I touch has an impact on the environment.”
          </Text>
        </Box>

        <Image
          src={Hugging}
          alt="Hugging the Dress    "
          borderRadius="lg"
        />
        <Divider />


        {/* Introduction */}
        <VStack spacing={5} align="start">
          <Heading size="md" color="#3f7a70">
            Introduction
          </Heading>

          <Text>
            Second Skin is an interactive art installation that explores how emotions,
            touch, and presence move between people, even when no words are exchanged.
            The project began with a simple but unsettling question:
          </Text>

          <Text fontStyle="italic">
            If we can affect someone emotionally without speaking to them, how responsible
            are we for that impact?
          </Text>

          <Text>
            This question shaped every design decision that followed from the physical
            form of the dresses to the technology used, and ultimately to the academic
            writing that supports the work.
          </Text>
        </VStack>

        <Divider />

        {/* Concept */}
        <VStack spacing={5} align="start">
          <Heading size="md" color="#3f7a70">
            Why This Concept
          </Heading>

          <Text>
            In public spaces, emotions are often hidden, muted, or ignored. We constantly
            share environments with strangers, yet rarely acknowledge how our internal
            states or small actions affect others.
          </Text>

          <Text>
            Second Skin was designed as an experience rather than a product, one that
            slows people down and makes invisible emotional exchange visible. It encourages
            empathy without forcing conversation or explanation.
          </Text>
        </VStack>

        <Divider />

        {/* Clothing as Interface */}
        <VStack spacing={5} align="start">
          <Heading size="md" color="#3f7a70">
            Clothing as a Second Skin
          </Heading>

          <Text>
            Clothing is usually decorative or protective. In this project, it becomes a
            responsive emotional interface.
          </Text>

          <Text>
            The installation consists of two dresses constructed from recycled plastic.
            One dress is worn by a human participant, while the other is displayed on a
            mannequin within the same space. The dresses are digitally connected, but the
            interaction between them feels intimate and bodily.
          </Text>
        </VStack>

        <Image
          src={Dress}
          alt="Storyboard 1"
          borderRadius="lg"
        />
        <Divider />

        {/* Interaction */}
        <VStack spacing={5} align="start">
          <Heading size="md" color="#3f7a70">
            Interaction & Technology
          </Heading>

          <Text>
            The human-worn dress integrates biosensors that detect physiological signals
            associated with emotional arousal, such as heart rate variability and galvanic
            skin response. These signals are interpreted and translated into emotional states.
          </Text>

          <Text>
            Emotional data is transmitted via Bluetooth Low Energy to the mannequin’s dress,
            where LEDs illuminate in different colours. Cooler tones represent calmer or
            lower-intensity emotions, while warmer tones indicate heightened emotional states.
          </Text>

          <Text>
            Visitors can also touch the mannequin’s dress. Embedded pressure sensors detect
            where and how firmly the dress is touched. This data is sent back to the
            human-worn dress, where corresponding areas illuminate in warm golden light —
            allowing the wearer to feel presence without seeing the person.
          </Text>
        </VStack>

        <Divider />

        {/* Sustainability */}
        <VStack spacing={5} align="start">
          <Heading size="md" color="#3f7a70">
            Sustainability & Emotional Responsibility
          </Heading>

          <Text>
            The use of recycled plastic aligns the project with Sustainable Development Goal
            12: Responsible Consumption and Production. However, sustainability in Second
            Skin extends beyond material reuse.
          </Text>

          <Text>
            The installation highlights how actions, emotional or physical, leave traces
            on both people and environments. Just as waste impacts ecosystems, emotional
            interactions impact mental well-being.
          </Text>
        </VStack>

        <Divider />

        {/* Reflection */}
        <VStack spacing={5} align="start">
          <Heading size="md" color="#3f7a70">
            Reflection
          </Heading>

          <Text>
            Second Skin is not a solution-driven project. It does not instruct participants
            how to behave. Instead, it creates a pause, a moment of awareness where people
            recognise that emotions travel, touch carries meaning, and presence has
            consequences.
          </Text>

          <Text>
            By translating invisible interaction into light, the installation makes empathy
            tangible and responsibility unavoidable.
          </Text>
        </VStack>

        <Divider />

        {/* Credits */}
        <VStack spacing={3} align="start">
          <Heading size="sm" color="#3f7a70">
            Project Credits
          </Heading>

          <Text>
            <strong>Module:</strong> iMedia Production 2 (CS6042)
          </Text>
          <Text>
            <strong>Team:</strong> Phuc Thu Ha Nguyen · Nimra Shahzad · Ebi-Yaa Kwaw
          </Text>
        </VStack>

      </VStack>
    </Box>
  );
}
