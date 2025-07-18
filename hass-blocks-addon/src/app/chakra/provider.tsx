'use client';

import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from './color-mode.js';

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
