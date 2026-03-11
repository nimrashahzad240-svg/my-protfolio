import {
  Box,
  Heading,
  Text,
  VStack,
  Divider,
  AspectRatio
} from "@chakra-ui/react";

export default function AlgorithmicSoundscape() {
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
            Algorithmic Soundscape Performance
          </Heading>

          <Text
            fontSize="lg"
            color="gray.600"
            fontStyle="italic"
          >
            Interactive / Algorithmic Sound Project – CS6042
          </Text>

          <Text mt={2} fontSize="md" color="gray.500">
            A rule-based sonic performance using environmental audio samples from Freesound.
          </Text>
        </Box>

        <Divider />

        {/* Video */}
        <VStack spacing={5} align="start" w="100%">
          <Heading size="md" color="#3f7a70">
            Performance Recording
          </Heading>

          <AspectRatio ratio={16 / 9} w="100%">
            <iframe
              src="https://www.youtube.com/embed/ZMcB8ljh_m8"
              title="Algorithmic Soundscape Performance"
              allowFullScreen
            />
          </AspectRatio>

          <Text fontSize="sm" color="gray.500">
            Screen recording of the live interactive performance.
          </Text>
        </VStack>

        <Divider />

        {/* Concept */}
        <VStack spacing={5} align="start">
          <Heading size="md" color="#3f7a70">
            Concept
          </Heading>

          <Text>
            This project explores how simple rules and human interaction can
            transform environmental recordings into a dynamic sonic landscape.
            Instead of composing music traditionally, the performance is
            guided by a set of algorithmic instructions that determine when
            and how sounds are triggered.
          </Text>

          <Text>
            Using samples sourced from the Freesound archive, the piece
            combines environmental recordings such as rain, mechanical
            sounds, and human activity to create a constantly evolving
            atmosphere shaped by chance and performer interaction.
          </Text>
        </VStack>

        <Divider />

        {/* Interaction System */}
        <VStack spacing={5} align="start">
          <Heading size="md" color="#3f7a70">
            Interaction & System
          </Heading>

          <Text>
            The performance was created using a keyboard-triggered sampler, Soundplant,
            where each key activates a different environmental sound.
            The interaction design focuses on live manipulation of
            multiple sound layers, allowing the performer to build
            and dissolve sound textures in real time.
          </Text>

          <Text>
            The keyboard acts as the primary interface, transforming
            physical gestures into sonic events and enabling a direct
            connection between performer and soundscape.
          </Text>
        </VStack>

        <Divider />

        {/* Rules */}
        <VStack spacing={5} align="start">
  <Heading size="md" color="#3f7a70">
    Performance Rules
  </Heading>

  <Text>
    The performance is based on a keyboard-driven interaction system
    where each key triggers a unique sound sample. The keyboard is
    treated as a simplified musical instrument, inspired by the layout
    and interaction of a piano.
  </Text>

  <Text>
    All number keys (1–0), alphabetical keys (A–Z), the space bar, and
    the enter key are mapped to individual sounds. Each key has a
    specific audio sample assigned to it.
  </Text>

  <Text>
    The behaviour of the system follows these rules:
  </Text>

  <Text>
    • Every key on the keyboard is associated with one sound sample.
    <br />
    • When a key is pressed, the corresponding sound begins playing.
    <br />
    • If another key is pressed while a sound is playing, the previous
    sound immediately stops.
    <br />
    • Only one sound can play at a time.
    <br />
    • The performer interacts with the system freely for the duration
    of the performance, creating a sequence of sonic events similar
    to playing notes on a piano.
  </Text>

  <Text>
    Although the sounds were randomly selected during the preparation
    stage, once assigned to keys they remain fixed. This creates a
    hybrid system where randomness influences the design of the
    instrument, but the performance itself remains interactive and
    expressive.
  </Text>
</VStack>
<Divider />

<VStack spacing={5} align="start">
  <Heading size="md" color="#3f7a70">
    Sound Sources
  </Heading>

  <Text>
    All audio samples used in this project were sourced from the
    Freesound archive. Instead of downloading individual sounds,
    complete sound packs were explored and used as a source library.
  </Text>

  <Text>
    Sounds were randomly selected from the following Freesound packs:
  </Text>

  <Text>
    • https://freesound.org/people/tarane468/packs/45259/
    <br />
    • https://freesound.org/people/Sadiquecat/packs/43099/
    <br />
    • https://freesound.org/people/TheSoundLibrary/packs/43784/
  </Text>

  <Text>
    These packs contain a wide variety of environmental and
    experimental sounds. By randomly selecting samples from
    these collections and assigning them to keyboard keys,
    the project transforms the computer keyboard into a
    playable sonic interface.
  </Text>
</VStack>
        <Divider />

        {/* Reflection */}
        <VStack spacing={5} align="start">
          <Heading size="md" color="#3f7a70">
            Reflection
          </Heading>

          <Text>
            Designing this project highlighted how algorithmic rules can
            shape artistic outcomes. Rather than controlling every sonic
            detail, the performer interacts with a system that introduces
            chance and emergent patterns.
          </Text>

          <Text>
            Freesound provided a diverse archive of environmental audio,
            making it possible to construct a layered sonic environment
            from everyday sounds. The project ultimately demonstrates
            how interactive systems can transform simple actions into
            complex auditory experiences.
          </Text>
        </VStack>

        <Divider />

        {/* Credits */}
        <VStack spacing={3} align="start">
          <Heading size="sm" color="#3f7a70">
            Project Credits
          </Heading>

          <Text>
            <strong>Module:</strong> Interactive Media Project / Workshop 2 (CS6042)
          </Text>

          <Text>
            <strong>Type:</strong> Individual Assignment
          </Text>
        </VStack>

<Divider />

{/* Field Recording Composition */}
<VStack spacing={5} align="start" w="100%">
  <Heading size="md" color="#3f7a70">
    Field Recording & Sound Composition
  </Heading>

  <Text>
    Alongside the interactive performance, I also created a short
    environmental sound composition using field recordings collected
    outdoors. The aim was to explore how natural sound environments
    can be captured, edited, and reshaped through digital tools.
  </Text>

  <Text>
    Several sounds were recorded directly from nature using the devices provided in the lab. These recordings included subtle environmental
    textures such as wind, movement of leaves, and ambient outdoor
    noise. The recordings were then edited and layered in Audacity,
    where I experimented with timing, volume balancing, and audio
    effects to create a cohesive one-minute soundscape.
  </Text>

  <Text>
    To enrich the rhythm and atmosphere of the piece, additional
    samples were sourced from the Freesound archive. These included
    percussive and atmospheric elements which helped introduce a
    subtle rhythmic structure within the natural ambience.
  </Text>

  <AspectRatio ratio={16 / 9} w="100%">
    <iframe
      src="https://www.youtube.com/embed/FL1rgh2yloA"
      title="Field Recording Soundscape"
      allowFullScreen
    />
  </AspectRatio>

  <Text fontSize="sm" color="gray.500">
    A one-minute sound composition created from field recordings and
    edited using Audacity.
  </Text>
</VStack>

<Divider />

{/* Sound Sources */}
<VStack spacing={4} align="start">
  <Heading size="md" color="#3f7a70">
    Sound Sources & Credits
  </Heading>

  <Text>
    Some additional audio elements used in the composition were sourced
    from the Freesound community sound archive:
  </Text>

  <Text fontSize="sm" color="gray.600">
    • https://freesound.org/people/liezen3/sounds/466605/  
    • https://freesound.org/people/miro154/sounds/108416/  
    • https://freesound.org/people/tim.kahn/sounds/60656/
  </Text>

  <Text>
    These samples were integrated with the field recordings to introduce
    rhythmic and textural variation. All sounds were edited, layered,
    and processed in Audacity to form the final composition.
  </Text>
</VStack>
      </VStack>
    </Box>
  );
}