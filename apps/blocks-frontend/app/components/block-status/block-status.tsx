import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import type { HassBlocksEvent, LifeCycleEvent } from '@hass-blocks/core';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdError } from 'react-icons/md';
import { FaHourglass } from 'react-icons/fa';
import { AiFillStop } from 'react-icons/ai';

const getStatus = (status: LifecyleEvents['eventType']) => {
  switch (status) {
    case 'block-finished':
      return (
        <>
          <Icon>
            <FaRegThumbsUp />
          </Icon>
          <Text>Finished</Text>
        </>
      );
    case 'block-failed':
      return (
        <>
          <Icon>
            <MdError />
          </Icon>
          <Text>Failed</Text>
        </>
      );

    case 'block-pending':
      return (
        <>
          <Icon>
            <FaHourglass />
          </Icon>
          <Text>Pending</Text>
        </>
      );
    case 'sequence-aborted':
      return (
        <>
          <Icon>
            <FaHourglass />
          </Icon>
          <Text>Aborted</Text>
        </>
      );

    default:
      return (
        <>
          <Icon>
            <AiFillStop />
          </Icon>
          <Text>Started</Text>
        </>
      );
  }
};

type LifecyleEvents = Exclude<
  HassBlocksEvent,
  Exclude<HassBlocksEvent, LifeCycleEvent<string>>
>;

interface BlockStatusProps {
  status: LifecyleEvents['eventType'];
}
export const BlockStatus = ({ status }: BlockStatusProps) => {
  const statusMarkup = getStatus(status);

  return (
    <Box>
      <Flex
        width="100%"
        alignItems="center"
        justifyContent={'center'}
        gap="0.5rem"
      >
        {statusMarkup}
      </Flex>
    </Box>
  );
};
