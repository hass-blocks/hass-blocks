import { MarkdownRenderer } from 'ts-markdown';

export interface ImportEntry<E extends readonly string[], M extends string> {
  import: {
    exports: E;
    module: M;
  };
}

export const jsx = <const E extends readonly string[], M extends string>(
  exports: E,
  module: M,
) => {
  const importRenderer: MarkdownRenderer = () => {
    return {
      markdown: `import { ${exports.join(', ')} } from "${module}"`,
      blockLevel: true,
    };
  };

  interface ComponentEntry<P extends Record<string, unknown>> {
    component: {
      name: E[number];
      props: P;
    };
  }

  const componentRenderer: MarkdownRenderer = <
    P extends Record<string, unknown>,
  >(
    entry: ComponentEntry<P>,
  ) => {
    const markdown = `<${entry.component.name}\n${Object.entries(
      entry.component.props,
    )
      .map(([key, value]) => `${key}={${JSON.stringify(value)}}`)
      .join('\n')} />`;

    return {
      markdown,
      blockLevel: true,
    };
  };

  const component = <P extends Record<string, unknown>>(
    name: ComponentEntry<P>['component']['name'],
    props: ComponentEntry<P>['component']['props'],
  ) => {
    return {
      component: {
        name,
        props,
      },
    };
  };

  const importStatement = (): ImportEntry<E, M> => {
    return {
      import: {
        exports,
        module,
      },
    };
  };

  return { importRenderer, componentRenderer, importStatement, component };
};
