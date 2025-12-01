import { useState, useEffect } from 'react'
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Stack,
  Image,
  Link,
  useBreakpointValue,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  VStack,
  HStack,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import NavLogo from "../static/images/logos/logo-3.png";
import "../styles/main.scss";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  // show inline links on md+; hide them on smaller screens
  const isDesktop = useBreakpointValue({ base: false, md: true })

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Nav links (reusable)
  const navLinks = [
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Meraki", to: "/meraki" },
    { label: "Resume", to: "/resume" },
    { label: "Contact", to: "/contact" },
  ]

  return (
    <Box className="navbar">
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        p={4}
        bg={scrolling ? '#f6f4f0D2' : '#f6f4f0'}
        backdropFilter={scrolling ? 'blur(4px)' : 'blur(10px)'}
        transition="background-color 0.3s ease"
        zIndex="1000"
        webkitBackdropFilter="blur(10px)"
        boxShadow={"0 4px 30px rgba(42, 38, 29, 0.5)"}
      >
        <Flex align="center" justify="space-between" mx={{ base: 2, md: 12 }}>
          {/* LEFT SIDE: Logo (always visible) */}
          <Box
            as={RouterLink}
            to="/"
            display="flex"
            alignItems="center"
            position="relative"
            role="group"
            sx={{
              perspective: "600px",
              cursor: "pointer"
            }}
          >
            <Box
              className="flip-logo"
              sx={{
                width: { base: "36px", md: "50px" },
                height: { base: "26px", md: "40px" },
                position: "relative",
                transition: "transform 0.6s cubic-bezier(0.4,0.2,0.2,1)",
                transformStyle: "preserve-3d",
                "&:hover": {
                  transform: "rotateY(180deg)"
                }
              }}
            >
              <Image
                src={NavLogo}
                alt="Logo"
                maxW={{ base: "36px", md: "50px" }}
                position="absolute"
                top="0"
                left="0"
                backfaceVisibility="hidden"
              />
            </Box>
          </Box>

          {/* CENTER: Desktop inline links (hidden on mobile) */}
          <Box flex="1" display={{ base: 'none', md: 'flex' }} justifyContent="flex-end">
            <HStack spacing={8}>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  color="#203f3aff"
                  className="nav-link"
                  fontSize="18px"
                  fontWeight="500"
                  as={RouterLink}
                  to={link.to}
                >
                  {link.label}
                </Link>
              ))}
            </HStack>
          </Box>

          {/* RIGHT SIDE: Hamburger only on mobile */}
          <Box display={{ base: 'block', md: 'none' }}>
            <IconButton
              aria-label="Open menu"
              icon={<HamburgerIcon />}
              onClick={onOpen}
              color="#3f7a70"
              _hover={{ background: "none", color: "#203f3aff" }}
              background="none"
              w={'20px'}
              h={'20px'}
            />
          </Box>
        </Flex>


        {/* Mobile Drawer */}
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton color={'#3f7a70'}/>
            <DrawerBody mt="8">
              <VStack align="start" spacing={4}>
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    as={RouterLink}
                    to={link.to}
                    onClick={onClose}
                    w="100%"
                    py={2}
                    fontSize="18px"
                    fontWeight="600"
                    color="#3f7a70"
                  >
                    {link.label}
                  </Link>
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  )
}

export default Navbar
