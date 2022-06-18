type Mutable<T extends object> = {
  -readonly [P in keyof T]: T extends string ? never : T extends number ? never : T[P]
}
