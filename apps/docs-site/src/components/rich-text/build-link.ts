import { getUnscopedPackageName } from '@doc-model';
import type { ApiItem, ApiModel } from '@microsoft/api-extractor-model';
import type { DocDeclarationReference } from '@microsoft/tsdoc';
import { kebabize } from '@utils';

export const buildLink = (link: DocDeclarationReference, model: ApiModel) => {
  const identifier =
    link.memberReferences[link.memberReferences.length - 1]?.memberIdentifier
      ?.identifier;

  if (link.packageName) {
    return {
      link: `/api-docs/package/${link.packageName}/${kebabize(identifier ?? '')}`,
      text: identifier,
    };
  }

  const matchingItem = model.members.reduce<undefined | ApiItem>(
    (found, thePackage) => {
      if (found) {
        return found;
      }

      return thePackage.members[0]?.members.find(
        (member) => member.displayName === identifier,
      );
    },
    undefined,
  );

  const apiPackage = matchingItem?.getAssociatedPackage();
  if (!apiPackage) {
    throw new Error(
      `Tried to create docs link for a member that doesnt have an associated package: ${identifier}`,
    );
  }

  const memberPart = kebabize(matchingItem?.displayName ?? '');
  const packagePart = kebabize(getUnscopedPackageName(apiPackage));

  return {
    link: `/api-docs/package/${packagePart}/${memberPart}`,
    text: identifier,
  };
};
