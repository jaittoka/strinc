# strinc
Incremental string generator

Simple example
--------------

```
var Strinc = require('strinc');
var generate = Strinc();
var output = [];
for (var i = 0; i < 100; i++)
  output.push(generate());
console.log(output.join(', '));
```

Will output:
```
a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, 
x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, 
U, V, W, X, Y, ba, bb, bc, bd, be, bf, bg, bh, bi, bj, bk, bl, bm, bn, 
bo, bp, bq, br, bs, bt, bu, bv, bw, bx, by, bz, bA, bB, bC, bD, bE, 
bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, bU, bV, bW
```

Without arguments Strinc will create a generator function using standard english alphabet letters.

Advanced example
----------------

You can give your own alphabet to Strinc:

```
var Strinc = require('strinc');
var generate = Strinc('01');

for (var i = 0; i < 10; i++)
  console.log(generate());
```

Will output:
```
0
1
10
11
100
101
110
111
1000
1001
```

In this example we gave "01" as the alphabet. In this case generator generates binary number strings.

Predefined alphabets
--------------------

Strinc has some predefined alphabets for your convinience:

```
Strinc.STR = english alphabet (low and high cap letters)
Strinc.BIN - binary numbers
String.DEC - decimal numbers
Strinc.OCT - octal numbers
Strinc.HEX - hexadecimal numbers
```

So if you want to generate hexadecimal number strings, do:

```
var Strinc = require('strinc');
var generate = Strinc(Strinc.HEX);

for (var i = 0; i < 20; i++)
  console.log(generate());
```

Will output:
```
0
1
2
3
4
5
6
7
8
9
a
b
c
d
e
f
10
11
12
13
```

Continuing from an existing string
----------------------------------

If you already have a string from which you want to continue id generation you can 
do it using `Strinc.parse()` function.

Example: YOu have a hexadecimal id `a4c6` from which you want to continue id generation.

```
var Strinc = require('strinc');
var generate = Strinc.parse("a4c6", Strinc.HEX);

for (var i = 0; i < 10; i++)
  console.log(generate());

```

Will output:

```
a4c6
a4c7
a4c8
a4c9
a4ca
a4cb
a4cc
a4cd
a4ce
a4cf
```
