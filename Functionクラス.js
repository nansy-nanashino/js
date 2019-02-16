function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var heikin = new Function("x", "y", "var result = (x + y) / 2;return result;");

print("10 と 8の平均は" + heikin(10, 8));
print("32 と 19の平均は" + heikin(32, 19));

document.write("</p>");