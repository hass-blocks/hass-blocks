import { serviceCall } from '@hass-blocks/core';

export interface StartProfilerProps {
  /**
   * The number of seconds to run the profiler.
   */
  seconds?: number;
}

/**
 * Starts the Profiler.
 */
export const startProfiler = (params?: StartProfilerProps) =>
  serviceCall({
    name: `Call profiler.start`,
    params: {
      domain: 'profiler',
      service: 'start',
      service_data: params,
    },
  });

export interface MemoryProfilerProps {
  /**
   * The number of seconds to run the memory profiler.
   */
  seconds?: number;
}

/**
 * Starts the Memory Profiler.
 */
export const memoryProfiler = (params?: MemoryProfilerProps) =>
  serviceCall({
    name: `Call profiler.memory`,
    params: {
      domain: 'profiler',
      service: 'memory',
      service_data: params,
    },
  });

export interface StartLogObjectsProfilerProps {
  /**
   * The number of seconds between logging objects.
   */
  scan_interval?: number;
}

/**
 * Starts logging growth of objects in memory.
 */
export const startLogObjectsProfiler = (
  params?: StartLogObjectsProfilerProps,
) =>
  serviceCall({
    name: `Call profiler.start_log_objects`,
    params: {
      domain: 'profiler',
      service: 'start_log_objects',
      service_data: params,
    },
  });

/**
 * Stops logging growth of objects in memory.
 */
export const stopLogObjectsProfiler = () =>
  serviceCall({
    name: `Call profiler.stop_log_objects`,
    params: {
      domain: 'profiler',
      service: 'stop_log_objects',
    },
  });

export interface StartLogObjectSourcesProfilerProps {
  /**
   * The number of seconds between logging objects.
   */
  scan_interval?: number;
  /**
   * The maximum number of objects to log.
   */
  max_objects?: number;
}

/**
 * Starts logging sources of new objects in memory.
 */
export const startLogObjectSourcesProfiler = (
  params?: StartLogObjectSourcesProfilerProps,
) =>
  serviceCall({
    name: `Call profiler.start_log_object_sources`,
    params: {
      domain: 'profiler',
      service: 'start_log_object_sources',
      service_data: params,
    },
  });

/**
 * Stops logging sources of new objects in memory.
 */
export const stopLogObjectSourcesProfiler = () =>
  serviceCall({
    name: `Call profiler.stop_log_object_sources`,
    params: {
      domain: 'profiler',
      service: 'stop_log_object_sources',
    },
  });

export interface DumpLogObjectsProfilerProps {
  /**
   * The type of objects to dump to the log.
   */
  type: string;
}

/**
 * Dumps the repr of all matching objects to the log.
 */
export const dumpLogObjectsProfiler = (params: DumpLogObjectsProfilerProps) =>
  serviceCall({
    name: `Call profiler.dump_log_objects`,
    params: {
      domain: 'profiler',
      service: 'dump_log_objects',
      service_data: params,
    },
  });

/**
 * Logs the stats of all lru caches.
 */
export const lruStatsProfiler = () =>
  serviceCall({
    name: `Call profiler.lru_stats`,
    params: {
      domain: 'profiler',
      service: 'lru_stats',
    },
  });

/**
 * Logs the current frames for all threads.
 */
export const logThreadFramesProfiler = () =>
  serviceCall({
    name: `Call profiler.log_thread_frames`,
    params: {
      domain: 'profiler',
      service: 'log_thread_frames',
    },
  });

/**
 * Logs what is scheduled in the event loop.
 */
export const logEventLoopScheduledProfiler = () =>
  serviceCall({
    name: `Call profiler.log_event_loop_scheduled`,
    params: {
      domain: 'profiler',
      service: 'log_event_loop_scheduled',
    },
  });

export interface SetAsyncioDebugProfilerProps {
  /**
   * Whether to enable or disable asyncio debug.
   */
  enabled?: boolean;
}

/**
 * Enable or disable asyncio debug.
 */
export const setAsyncioDebugProfiler = (
  params?: SetAsyncioDebugProfilerProps,
) =>
  serviceCall({
    name: `Call profiler.set_asyncio_debug`,
    params: {
      domain: 'profiler',
      service: 'set_asyncio_debug',
      service_data: params,
    },
  });

/**
 * Logs all the current asyncio tasks.
 */
export const logCurrentTasksProfiler = () =>
  serviceCall({
    name: `Call profiler.log_current_tasks`,
    params: {
      domain: 'profiler',
      service: 'log_current_tasks',
    },
  });
