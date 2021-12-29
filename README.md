

# Fibonacci Algorithm Javascript

A few halpfull functions to callculate the Fibonacci sequence 

All the functions except a begin parameter as it's secund argument, if not persent the default will be 1



for exemple if the begin is 1 (default) the sequence will be 

```javascript 
  1 1 2 3 5 8 13 21 34 55 89 144 233
  1 2 3 4 5 6 7  8  9  10 11 12  13
  ```
  
  But if you plug for instence begin 15, then the Fibonacci sequence will be
```javascript
    15 15 30 45 75 120 195 315 510 825 1335 2160 3495
    1  2  3  4  5  6   7   8   9   10  11   12   13
```

# fib 
#### The fib function returned  the spot where the number you give is in the Fibonacci sequence
For exemple 7 will be 13 as the 7'nd number in Fibonacci starting at 1 is 13  

```javascript
fib(8) => 21
```

It also take a secund option argument begin (as explaind above) to set where the Fibonacci should start

```javascript
fib(8,15) => 315
```

```javascript

function fib(endNum, begin = 1, current = 1, prev = 1, round = 1) {
  if (begin !== 1 && round === 1) {
    prev = begin;
    current = begin;
  }
  if (round >= endNum) return prev;
  return fib(endNum, begin, current + prev, current, round + 1);
}
```
```diff
- Do not set the remaing varables its for recurtion purposes only 
```


## fibNext

fib next will return the next number in the Fibonacci sequence or not 
```javascript 
'not a fib number'
```
if the number given is not a part of the Fibonacci sequence

for exemple 
```javascript 
fibNext(13) => 21
```
as all the function you can set the base from where the Fibonacci should start to count 

```javascript 
fibNext(45,15) => 75
```
```javascript
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
```

## fibReverse 

Fib Reverse will return the spot given a Fibonacci number or 'not a fib number'
for exemple
```javascript 
fibReverse(21) => 
// OR
fibReverse(45, 15) => 75
```
```javascript
function fibReverse(endNum, begin = 1, current = 1, prev = 1, round = 1) {
  if (begin !== 1 && round === 1) {
    prev = begin;
    current = begin;
  }
  if (prev > endNum) return 'not a fib number';
  if (prev === endNum) return round;
  return fibReverse(endNum, begin, current + prev, current, round + 1);
}
```

## fibMaxBeforeNumber
fibMaxBeforeNumber will return the highest Fibonacci number before the number you give
for exemple 
```javascript 
fibMaxBeforeNumber(40) => 34
fibMaxBeforeNumber(45) => 34 
```
As the Fibonacci sequence is 21 34 55 etc. the highest number before is 34 
you can also plug in a begin number 
for exemple 
```javascript 
fibMaxBeforeNumber(100, 15) => 75
```
As the Fibonacci sequence is 45 75 120 etc. the highest number before is 75
 
