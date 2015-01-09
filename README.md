# strinc
Incremental string generator

Simple example
--------------

```
  var Strinc = require('./strinc');
  var generate = Strinc();

  for (var i = 0; i < 10; i++)
    console.log(generate());
```

Will output:
```
a
b
c
d
e
f
g
h
i
j
```

Without arguments Strinc will create a generator function using standard english alphabet letters.

Advanced example
----------------

You can give your own alphabet to Strinc:

```
  var Strinc = require('./strinc');
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
  Strinc.BIN - binary numbers
  String.DEC - decimal numbers
  Strinc.OCT - octal numbers
  Strinc.HEX - hexadecimal numbers
```

So if you want to generate hexadecimal number strings, do:

```
  var Strinc = require('./strinc');
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
