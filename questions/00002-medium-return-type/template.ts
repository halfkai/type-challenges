// type MyReturnType<T> = any

// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

type MyReturnType<T> = T extends (...args: never) => infer R ? R : never
