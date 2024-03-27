import React from "react";
import { Box, Heading, Text, Button, Stack, Image, Grid, GridItem, Container } from "@chakra-ui/react";
import { FaBook, FaPuzzlePiece, FaFlask, FaPaintBrush } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="purple.500" color="white" py={20}>
        <Container maxW="container.lg">
          <Stack direction={["column", "row"]} spacing={8} align="center">
            <Box>
              <Heading as="h1" size="2xl" mb={4}>
                Welcome to KidsLearn!
              </Heading>
              <Text fontSize="xl" mb={8}>
                Discover a world of fun and interactive learning.
              </Text>
              <Button colorScheme="white" size="lg">
                Get Started
              </Button>
            </Box>
            <Image src="https://images.unsplash.com/photo-1594643781026-abcb610d394f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxraWRzJTIwbGVhcm5pbmclMjBvbmxpbmV8ZW58MHx8fHwxNzExNTMyODQ1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Kids Learning" maxW="400px" />
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Explore Our Learning Categories
          </Heading>
          <Grid templateColumns={["1fr", "repeat(2, 1fr)", "repeat(4, 1fr)"]} gap={8}>
            <GridItem>
              <Box bg="blue.500" color="white" p={6} borderRadius="md" textAlign="center">
                <FaBook size={48} />
                <Heading as="h3" size="lg" mt={4}>
                  Reading
                </Heading>
              </Box>
            </GridItem>
            <GridItem>
              <Box bg="green.500" color="white" p={6} borderRadius="md" textAlign="center">
                <FaPuzzlePiece size={48} />
                <Heading as="h3" size="lg" mt={4}>
                  Puzzles
                </Heading>
              </Box>
            </GridItem>
            <GridItem>
              <Box bg="orange.500" color="white" p={6} borderRadius="md" textAlign="center">
                <FaFlask size={48} />
                <Heading as="h3" size="lg" mt={4}>
                  Science
                </Heading>
              </Box>
            </GridItem>
            <GridItem>
              <Box bg="pink.500" color="white" p={6} borderRadius="md" textAlign="center">
                <FaPaintBrush size={48} />
                <Heading as="h3" size="lg" mt={4}>
                  Art
                </Heading>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Ready to Start Learning?
          </Heading>
          <Text fontSize="xl" mb={8}>
            Join our community of young learners today!
          </Text>
          <Button colorScheme="purple" size="lg">
            Sign Up Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
