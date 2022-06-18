import type { Equal } from '@type-challenges/utils'

type WritableKeysOf<T> = {
  [P in keyof T]: Equal<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }> extends true ? P : never
}[keyof T]

export type GetReadonlyKeys<T> = MyExclude<keyof T, WritableKeysOf<T>>
