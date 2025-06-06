import { useContext } from 'react';
import { BlocksContext } from 'app/providers/blocks';
import { ConnectionStatus as ConnectionStatusEnum } from '@hass-blocks/websocket-plugin/client';
import { Flex, Icon } from '@chakra-ui/react';
import { PiLightningSlash } from 'react-icons/pi';
import { PiLightning } from 'react-icons/pi';

export const ConnectionStatus = () => {
  const { connectionStatus } = useContext(BlocksContext);
  return (
    <Flex alignItems={'center'} gap={'0.5rem'}>
      {connectionStatus === ConnectionStatusEnum.Connected ? (
        <Icon color={'green'} size={'lg'}>
          <PiLightning />
        </Icon>
      ) : (
        <Icon color="red" size="lg">
          <PiLightningSlash />
        </Icon>
      )}
    </Flex>
  );
};
