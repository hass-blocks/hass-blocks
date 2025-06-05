import { NavLink } from 'react-router-dom';
import { Box, Flex, Text } from '@chakra-ui/react';

export function AppNav() {
  return (
    <Box px={4}>
      <Flex minH="60px" h={16} as="nav" alignItems={'center'} gap="3rem">
        <Text textStyle={'2xl'}>
          <NavLink to="/" end>
            Home
          </NavLink>
        </Text>
        <Text textStyle={'2xl'}>
          <NavLink to="/automations" end>
            Automations
          </NavLink>
        </Text>
      </Flex>
    </Box>
  );
}
