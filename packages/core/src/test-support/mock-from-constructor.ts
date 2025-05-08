import { mock } from 'vitest-mock-extended';
import { when } from 'vitest-when';

type AnyFunction = (...args: never[]) => unknown;

export const mockFromConstructor = <C extends AnyFunction>(
  theConstructor: C,
  ...args: Parameters<C>
) => {
  const mockThing = mock<ReturnType<C>>();
  when<C>(theConstructor)
    .calledWith(...args)
    .thenReturn(mockThing);
  return mockThing;
};
