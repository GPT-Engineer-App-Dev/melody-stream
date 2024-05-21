import { useState } from "react";
import { Container, Heading, VStack, Input, Button, Box, Text } from "@chakra-ui/react";

const PlaylistCreation = () => {
  const [playlistName, setPlaylistName] = useState("");
  const [songs, setSongs] = useState([]);
  const [songInput, setSongInput] = useState("");

  const handleAddSong = () => {
    if (songInput.trim() !== "") {
      setSongs([...songs, songInput]);
      setSongInput("");
    }
  };

  const handleCreatePlaylist = () => {
    if (playlistName.trim() !== "" && songs.length > 0) {
      console.log("Playlist Created:", { playlistName, songs });
      setPlaylistName("");
      setSongs([]);
    }
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h2" size="xl">Create a New Playlist</Heading>
        <Input
          placeholder="Playlist Name"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
        />
        <Box width="100%">
          <Input
            placeholder="Add a song"
            value={songInput}
            onChange={(e) => setSongInput(e.target.value)}
            mb={2}
          />
          <Button colorScheme="teal" onClick={handleAddSong}>Add Song</Button>
        </Box>
        <Box width="100%">
          <Heading as="h3" size="md" mt={4}>Songs</Heading>
          {songs.length === 0 ? (
            <Text>No songs added yet.</Text>
          ) : (
            <VStack spacing={2} align="start">
              {songs.map((song, index) => (
                <Text key={index}>{song}</Text>
              ))}
            </VStack>
          )}
        </Box>
        <Button colorScheme="teal" onClick={handleCreatePlaylist}>Create Playlist</Button>
      </VStack>
    </Container>
  );
};

export default PlaylistCreation;