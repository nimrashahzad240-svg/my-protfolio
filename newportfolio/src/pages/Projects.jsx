import { useState, useEffect } from 'react'
import { Box, Heading, Text, Stack, Badge, SimpleGrid, border, List, ListIcon, ListItem } from '@chakra-ui/react'
import { MinusIcon } from '@chakra-ui/icons'

const projects = [
  {
    title: "Rent A Center",
    desc: [
      "Core team member migrating platform to headless commerce with React.js & PWA Kit",
      "Built a flexible, composable front-end architecture to streamline content management",
      "Developed dynamic, interactive features for mobile & desktop experiences",
      "Balanced deliverables while completing Salesforce AI Associate Certification"
    ],
    tags: ["React.js", "PWA Kit", "Headless Commerce", "Royal Cyber"],
    impact: "Enhanced scalability and performance for a major US retailer.",
    date: "Jan 2025 - Sept 2025",
  },
  {
    title: "Deciem - Salesforce Commerce Cloud & Salesforce Marketing Cloud",
    desc: [
      "Created responsive, cross-client compatible email templates in SFMC",
      "Resolved UI bugs & ensured pixel-perfect Figma implementation",
      "Performed QA across devices and optimized for Outlook compatibility"
    ],
    tags: ["SFMC", "React.js", "PWA kits", "Headless commerce", "Composable architecture", "Amplience", "Contentful"],
    impact: "Improved campaign engagement and code reusability.",
    date: "Aug 2024 - Dec 2024",
  },
  {
    title: "Indigo Canada - Salesforce Commerce Cloud & Accessibility",
    desc: [
      "Collaborated with design teams to deliver efficient, accessible UI",
      "Addressed accessibility (WCAG) & cross-browser compatibility issues",
      "Optimized performance within SFRA framework"
    ],
    tags: ["SFRA", "HTML5", "CSS/CSS+", "SCSS/SASS", "Bootstrap", "Ismls", "jQuery", "JavaScript"],
    impact: "Boosted inclusivity and user experience across platforms.",
    date: "Oct 2022 - Jun 2023"
  },
  {
    title: "ShopLC - Salesforce Commerce Cloud",
    desc: [
      "Integrated responsive UI into Demandware for web & mobile",
      "Resolved UI tickets ensuring cross-browser harmony",
      "Delivered layouts optimized for scalability"
    ],
    tags: ["HTML5", "CSS3", "SFCC", "Bootstrap", "Ismls", "jQuery", "JavaScript", "Page Designer"],
    impact: "Delivered layouts that exceeded client expectations.",
    date: "May 2022 - Oct 2022"
  },
  {
    title: "Kickstart",
    desc: [
      "Led UI management for a Salesforce Commerce Cloud project",
      "Mentored a remote resource to accelerate learning & delivery",
      "Encouraged teamwork and continuous learning practices"
    ],
    tags: ["Leadership", "Mentoring", "SFRA", "Systems Ltd."],
    impact: "Streamlined teamwork and accelerated project delivery.",
    date: "Feb 2022 - May 2022"
  },
  {
    title: "Everything But Water",
    desc: [
      "Contributed as a front-end shadow resource on a Salesforce Commerce Cloud project",
      "Handled sub-tasks and resolved UI-related bugs with precision",
      "Completed comprehensive training, progressing from basics to advanced front-end development"
    ],
    tags: ["SFRA", "HTML5", "CSS3", "JavaScript", "jQuery", "Systems Ltd."],
    impact: "Gained hands-on SFCC front-end expertise while ensuring smooth UI delivery",
    date: "Nov 2021 - Feb 2022"
  },
  {
    title: "Vineyard Vines",
    desc: [
      "Worked as a backend shadow resource on a Salesforce Commerce Cloud project",
      "Contributed to Braintree and PayPal payment integrations",
      "Supported backend development processes in a collaborative team environment"
    ],
    tags: ["Backend", "Braintree", "PayPal", "Systems Ltd."],
    impact: "Enhanced payment gateway integration knowledge in SFCC",
    date: "Jul 2021 - Oct 2021"
  },
  {
    title: "Canada Goose",
    desc: [
      "Served as an Assistant Salesforce Developer during the transition from Pipelines to SFRA",
      "Rectified backend bugs to ensure smooth migration and performance",
      "Worked as a backend shadow resource while building strong SFCC fundamentals"
    ],
    tags: ["SFRA", "Backend", "Bug Fixing", "Systems Ltd."],
    impact: "Supported the successful migration of a major retailer to SFRA",
    date: "Dec 2020 - Jun 2021"
  },
  {
    title: "SALTO",
    desc: [
      "Designed multiple responsive web templates for the SALTO project",
      "Created a local restaurant website with experimental JS & GSAP animations",
      "Translated PSD designs into working web pages for freelancing clients",
      "Developed small-scale React.js applications including a 'to-do list' app"
    ],
    tags: ["HTML5", "CSS3", "Bootstrap", "React.js", "GSAP", "TechVerx"],
    impact: "Strengthened UI/UX skills while combining animations and responsive design",
    date: "Jun 2019 - Aug 2019"
  }




];

