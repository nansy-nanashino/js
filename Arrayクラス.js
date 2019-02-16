function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var ary = new Array("東京", "大阪", "名古屋");
for (var i = 0 ; i < ary.length ; i++){
  print("array[" + i + "] = " + ary[i]);
}

document.write("</p>");

document.write("<p>");

try{
  var ary2 = new Array(-1);
}catch(e){
  print(e);
}

document.write("</p>");