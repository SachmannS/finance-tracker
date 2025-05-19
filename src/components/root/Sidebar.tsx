// SidebarDrawer.tsx
import {
  Box,
  Drawer,
  DrawerBody,
//   DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
//   DrawerOverlay,
  IconButton,
  useDisclosure,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
// import { ReactNode } from 'react';

const SidebarContent = () => (
  <VStack align="start" p={4}>
    <Box as="a" >Dashboard</Box>
    <Box as="a" >Transactions</Box>
    <Box as="a" >Analytics</Box>
    <Box as="a" >Settings</Box>
  </VStack>
);

const ResponsiveSidebar = () => {
  const { open, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      {/* Mobile Top Bar */}
      {isMobile && (
        <IconButton
          icon={<FiMenu />}
          aria-label="Open Menu"
          variant="ghost"
          onClick={onOpen}
          position="fixed"
          top="1rem"
          left="1rem"
          zIndex={1100}
        />
      )}

      {/* Desktop Sidebar */}
      {!isMobile && (
        <Box
          as="nav"
          width="250px"
          height="100vh"
          position="fixed"
          bg="gray.100"
          p={4}
          borderRight="1px solid"
          borderColor="gray.200"
        >
          <SidebarContent />
        </Box>
      )}

      {/* Mobile Drawer */}
      <Drawer.Root placement="start">
        <DrawerContent>
          {/* <DrawerCloseButton /> */}
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer.Root>
    </>
  );
};

export default ResponsiveSidebar;