function ProjectCard({ title, desc, tags = [], impact, date  }) {
  const [hover, setHover] = useState(false)
  return (
    <Box
      p={7}
      rounded="2xl"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      transform={hover ? 'translateY(-8px) scale(1.03)' : 'none'}
      transition="all .25s cubic-bezier(0.4,0.2,0.2,1)"
      borderRadius="20px"
      boxShadow={
        hover
          ? "0 8px 32px 0 rgba(63, 122, 112, 0.18)"
          : "-8px 8px 16px #e0e0e0,8px -8px 16px #bababa"
      }
      border={ hover ? "1px solid rgba(63, 122, 112, 0.18)" : "1px solid transparent" }
      bgGradient="linear(135deg, #f8f6f0 60%, #e6f2ef 100%)"
      position="relative"
      minH="260px"
    >
      <Heading size="md" mb={2} color="#3f7a70" fontFamily="'Montserrat', sans-serif">
        {title}
      </Heading>

      {/* Bullet points of project descriptions*/}
      <List spacing={2} mb={3} pl={2} textAlign={'left'}>
        {desc.map((point, i) => (
          <Text 
            key={i} 
            color="#3f7a70" 
            fontSize="sm" 
            fontFamily="'Montserrat', sans-serif"
            mb={1}
          >
            ○ {point}
          </Text>
        ))}
      </List>

      <Stack direction="row" wrap="wrap" gap={2} mb={2}>
        {tags.map(t => (
          <Badge key={t} background="#3f7a70" color="white" borderRadius={"3px"} p={"2px 6px"} fontSize="0.85em">{t}</Badge>
        ))}
      </Stack>
      {impact && (
        <Text color="gray.500" my={'1rem'} fontSize="sm" fontStyle="italic" mt={2}>
          {impact}
        </Text>
      )}

      <Box position="absolute" fontSize={'13px'} color={'grey'} right="1rem" bottom="1rem">{date}</Box>
    </Box>
  )
}

const LandingPage = () => {
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Box >
      {/* Main content */}
      <Box
        mt="100px"
        textAlign="center"
        p={{  base: 2, md: 8 }}
        bg="white"
        color="black"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        position="relative"
        mx={{ base: "0", md: "0" }}
      >
        <Box id="projects" w="full"  py={6}>
          <Box my={6} color={"#3f7a70"} p={{  base: 0, md: 2 }}>
            <Heading
                as="h2"
                fontSize={{ base: "30px", md: "46px" }}
                color="#3f7a70"
                letterSpacing="wider"
                fontFamily="'Montserrat', sans-serif"
                mb={2}
                textAlign="center"
                textShadow="0 2px 8px rgba(51, 107, 98, 0.43)"
            >
              Projects
            </Heading>
            <Text mb={{ base: 2, md: 4 }}>Here's what I have been working on</Text>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 2 }} mt={6} spacing={6} mx={6}>
            {projects.map((proj) => (
              <ProjectCard key={proj.title} {...proj} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  )
}

export default LandingPage