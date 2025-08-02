import { assertion } from '@building-blocks';
/**
 * Use with the loop block to iterate through a list. Will return
 * an assertion that returns the next item in the list each time it is executed
 * then sets continue to false on the last execution
 *
 * @param list - a list of items you want to iterate through
 * @returns
 *
 * @example
 *
 * ```TypeScript
 * loop({
 *  name: 'Loop through numbers',
 *  while: iterating(1, 2),
 *  do: action<{ value: number | undefined }>({
 *    name: 'test action',
 *    callback: (input) => {
 *      console.log(input);
 *    },
 *  }),
 * });
 * ```
 *
 */
export const iterating = <TType>(...list: TType[]) => {
  let index = 0;

  return assertion({
    name: 'Iterate list',
    predicate: () => {
      const result = {
        result: Boolean(list[index]),
        output: {
          value: list[index] ?? list[list.length - 1],
          index: list[index] ? index : list.length - 1,
          list,
        },
      };

      index++;

      return result;
    },
  });
};
