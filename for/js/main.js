'use strict';

// for

for (let i = 1; i <= 10; i++) {
  // console.log('hello');
  // console.log(i + ' hello');
  console.log(`${i} hello`);
}

// 通常のfor文
var sum = 0;

for (var i = 0; i < 10; i++){
  sum += 2;
}

document.write("<p>2を10回加えた合計は" + sum + "</p>");

document.write("<p>");

// forの中にfor

for (var i = 1; i <= 9; i++){
  for (var j = 1; j <= 9; j++){
    document.write(i + " × " + j + " = " + (i * j) + "<br />");
  }
}

document.write("</p>");


// fo...in...

var personal = {
  name:'加藤',
  old:28,
  address:'東京都',
  email:'katou@example.com'
}

document.write("<p>");

for(var pname in personal){
  document.write(pname + " : " + personal[pname] + "<br />");
}

document.write("</p>");
