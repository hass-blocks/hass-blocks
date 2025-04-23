import { ApiFunction, ApiItem } from '@microsoft/api-extractor-model';
import { component } from './components.ts';

export const paramsTable = (item: ApiItem) => {
  if (item instanceof ApiFunction) {
    const data = item.parameters.map((param) => {
      return {
        name: param.name,
        type: param.parameterTypeExcerpt.text,
      };
    });

    const { openingTag: theComponent } = component('ParamsTable', {
      params: data,
    });
    return theComponent(true);
  }
  return {};
};
