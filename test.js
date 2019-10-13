function deepTree(a, elementLength) {
  for (let i = 0; i < a.length; i++) {
    if (a[i]) {
      return deepTree(a[i]);
    }
  }

  return a;
}

function root(a) {
  const len = [];

  for (let i = 0; i < a.length; i++) {
    len.push(deepTree(a[i], 0));
  }

  const min = Math.min(...len);
  const max = Math.max(...len);

  return { min, max };
}

const a = [[[], [[[], [[[]]]]]], [[[]]], [], [[[[[]]]]], [[]]];
console.log('min/max', root(a[0]));
