export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'addListItem' : IDL.Func([IDL.Text], [], ['oneway']),
    'readList' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
    'removeListItem' : IDL.Func([IDL.Nat], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
