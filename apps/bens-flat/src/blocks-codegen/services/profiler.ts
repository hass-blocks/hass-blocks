import {
  serviceCall,
  type Block,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  interface StartProfiler {
    /**
     * The number of seconds to run the profiler.
     */
    seconds?: number;
  }

  /**
   * Starts the Profiler.
   */
  var startProfiler: (
    params?: StartProfiler,
  ) => Block<Partial<ServiceCallArgs<StartProfiler>> | undefined, void>;

  interface MemoryProfiler {
    /**
     * The number of seconds to run the memory profiler.
     */
    seconds?: number;
  }

  /**
   * Starts the Memory Profiler.
   */
  var memoryProfiler: (
    params?: MemoryProfiler,
  ) => Block<Partial<ServiceCallArgs<MemoryProfiler>> | undefined, void>;

  interface StartLogObjectsProfiler {
    /**
     * The number of seconds between logging objects.
     */
    scan_interval?: number;
  }

  /**
   * Starts logging growth of objects in memory.
   */
  var startLogObjectsProfiler: (
    params?: StartLogObjectsProfiler,
  ) => Block<
    Partial<ServiceCallArgs<StartLogObjectsProfiler>> | undefined,
    void
  >;

  /**
   * Stops logging growth of objects in memory.
   */
  var stopLogObjectsProfiler: () => Block<
    Partial<ServiceCallArgs<unknown>> | undefined,
    void
  >;

  interface StartLogObjectSourcesProfiler {
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
  var startLogObjectSourcesProfiler: (
    params?: StartLogObjectSourcesProfiler,
  ) => Block<
    Partial<ServiceCallArgs<StartLogObjectSourcesProfiler>> | undefined,
    void
  >;

  /**
   * Stops logging sources of new objects in memory.
   */
  var stopLogObjectSourcesProfiler: () => Block<
    Partial<ServiceCallArgs<unknown>> | undefined,
    void
  >;

  interface DumpLogObjectsProfiler {
    /**
     * The type of objects to dump to the log.
     */
    type: string;
  }

  /**
   * Dumps the repr of all matching objects to the log.
   */
  var dumpLogObjectsProfiler: (
    params: DumpLogObjectsProfiler,
  ) => Block<
    Partial<ServiceCallArgs<DumpLogObjectsProfiler>> | undefined,
    void
  >;

  /**
   * Logs the stats of all lru caches.
   */
  var lruStatsProfiler: () => Block<
    Partial<ServiceCallArgs<unknown>> | undefined,
    void
  >;

  /**
   * Logs the current frames for all threads.
   */
  var logThreadFramesProfiler: () => Block<
    Partial<ServiceCallArgs<unknown>> | undefined,
    void
  >;

  /**
   * Logs what is scheduled in the event loop.
   */
  var logEventLoopScheduledProfiler: () => Block<
    Partial<ServiceCallArgs<unknown>> | undefined,
    void
  >;

  interface SetAsyncioDebugProfiler {
    /**
     * Whether to enable or disable asyncio debug.
     */
    enabled?: boolean;
  }

  /**
   * Enable or disable asyncio debug.
   */
  var setAsyncioDebugProfiler: (
    params?: SetAsyncioDebugProfiler,
  ) => Block<
    Partial<ServiceCallArgs<SetAsyncioDebugProfiler>> | undefined,
    void
  >;

  /**
   * Logs all the current asyncio tasks.
   */
  var logCurrentTasksProfiler: () => Block<
    Partial<ServiceCallArgs<unknown>> | undefined,
    void
  >;
}

globalThis.startProfiler = (params) =>
  serviceCall({
    name: `Call profiler.start`,
    params: {
      domain: 'profiler',
      service: 'start',
      service_data: params,
    },
  });

globalThis.memoryProfiler = (params) =>
  serviceCall({
    name: `Call profiler.memory`,
    params: {
      domain: 'profiler',
      service: 'memory',
      service_data: params,
    },
  });

globalThis.startLogObjectsProfiler = (params) =>
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

globalThis.startLogObjectSourcesProfiler = (params) =>
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

globalThis.dumpLogObjectsProfiler = (params) =>
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

globalThis.setAsyncioDebugProfiler = (params) =>
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
