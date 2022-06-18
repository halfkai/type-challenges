const myOmit = (obj: Record<string, unknown>, keys: string[]) => keys.reduce<Partial<typeof obj>>((acc, k) => {
  if (k in obj)
    delete acc[k]
  return acc
}, { ...obj })

type MyOmit<T, K extends keyof T> = MyPick<T, MyExclude<keyof T, K>>
