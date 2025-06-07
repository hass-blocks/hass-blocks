import { Box } from '@chakra-ui/react/box';
import { Flex } from '@chakra-ui/react/flex';
import { AppNav, AutomationList } from '..';
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <AppNav />
      <Flex>
        <Box borderRightWidth={'thin'} width="20rem">
          <AutomationList />
        </Box>
        <Box width="calc(100vw - 20rem)" padding="1rem">
          <Box>{children}</Box>
        </Box>
      </Flex>
    </Box>
  );
};
