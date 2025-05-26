// Fisher-Yates Shuffle for Arrays
export function shuffle(a) {
  var b = a.length,
    t,
    p;

  while (b) {
    p = Math.floor(Math.random() * b--);
    t = a[b];
    a[b] = a[p];
    a[p] = t;
  }

  return a;
}
