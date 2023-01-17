import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'addListItem' : (arg_0: string) => Promise<undefined>,
  'readList' : () => Promise<Array<string>>,
  'removeListItem' : (arg_0: bigint) => Promise<undefined>,
}
