var A = [31, 41, 59, 26, 41, 58];

function insertion_sort(arr) {
  let i, j, key;
  for (j = 1; j < arr.length; j++) {
    key = arr[j];
    i = j - 1;
    // 其中 arr[i] > key 是升序，而 arr[i] < key 是降序
    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i];
      i -= 1;
    }
    arr[i + 1] = key;
  }
  return arr;
}

insertion_sort(A) // [26, 31, 41, 41, 58, 59]