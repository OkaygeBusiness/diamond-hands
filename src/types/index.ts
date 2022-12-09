export * from "./dbTypes"
export * from "./apiResponse"

export type inferPromise<T> = T extends (...args: any) => Promise<infer A>
  ? A
  : never;