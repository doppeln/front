import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";

export default function Login() {
  return (
    <Box
      h="100vh"
      bgImage="url('/login.jpg')"
      bgPosition="67% 50%"
      bgRepeat="repeat-x"
      bgSize="cover"
    >
      <Box h="100%" w="100%" bg="rgba(0,0,0,0.3)">
        <Flex
          direction="column"
          justify="flex-end"
          maxW="375px"
          h="100vh"
          m="auto"
          px="16px"
        >
          <Box>
            <Text as="h1" fontSize="6xl" color="white" fontWeight="bold">
              ドッペル
            </Text>
            <Text as="h1" fontSize="6xl" color="white" fontWeight="bold">
              ゲンガー
            </Text>
            <Text as="h1" fontSize="6xl" color="white" fontWeight="bold">
              に会う
            </Text>
          </Box>
          <Box bg="white" w="100%" h="54px" borderRadius="10px" my="48px">
            <Flex justify="center" align="center" h="100%">
              <Image src="/google_logo.png" boxSize="24px" alt="google log" />
              <Text
                fontSize="lg"
                color="rgba(0,0,0,0.54)"
                fontWeight="bold"
                pl="16px"
              >
                Googleでログイン
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
