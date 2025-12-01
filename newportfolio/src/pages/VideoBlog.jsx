import { Box, Heading, Text, VStack, Image } from "@chakra-ui/react";
import StoryboardJBL from "../static/images/studio-storyboardJBL.jpeg";
import StoryboardVideo from "../static/images/shoot-storyboard1.jpeg";


export default function VideoBlog() {
  return (
    <Box
      bg="#f8f6f0"
      w="100%"
      minH="100vh"
      py={12}
      px={6}
      display="flex"
      justifyContent="center"
    >
      <VStack maxW="900px" w="100%" spacing={10}>
        {/* TITLE */}
        <Heading fontSize={{ base: "3xl", md: "4xl" }} color="#3f7a70" pt={10}>
          Video Production – Final Assignment
        </Heading>

        {/* EMBED YOUTUBE */}
        <Box
          as="iframe"
          width="100%"
          height="450px"
          src="https://www.youtube.com/embed/fn9DfOfEUCQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        {/* REFLECTION SECTION */}
        <Heading fontSize="2xl" color="#3f7a70" mt={6}>
          Reflection
        </Heading>

        <VStack align="start" spacing={4}>
          <Text fontSize="md" color="gray.700" textAlign="justify">
            This JBL advertisement was honestly one of the most chaotic, overwhelming, surprising, and at the same time… magical projects I’ve ever worked on. It started as a “simple” assignment: create a short commercial. But of course, nothing in life is simple when you want to do it properly.
          </Text>

          <Text fontSize="md" color="gray.700" textAlign="justify">
            Our whole concept revolved around one idea:{" "}
            <Text as="span" fontWeight="bold">JBL’s sound doesn’t age.</Text> Sound travels through time. People change, fashion changes, technology changes - but music stays alive everywhere. So we decided to visually show that by making one girl (me) dance through different eras: the 1940s/60s, the 1990s, and the 2000+ modern world.
          </Text>

          <Text fontSize="md" color="gray.700" textAlign="justify">
            And I ended up being the actor, stylist, makeup artist, hair artist, outfit selector, and part of the production team.
          </Text>

          <Text fontSize="md" color="gray.700" textAlign="justify">
            I literally spent 4-5 hours PER LOOK perfecting makeup, hair, and accessories because if I'm doing an era, I want it to feel like that era. Thanks to the Youtube tutorials and Pinterest Inspirations for the looks. The 1940s required soft romantic curls, gentle makeup, a more classy “royal lady” vibe. The 1990s needed energy, color, rebellion. And the modern era was minimal, fresh, clean confidence.
          </Text>

          <Text fontSize="md" color="gray.700" textAlign="justify">
            We requested permission to shoot inside Plassey House at UL (which looks like a mini royal hotel). We even booked Dromroe Village Hall as a backup in case Plassey declined. Luckily, Plassey said yes and honestly, after that, the whole universe started cooperating.
          </Text>

          {/* SCENE BREAKDOWN */}
          <Heading fontSize="xl" color="#3f7a70" mt={6}>
            SCENE-BY-SCENE BREAKDOWN - Exactly as in our Storyboards
          </Heading>

          <Heading fontSize="lg" color="#3f7a70">
            Scene 1: 1940s / (Storyboard Scenes 1 - 6)
          </Heading>
          <Text fontSize="md" color="gray.700">
            Location: Plassey House (the elegant, royal-looking room) <br />
            Song: “Waltz in the Clouds” - Deanna Durbin <br />
            Mood: Soft, graceful, classical
          </Text>
          <Text fontSize="md" color="gray.700">
            This scene opens with me sitting in a vintage-looking 1940s setup holding an instrument. The camera movement is slow and gentle, matching the softness of the scene. As soon as I put on the JBL headphones, the dancing begins - slow, floaty, very “old Hollywood.” We shot this using the OSMO DJI Pocket 3, with LED panels and a 3-point lighting kit. For editing, we turned the whole scene black-and-white to really drive home that 1940s/60s vibe.
          </Text>
          <Text fontSize="md" color="gray.700">
            The moment I approach the huge royal mirror… that becomes our first transition. A portal to the next era.
          </Text>

          <Heading fontSize="lg" color="#3f7a70">
            Scene 2: The 1990s / (Storyboard 1: Scenes 7 - 10)
          </Heading>
          <Text fontSize="md" color="gray.700">
            Location: Plassey House staircase <br />
            Song: “Don’t Stop Me Now” - Queen <br />
            Mood: Fun, chaotic, energetic
          </Text>
          <Text fontSize="md" color="gray.700">
            This scene LITERALLY starts inside the mirror transition.
          </Text>
          <Text fontSize="md" color="gray.700">
            I enter with a tape recorder in my hand. The second I close it, the Queen beat drops and everything becomes chaotic in the best way. I danced up the stairs, spun around, went expressive and bold. We used warmer, nostalgic tones in editing to give it that subtle vintage 90s feel.
          </Text>
          <Text fontSize="md" color="gray.700">
            This scene ends at a glass door. As soon as it's half-opened - BOOM - we jump into the next era.
          </Text>

          <Heading fontSize="lg" color="#3f7a70">
            Scene 3: Modern Era / (Storyboard 1: Scenes 11)
          </Heading>
          <Text fontSize="md" color="gray.700">
            Location: UL’s commercial/shop-like area <br />
            Song: “High Hopes” - Panic! At The Disco <br />
            Mood: Bright, modern, confident
          </Text>
          <Text fontSize="md" color="gray.700">
            I walk out of the door already wearing the modern JBL headphones. Clean jump cut. Modern world. This one was the easiest to style since it’s basically “me being me in 2025.” The dancing is energetic but clean. The editing is sharp with no fancy vintage filters - just modern minimalism.
          </Text>
          <Text fontSize="md" color="gray.700">
            And then… the final spin transitions straight into:
          </Text>

          <Heading fontSize="lg" color="#3f7a70">
            Final Product Shot - (Storyboard 1: Scene 12 (close up spinning))
          </Heading>
          <Text fontSize="md" color="gray.700">
            To get the spinning JBL shot, we literally hung the headphones with a thread and manually spun them while capturing the close-up using the Pocket 3. The result looks far more cinematic than the reality of the behind-the-scenes chaos.
          </Text>

          <Heading fontSize="xl" color="#3f7a70" mt={6}>
            Behind the Scenes - aka the Chaos We Survived 💀
          </Heading>

          <Heading fontSize="lg" color="#3f7a70">
            Problem #1: Acting is actually hard.
          </Heading>
          <Text fontSize="md" color="gray.700">
            In class they told us:
            <ul>
              <li>Keep hand movements consistent</li>
              <li>Keep facial direction consistent</li>
              <li>Keep your positioning the same between takes</li>
            </ul>
            I tried. I swear I tried. But acting requires a mental discipline I did NOT expect. Much respect to actors now.
          </Text>

          <Heading fontSize="lg" color="#3f7a70">
            Problem #2: Time Pressure
          </Heading>
          <Text fontSize="md" color="gray.700">
            Lights booked for limited time. <br />
            Equipment and place booked for short slots. <br />
            Sunlight disappearing. <br />
            Scenes to shoot. <br />
            Makeup tiring my soul.
          </Text>
          <Text fontSize="md" color="gray.700">
            Chaos, but productive chaos.
          </Text>

            <Heading fontSize="lg" color="#3f7a70">
            Problem #3: Perfectionism & Team Effort
            </Heading>
            <Text fontSize="md" color="gray.700">
            All the group members were working hard and wanted the final product to look perfect. This led to many discussions on how to improve each scene, adjust choreography, lighting, and styling. It took patience, collaboration, and multiple iterations to reach the quality we were proud of.
            </Text>
          <Text fontSize="md" color="gray.700">
            Despite everything - the rush, the styling stress, the forgotten props, the frantic solutions, the transitions we had to figure out on the spot - everything came together beautifully. The locations were perfect. The music choice worked. The filters fit the eras. And the final ad honestly feels like a story.
          </Text>

          <Text fontSize="md" color="gray.700">
            This wasn’t just a project. <br />
            It was growth - creatively, mentally, technically. <br />
            It taught me to multitask, to adapt, to act, to style, and to solve problems at 200 km/hr. <br />
            It taught me what real production feels like.
          </Text>

          <Text fontSize="md" color="gray.700">
            And most importantly… <br />
            It proved that sound truly is timeless. <br />
            Just like JBL said - and like we showed.
          </Text>
        </VStack>

        {/* SONG REFERENCES */}
        <Heading fontSize="2xl" color="#3f7a70" mt={6}>
          Music Credits
        </Heading>

        <Text fontSize="md" color="gray.700">
          The following three tracks were used in the video:
        </Text>

        <Text fontSize="md" color="gray.700" textAlign="left" whiteSpace="pre-line">
{`
• Waltz in the Clouds – Deanna Durbin
• Don’t Stop Me Now – Queen
• High Hopes – Panic! At The Disco
`}
        </Text>

        {/* STORYBOARDS */}
        <Heading fontSize="2xl" color="#3f7a70" mt={6}>
          Storyboards
        </Heading>

        <Text fontSize="md" color="gray.700" mb={4}>
          Below are the two storyboard illustrations used during planning:
        </Text>

       
        <Image
          src={StoryboardVideo}
          alt="Storyboard 1"
          borderRadius="lg"
        />
         <Text fontSize="sm" color="gray.700" mb={4}>
          Storyboard 1 - The scenes for the entire video
        </Text>
          
        <Image
          src={StoryboardJBL}
          alt="Storyboard 2 - JBL"
          borderRadius="lg"
        />
        <Text fontSize="sm" color="gray.700" mb={10}>
          Storyboard 2 - The scenes that show the headphone's movements and lights
        </Text>
      </VStack>
    </Box>
  );
}
