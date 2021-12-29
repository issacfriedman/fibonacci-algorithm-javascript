

function fib(endNum, begin = 1, current = 1, prev = 1, round = 1) {
  if (begin !== 1 && round === 1) {
    prev = begin;
    current = begin;
  }
  if (round >= endNum) return prev;
  return fib(endNum, begin, current + prev, current, round + 1);
}



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



function fibReverse(endNum, begin = 1, current = 1, prev = 1, round = 1) {
  if (begin !== 1 && round === 1) {
    prev = begin;
    current = begin;
  }
  if (prev > endNum) return 'not a fib number';
  if (prev === endNum) return round;
  return fibReverse(endNum, begin, current + prev, current, round + 1);
}



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



