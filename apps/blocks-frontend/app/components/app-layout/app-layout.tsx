import { Box } from '@chakra-ui/react/box';
import { AppNav } from '@components';
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: LayoutProps) => {
  return (
    <Box minH="100vh" maxW="40rem">
      <AppNav />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
};
