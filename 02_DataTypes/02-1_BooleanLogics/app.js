var x = 99;

x == '99'; //true

x === '99'; //false

var y = null;

y == undefined; //true

y === undefined; //false

// Extra
true == '1'; //true

0 == false; //true

null == undefined; //true

NaN == NaN; //false

// Excercise
var x = 10;
var y = 'a';

y === 'b' || x >= 10;

// Excercise2
var x = 3;
var y = 8;

!(x == '3' || x === y) && !(y != 8 && x <= y);

// Excercise3
var str = '';
var msg = 'haha!';
var isFunny = 'false';

!((str || msg) && isFunny);
