import {
  getRenderers,
  MarkdownEntry,
  MarkdownRenderer,
  tsMarkdown,
} from 'ts-markdown';

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
      selfClosing?: boolean;
    };
  }

  interface ClosingTagEntry {
    closingTag: {
      name: E[number];
    };
  }

  const closingTagRenderer: MarkdownRenderer = (entry: ClosingTagEntry) => {
    return {
      markdown: `</ ${entry.closingTag.name}>`,
      blockLevel: true,
    };
  };

  const componentRenderer: MarkdownRenderer = <
    P extends Record<string, unknown>,
  >(
    entry: ComponentEntry<P>,
  ) => {
    const markdown = `<${entry.component.name}\n${Object.entries(
      entry.component.props,
    )
      .map(([key, value]) => {
        const newValue =
          typeof value === 'string'
            ? JSON.stringify(value)
            : tsMarkdown([value as MarkdownEntry], {
                renderers: getRenderers({
                  component: componentRenderer,
                  closingTag: closingTagRenderer,
                }),
              });
        return `${key}={${JSON.stringify(newValue)}}`;
      })
      .join('\n')} ${entry.component.selfClosing ? '/' : ''}>`;

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
      openingTag: (selfClosing: boolean) => {
        return {
          component: {
            name,
            props,
            selfClosing,
          },
        };
      },

      closingTag: () => {
        return {
          closingTag: {
            name,
          },
        };
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

  return {
    importRenderer,
    componentRenderer,
    importStatement,
    component,
    closingTagRenderer,
  };
};
