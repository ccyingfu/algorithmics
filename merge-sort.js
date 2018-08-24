

// const arr = [1, 3, 5, 7, 2, 4, 6, 8];

function createIntArrByRandom(len) {
  const ret = [];
  for (let i = 0; i < len; i++) {
    ret.push(Math.round(Math.random() * 100));
  }
  return ret;
}


function merge(A, p, q, r) {
  A = A || [];
  if (A.length <= 1) return A;
  // default setting
  p = p || 0;
  q = q || p + 1;
  r = r || A.length - 1;

  // process
  const n1 = q - p + 1;
  const n2 = r - q;
  const L = new Array(n1);
  const R = new Array(n2);

  let i = 0;
  let j = 0;
  for (; i < n1; i++) L[i] = A[p + i];
  for (; j < n2; j++) R[j] = A[q + j + 1];
  i = j = 0;
  let k = p;
  for (; k <= r; k++) {
    // if both of them is undefined, stop comparing.
    if (!L[i] && !R[j]) break;
    // if L[i] is undefined, directly assigns R[j] to A[k]
    if (!L[i]) {
      A[k] = R[j++];
      break;
    }
    // vice versa
    if (!R[j]) {
      A[k] = L[i++];
      break;
    }
    // if both of them isn't undefined
    if (L[i] <= R[j]) {
      A[k] = L[i];
      i++;
    } else {
      A[k] = R[j];
      j++;
    }
  }
  return A;
}

function merge_sort(A, p, r) {
  A = A || [];
  if (A.length <= 1) return A;
  if (p === undefined) p = 0;
  if (r === undefined) r = p + 1;
  if (p >= r) {
    return A;
  }
  let q = Math.floor((p + r) / 2);
  merge_sort(A, p, q);
  merge_sort(A, q + 1, r);
  merge(A, p, q, r);
}

// merge(arr, 0, 3, 7);
const arr = createIntArrByRandom(10);
console.log(arr)
merge_sort(arr);
console.log(arr);