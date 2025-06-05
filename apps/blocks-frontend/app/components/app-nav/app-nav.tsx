import { NavLink } from 'react-router-dom';
import styles from './app-nav.module.css';
import { Box, Flex } from '@chakra-ui/react';

export function AppNav() {
  return (
    <Box>
      <Flex minH="60px">
        <nav className={styles['nav']}>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/automations" end>
            Automations
          </NavLink>
        </nav>
      </Flex>
    </Box>
  );
}
