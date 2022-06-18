const myPick = (obj: Record<string, unknown>, keys: string[]) => keys.filter(
  k => Object.hasOwn(obj, k),
).reduce<Partial<typeof obj>>(
  (acc, k) => {
    acc[k] = obj[k as keyof typeof obj]
    return acc
  }, {})

type MyPick<T, K extends keyof T> = { [P in K]: T[P] }
