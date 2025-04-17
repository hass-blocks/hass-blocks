import { CreateNodesContext, CreateNodesContextV2, createNodesFromFiles, CreateNodesV2 } from "@nx/devkit";
import { ApiExtractorExecutorSchema } from "./executors/schema";
import { dirname, join } from "path";
import { readdirSync } from "fs";

const checkIfConfigFileShouldBeProject = (
    projectRoot: string,
    context: CreateNodesContext | CreateNodesContextV2
  ) => {
    const siblingFiles = readdirSync(join(context.workspaceRoot, projectRoot));
    if (
      !siblingFiles.includes('package.json') &&
      !siblingFiles.includes('project.json')
    ) {
      return false;
    }
  
    return true;
  }

// export const createNodes: CreateNodesV2<ApiExtractorExecutorSchema> = [
//     `**/tsconfig.lib.json`,
//     async (paths, options, context) => {

//         const { roots: projectRoots, configFiles: validConfigFiles } =
//         paths.reduce(
//           (acc, configFile) => {
//             const potentialRoot = dirname(configFile);
//             if (checkIfConfigFileShouldBeProject(potentialRoot, context)) {
//               acc.roots.push(potentialRoot);
//               acc.configFiles.push(configFile);
//             }
//             return acc;
//           },
//           {
//             roots: [],
//             configFiles: [],
//           } as {
//             roots: string[];
//             configFiles: string[];
//           }
//         );
  

//         return await createNodesFromFiles(
//             async (configFile, _, context, index) => {
//                 const projectRoot = dirname(configFile);
//             },
//             validConfigFiles,
//             options,
//             context
//         )
//     }
// ]