module.exports=
[ [ 'version', '13' ],
  [ 'plan', 2 ],
  [ 'comment', '# nesting\n' ],
  [ 'child',
    [ [ 'plan', 2 ],
      [ 'result', { id: 1, ok: true, name: 'true is ok' } ],
      [ 'result', { id: 2, ok: true, name: 'doag is also okay' } ],
      [ 'complete', { plan: 2, count: 2, pass: 2, ok: true } ] ] ],
  [ 'result', { id: 1, ok: true, name: 'first' } ],
  [ 'child',
    [ [ 'result', { id: 1, ok: true, name: 'no plan' } ],
      [ 'child',
        [ [ 'plan', 3 ],
          [ 'result',
            { id: 0, ok: true, skip: 'for no raisin', name: 'granddaughter' } ],
          [ 'result',
            { id: 1,
              ok: true,
              name: 'grandson',
              diag: { ok: 1, this: 'is not tap', it: 'is yaml' } } ],
          [ 'garbage',
            '  ok: 1\n  this: is not tap or yaml\n  it: is garbage\n' ],
          [ 'result',
            { id: 2, ok: true, todo: true, name: 'grandchild' } ],
          [ 'complete',
            { plan: 3, count: 3, pass: 3, ok: true, todo: 1, skip: 1 } ] ] ],
      [ 'result', { id: 2, ok: true, name: 'this passes' } ],
      [ 'plan', 2 ],
      [ 'complete', { plan: 2, count: 2, pass: 2, ok: true } ] ] ],
  [ 'result', { id: 2, ok: true, name: 'second' } ],
  [ 'complete', { plan: 2, count: 2, pass: 2, ok: true } ] ]
