export type ArrayElement<ArrayType extends readonly unknown[] | undefined | null> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never
