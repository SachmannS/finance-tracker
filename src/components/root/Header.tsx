import { Flex, Heading, Spacer, Avatar, Box } from '@chakra-ui/react';
// import { Avatar } from '@chakra-ui/avatar';

const Header = () => {
    return (
        <Flex as="header" px={4} py={3} align="center" bg="white" borderColor="gray.200">
            <Box>
                <Heading fontSize={{ base: "lg", sm: "2xl" }} fontWeight="normal" color="Black">
                    Welcome, Sachmann 👋
                </Heading>
            </Box>
            <Spacer />

            <Avatar.Root size={'md'} colorPalette={'blue'} borderless={true}>
                <Avatar.Fallback name="Segun Adebayo" />
                <Avatar.Image src="https://bit.ly/sage-adebayo" />
            </Avatar.Root>
        </Flex>
    );
};

export default Header;
