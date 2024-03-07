import { Box, Flex, Text, Input, InputGroup, InputLeftElement, VStack, Avatar, Divider, IconButton, useColorModeValue, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { FaSearch, FaRegSmile, FaPaperPlane, FaPlus } from "react-icons/fa";

const theme = extendTheme({
  components: {
    Input: {
      variants: {
        flushed: () => ({
          field: {
            _focus: { borderColor: "brand.400" },
          },
        }),
      },
    },
  },
  colors: {
    brand: {
      400: "#0d6efd",
    },
  },
});

const contacts = [
  { name: "John Doe", message: "Hey there! How are you?", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdHxlbnwwfHx8fDE3MDk4MDU0NTB8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { name: "Jane Smith", message: "Let's catch up soon!", avatar: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTcwOTgwNTQ1MHww&ixlib=rb-4.0.3&q=80&w=1080" },
  { name: "Michael Brown", message: "Did you get the files?", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxtYW4lMjBwb3J0cmFpdHxlbnwwfHx8fDE3MDk4MDU0NTB8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  // Add more contacts here
];

const ChatMessage = ({ name, message, avatar }) => {
  return (
    <Flex align="center" p={2}>
      <Avatar size="md" name={name} src={avatar} />
      <VStack align="start" ml={3}>
        <Text fontWeight="bold">{name}</Text>
        <Text>{message}</Text>
      </VStack>
    </Flex>
  );
};

const Index = () => {
  const bg = useColorModeValue("gray.50", "gray.800");

  return (
    <ChakraProvider theme={theme}>
      <Box h="100vh" bg={bg}>
        <Flex h="100%">
          {/* Contacts/Sidebar */}
          <VStack w="300px" p={3} borderRightWidth="1px" overflowY="auto" spacing={1}>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
              <Input type="text" placeholder="Search" variant="flushed" />
            </InputGroup>
            <IconButton aria-label="Add contact" icon={<FaPlus />} isRound={true} size="sm" alignSelf="flex-end" />
            <Divider />
            {contacts.map((contact, index) => (
              <ChatMessage key={index} {...contact} />
            ))}
          </VStack>

          {/* Chat Area */}
          <VStack flex={1} p={3} spacing={4}>
            {/* Message Input */}
            <Flex mt="auto" p={2} borderTopWidth="1px" width="100%" maxW="600px" alignSelf="center">
              <IconButton aria-label="Emoji" icon={<FaRegSmile />} isRound={true} size="sm" mr={2} />
              <Input placeholder="Type a message" />
              <IconButton aria-label="Send message" icon={<FaPaperPlane />} isRound={true} size="sm" ml={2} />
            </Flex>
          </VStack>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
