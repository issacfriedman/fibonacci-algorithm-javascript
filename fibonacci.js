// ============================================

//    PASSED

// ============================================

function fib(endNum, begin = 1, current = 1, prev = 1, round = 1) {
  if (begin !== 1 && round === 1) {
    prev = begin;
    current = begin;
  }
  if (round >= endNum) return prev;
  return fib(endNum, begin, current + prev, current, round + 1);
}

// ============================================

//    PASSED

// ============================================

function fibNext(endNum, begin = 1, current = 1, prev = 1, round = 1) {
  if (begin !== 1 && round === 1) {
    prev = begin;
    current = begin;
  }
  if (prev === endNum && prev === begin) return prev * 2;
  if (prev === endNum) return current;
  if (prev > endNum) return 'not a fib number';
  return fibNext(endNum, begin, current + prev, current, round + 1);
}

// ============================================

//    PASSED

// ============================================

function fibReverse(endNum, begin = 1, current = 1, prev = 1, round = 1) {
  if (begin !== 1 && round === 1) {
    prev = begin;
    current = begin;
  }
  if (prev > endNum) return 'not a fib number';
  if (prev === endNum) return round;
  return fibReverse(endNum, begin, current + prev, current, round + 1);
}

// ============================================

//    PASSED

// ============================================

function fibMaxBeforeNumber(
  endNum,
  begin = 1,
  current = 1,
  prev = 1,
  round = 1
) {
  if (begin !== 1 && round === 1) {
    prev = begin;
    current = begin;
  }
  if (endNum <= begin)
    return 'can not be less or eaqual to then the begin number';
  if (prev >= endNum) return current - prev;
  return fibMaxBeforeNumber(endNum, begin, current + prev, current, round + 1);
}

// ============================================

//    TESTS

// ============================================

// console.log(fibNext(15, 15)); // should return 30
// console.log(fibNext(17, 15)); // => not a fib number
// console.log(fibNext(30, 15)); // => 45
// console.log(fibNext(45, 15)); // => 75
// console.log(fibNext(120, 15)); // => 195
// console.log(fibNext(145, 15)); // => not a fib number
// console.log(fibNext(315, 15)); // => 510
// console.log(fibNext(75, 15)); // => 120
// console.log(fibNext(65, 15)); // => not a fib number

// console.log(fibReverse(1)); // => 1 || 2
// console.log(fibReverse(2)); // => 3
// console.log(fibReverse(3)); // => 4
// console.log(fibReverse(5)); // => 5
// console.log(fibReverse(6)); // => not a fib number
// console.log(fibReverse(8)); // => 6
// console.log(fibReverse(13)); // => 7
// console.log(fibReverse(16)); // => not a fib number
// console.log(fibReverse(9227465)); // => 32

// console.log(` ================================
//           ${'fibReverse'.toUpperCase()}
//           ====================================
// `);
// console.log(fibReverse(15, 15)); // => 1 || 2
// console.log(fibReverse(17, 15)); // => not a fib number
// console.log(fibReverse(30, 15)); // => 3
// console.log(fibReverse(45, 15)); // => 4
// console.log(fibReverse(120, 15)); // => 6
// console.log(fibReverse(145, 15)); // => not a fib number
// console.log(fibReverse(315, 15)); // => 8
// console.log(fibReverse(75, 15)); // => 5
// console.log(fibReverse(65, 15)); // => not a fib number

// console.log(fibMaxBeforeNumber(1)); // => 1
// console.log(fibMaxBeforeNumber(2)); // => 1
// console.log(fibMaxBeforeNumber(35)); // => 34
// console.log(fibMaxBeforeNumber(51)); // => 34
// console.log(fibMaxBeforeNumber(12)); // => 8
// console.log(fibMaxBeforeNumber(8)); // => 5
// console.log(fibMaxBeforeNumber(13)); // => 8
// console.log(fibMaxBeforeNumber(16)); // => 13
// console.log(fibMaxBeforeNumber(9227465)); // => ?

// console.log(fibMaxBeforeNumber(15, 15)); // => 1
// console.log(fibMaxBeforeNumber(2, 15)); // => can not be less then the begin number
// console.log(fibMaxBeforeNumber(35, 15)); // => 30
// console.log(fibMaxBeforeNumber(51, 15)); // => 45
// console.log(fibMaxBeforeNumber(12, 15)); // => can not be less then the begin number
// console.log(fibMaxBeforeNumber(98, 15)); // => 75
// console.log(fibMaxBeforeNumber(123, 15)); // => 120
// console.log(fibMaxBeforeNumber(16, 15)); // => 15
// console.log(fibMaxBeforeNumber(9227465, 15)); // => ?

// ============================================

//    EXEMPLES

// ============================================

//  1 1
//   2 1
//  3 2
// 5 2

//  1 1 2 3 5 8 13 21 34 55 89 144 233
//  1 2 3 4 5 6 7  8  9  10 11 12  13

//  1 1
//   2 1
//     3 2

// 15 15 30 45 75 120 195 315 510 825 1335 2160 3495
// 1  2  3  4  5  6   7   8   9   10  11   12   13
// ============================================

