export interface Query {
  [name: string]: string | number | Date | boolean | Array<string> | Array<number> | null | undefined,
}
