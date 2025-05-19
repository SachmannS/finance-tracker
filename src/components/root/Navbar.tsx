import {
    Box,
    Flex,
    Heading,
    Spacer,
    Avatar,
    Text,
    useBreakpointValue,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react"
import { Link } from "react-router-dom";
// import {useColorModeValue} from '../ui/color-mode'

const Navbar = () => {
    const showMenu = useBreakpointValue({ base: true, md: false });

    return (
        <Box as="header" px={6} py={4} position="sticky" top={0} zIndex={10}>
            <Flex align="center">
                <Heading fontSize="lg" color="blue.500">
                    Finance Dashboard
                </Heading>

                <Spacer />

                {showMenu ? (
                    <Drawer.Root>
                        <Drawer.Trigger asChild>
                            <Button variant="outline" size="sm" color={'Black'}>
                                <FiMenu />
                            </Button>
                        </Drawer.Trigger>
                        <Portal>
                            <Drawer.Backdrop />
                            <Drawer.Positioner padding="4">
                                <Drawer.Content rounded="md" color={'Black'}>
                                    <Drawer.Header>
                                        <Drawer.Title>Menu</Drawer.Title>
                                    </Drawer.Header>
                                    <Drawer.Body>
                                        <Link to="/">Dashboard</Link><br/>
                                        <Link to="/transactions" style={{ marginLeft: 20 }}>
                                            Transactions
                                        </Link>
                                    </Drawer.Body>
                                    <Drawer.Footer>
                                        <Text fontSize="md" fontWeight="medium" color="gray.600">
                                            Welcome, Sachmann
                                        </Text>
                                    </Drawer.Footer>
                                    <Drawer.CloseTrigger asChild>
                                        <CloseButton size="sm" />
                                    </Drawer.CloseTrigger>
                                </Drawer.Content>
                            </Drawer.Positioner>
                        </Portal>
                    </Drawer.Root>
                ) : (
                    <Flex align="center" gap={4}>
                        <Drawer.Root>
                            <Drawer.Trigger asChild>
                                <Button variant="outline" size="sm" color={'Black'}>
                                    Open Menu
                                </Button>
                            </Drawer.Trigger>
                            <Portal>
                                <Drawer.Backdrop />
                                <Drawer.Positioner padding="4">
                                    <Drawer.Content rounded="md" color={'Black'}>
                                        <Drawer.Header>
                                            <Drawer.Title>Menu</Drawer.Title>
                                        </Drawer.Header>
                                        <Drawer.Body>
                                            <Link to="/">Dashboard</Link><br/>
                                            <Link to="/transactions" style={{ marginLeft: 20 }}>
                                                Transactions
                                            </Link>
                                        </Drawer.Body>
                                        <Drawer.CloseTrigger asChild>
                                            <CloseButton size="sm" />
                                        </Drawer.CloseTrigger>
                                    </Drawer.Content>
                                </Drawer.Positioner>
                            </Portal>
                        </Drawer.Root>
                        <Text fontSize="md" fontWeight="medium" color="gray.600">
                            Welcome, Sachmann
                        </Text>
                        <Avatar.Root size={'md'} colorPalette={'blue'} borderless={true}>
                            <Avatar.Fallback name="Segun Adebayo" />
                            <Avatar.Image src="https://bit.ly/sage-adebayo" />
                        </Avatar.Root>
                    </Flex>
                )}
            </Flex>
        </Box>
    );
};

export default Navbar;
