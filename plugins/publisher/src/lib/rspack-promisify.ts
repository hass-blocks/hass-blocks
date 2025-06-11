import { rspack, type RspackOptions, type Stats } from '@rspack/core';

export const rsPack = (options: RspackOptions) => {
  return new Promise<Stats | undefined>((resolve, reject) => {
    rspack(options, (err, stats) => {
      if (err || stats?.hasErrors()) {
        if (stats?.hasErrors()) {
          console.log(
            stats.toString({
              chunks: false, // Makes the build much quieter
              colors: true, // Shows colors in the console
            }),
          );
        }
        reject(err || stats);
      } else {
        resolve(stats);
      }
    });
  });
};
