import { NavLink } from 'react-router-dom';

import { Box, Flex, Text } from '@chakra-ui/react';
import { ConnectionStatus } from '@components';

export function AppNav() {
  return (
    <Box px={4} borderWidth={1}>
      <Flex>
        <Flex
          minH="60px"
          h={16}
          as="nav"
          alignItems={'center'}
          gap="3rem"
          width={'100%'}
          flexGrow={2}
        >
          <Text textStyle={'2xl'}>
            <NavLink to="/" end>
              Home
            </NavLink>
          </Text>
        </Flex>
        <Flex minH="60px" h={16} alignItems={'center'} gap="3rem">
          <ConnectionStatus />
        </Flex>
      </Flex>
    </Box>
  );
}
