

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.push("Kiwi");
  document.getElementById("demo").innerHTML = fruits;
}



var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo2").innerHTML = fruits;

function myFunction2() {
  fruits.pop();
  document.getElementById("demo2").innerHTML = fruits;
}

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo3").innerHTML = fruits;

function myFunction3() {
  fruits.shift();
  document.getElementById("demo3").innerHTML = fruits;
  
}

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo4").innerHTML = fruits;

function myFunction4() {
  fruits.unshift(1619);
  document.getElementById("demo4").innerHTML = fruits;
  
}

var fruits = ["Banana", "Orange", "Apple", "Mango" ];
document.getElementById("demo5").innerHTML = fruits;

function myFunction5() {
  fruits.splice(2, 0, "Lemon", "Kiwi");
  document.getElementById("demo5").innerHTML = fruits;
}

function myFunction6() {
    var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    var fruit = fruits.slice(1, 3);
    document.getElementById("demo6").innerHTML = fruit;
  }
  
  

  
  