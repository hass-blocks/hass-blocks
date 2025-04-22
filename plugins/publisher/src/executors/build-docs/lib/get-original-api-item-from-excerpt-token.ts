import { ApiItem, ExcerptToken, ExcerptTokenKind } from "@microsoft/api-extractor-model"

export const getOriginalApiItemFromExcerptToken = (context: ApiItem, token: ExcerptToken) => {
  if (token.kind === ExcerptTokenKind.Reference) {
    const model = context.getAssociatedModel()
    const reference = token.canonicalReference
    if (reference) {
      const item = model?.resolveDeclarationReference(reference, context)
      return item?.resolvedApiItem
    }
  }
  return undefined
}
