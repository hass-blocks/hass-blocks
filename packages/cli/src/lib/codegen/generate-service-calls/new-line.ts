import { factory, type Statement } from 'typescript';

export const newLine = () => {
  return factory.createIdentifier('\n') as unknown as Statement;
};
