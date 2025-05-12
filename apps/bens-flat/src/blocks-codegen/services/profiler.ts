import { Block, serviceCall } from '@hass-blocks/core';
declare global {
  /**
   * Starts the Profiler.
   */
  var startProfiler: (params?: StartProfilerProps) => Block;
  /**
   * Starts the Memory Profiler.
   */
  var memoryProfiler: (params?: MemoryProfilerProps) => Block;
  /**
   * Starts logging growth of objects in memory.
   */
  var startLogObjectsProfiler: (params?: StartLogObjectsProfilerProps) => Block;
  /**
   * Stops logging growth of objects in memory.
   */
  var stopLogObjectsProfiler: () => Block;
  /**
   * Starts logging sources of new objects in memory.
   */
  var startLogObjectSourcesProfiler: (
    params?: StartLogObjectSourcesProfilerProps,
  ) => Block;
  /**
   * Stops logging sources of new objects in memory.
   */
  var stopLogObjectSourcesProfiler: () => Block;
  /**
   * Dumps the repr of all matching objects to the log.
   */
  var dumpLogObjectsProfiler: (params: DumpLogObjectsProfilerProps) => Block;
  /**
   * Logs the stats of all lru caches.
   */
  var lruStatsProfiler: () => Block;
  /**
   * Logs the current frames for all threads.
   */
  var logThreadFramesProfiler: () => Block;
  /**
   * Logs what is scheduled in the event loop.
   */
  var logEventLoopScheduledProfiler: () => Block;
  /**
   * Enable or disable asyncio debug.
   */
  var setAsyncioDebugProfiler: (params?: SetAsyncioDebugProfilerProps) => Block;
  /**
   * Logs all the current asyncio tasks.
   */
  var logCurrentTasksProfiler: () => Block;
}

export interface StartProfilerProps {
  /**
   * The number of seconds to run the profiler.
   */
  seconds?: number;
}

globalThis.startProfiler = (params?: StartProfilerProps) =>
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

globalThis.memoryProfiler = (params?: MemoryProfilerProps) =>
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

globalThis.startLogObjectsProfiler = (params?: StartLogObjectsProfilerProps) =>
  serviceCall({
    name: `Call profiler.start_log_objects`,
    params: {
      domain: 'profiler',
      service: 'start_log_objects',
      service_data: params,
    },
  });

globalThis.stopLogObjectsProfiler = () =>
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

globalThis.startLogObjectSourcesProfiler = (
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

globalThis.stopLogObjectSourcesProfiler = () =>
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

globalThis.dumpLogObjectsProfiler = (params: DumpLogObjectsProfilerProps) =>
  serviceCall({
    name: `Call profiler.dump_log_objects`,
    params: {
      domain: 'profiler',
      service: 'dump_log_objects',
      service_data: params,
    },
  });

globalThis.lruStatsProfiler = () =>
  serviceCall({
    name: `Call profiler.lru_stats`,
    params: {
      domain: 'profiler',
      service: 'lru_stats',
    },
  });

globalThis.logThreadFramesProfiler = () =>
  serviceCall({
    name: `Call profiler.log_thread_frames`,
    params: {
      domain: 'profiler',
      service: 'log_thread_frames',
    },
  });

globalThis.logEventLoopScheduledProfiler = () =>
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

globalThis.setAsyncioDebugProfiler = (params?: SetAsyncioDebugProfilerProps) =>
  serviceCall({
    name: `Call profiler.set_asyncio_debug`,
    params: {
      domain: 'profiler',
      service: 'set_asyncio_debug',
      service_data: params,
    },
  });

globalThis.logCurrentTasksProfiler = () =>
  serviceCall({
    name: `Call profiler.log_current_tasks`,
    params: {
      domain: 'profiler',
      service: 'log_current_tasks',
    },
  });
