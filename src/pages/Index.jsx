import { Container, Text, VStack, Heading, Box, Button } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={6}>Music Streaming Service</Heading>
        <Text fontSize="lg" mb={4}>Stream your favorite music anytime, anywhere.</Text>
        <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
          <Button leftIcon={<FaBackward />} colorScheme="teal" variant="outline" mr={2}>
            Previous
          </Button>
          <Button leftIcon={<FaPlay />} colorScheme="teal" variant="solid" mr={2}>
            Play
          </Button>
          <Button leftIcon={<FaPause />} colorScheme="teal" variant="solid" mr={2}>
            Pause
          </Button>
          <Button leftIcon={<FaForward />} colorScheme="teal" variant="outline" ml={2}>
            Next
          </Button>
        </Box>
        <Text fontSize="md" color="gray.500">Enjoy unlimited music streaming with our service.</Text>
        <Link to="/create-playlist">
          <Button colorScheme="teal" mt={4}>Create Playlist</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default Index;