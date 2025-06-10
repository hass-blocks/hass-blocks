import type { ExecutorTargets } from './executor-target';

export const generateProjectsWithTargets = (
  root: string,
  targets: ExecutorTargets,
) => {
  return {
    projects: {
      [root]: {
        targets,
      },
    },
  };
};
